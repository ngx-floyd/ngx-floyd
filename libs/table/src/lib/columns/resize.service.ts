import { ElementRef, Injectable, NgZone } from '@angular/core';
import { cancelRequestAnimationFrame, reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { FloDomService } from '../core/dom.service';
import { FloOptionsStore } from '../options/options.store';

@Injectable()
export class FloColumnResizeService {
  private tContainer: HTMLElement | null = null;
  private tHeadTable: HTMLElement | null = null;
  private tBodyTable: HTMLElement | null = null;
  private colHead: HTMLElement | null = null;
  private colBody: HTMLElement | null = null;

  private elementsLoaded: boolean = false;

  private oldTableWidth: number = 0;
  private oldColumnWidth: number = 0;
  private oldCursor: string = 'initial';
  private oldUserSelect: string = 'initial';
  private oldWebkitUserSelect: string = 'initial';

  constructor(
    private dom: FloDomService,
    private element: ElementRef,
    private zone: NgZone,
    private optionsStore: FloOptionsStore,
  ) {}

  setColumnWidth(colIndex: number, width: number) {
    this.loadColumnElements(colIndex);
    this.resizeLoadedColumn(width);
  }

  offsetColumnWidth(colIndex: number, offsetWidth: number, animate?: boolean) {
    if (!animate) {
      this.loadColumnElements(colIndex);
    }

    this.resizeLoadedColumn(this.oldColumnWidth + offsetWidth);
  }

  startResizeAnimation(colIndex: number) {
    this.tContainer = this.dom.getContainer();
    this.refreshTableElementsForResize();
    this.loadColumnElements(colIndex);
    this.elementsLoaded = true;
    this.setResizeIcons();
    this.newWidth = this.oldTableWidth;
    this.newColWidth = this.oldColumnWidth;
    this.startRafLoop();
  }

  stopResizeAnimation() {
    this.stopRafLoop();
    this.resetResizeIcons();
    this.elementsLoaded = false;
  }

  refreshTableElementsForResize() {
    this.tContainer = this.dom.getContainer();

    if (this.optionsStore.isVerticalScroll()) {
      this.tHeadTable = this.dom.getHeaderTable();
    }

    this.tBodyTable = this.dom.getBodyTable();
    this.oldTableWidth = parseInt(this.tBodyTable.style.width.replace('px', ''), 10);
  }

  private resizeLoadedColumn(width: number) {
    if (width <= 48) return;

    this.newWidth = this.oldTableWidth + width - this.oldColumnWidth;
    this.newColWidth = width;
  }

  private loadColumnElements(colIndex: number) {
    this.clearColumnElements();

    if (this.optionsStore.isVerticalScroll()) {
      this.colHead = this.dom.getHeaderColumns()[colIndex];
    }
    this.colBody = this.dom.getBodyColumns()[colIndex];

    this.oldColumnWidth = parseInt(this.colBody.style.width.replace('px', ''), 10);
    if (!this.isElementsLoaded()) {
      console.error('FloColumnResizeService: Resize elements not loaded.');
    }
  }

  private clearColumnElements() {
    this.colHead = this.colBody = null;
  }

  private setResizeIcons() {
    const container = this.tContainer as HTMLElement;

    this.oldCursor = container.style.cursor;
    this.oldUserSelect = container.style.userSelect;
    this.oldWebkitUserSelect = container.style.webkitUserSelect;

    container.style.cursor = 'ew-resize';
    container.style.userSelect = 'none';
    container.style.webkitUserSelect = 'none';
    (this.tHeadTable as HTMLElement)?.classList.add('flo-resizing');
  }

  private resetResizeIcons() {
    const container = this.tContainer as HTMLElement;

    container.style.cursor = this.oldCursor;
    container.style.userSelect = this.oldUserSelect;
    container.style.webkitUserSelect = this.oldWebkitUserSelect;
    (this.tHeadTable as HTMLElement).classList.remove('flo-resizing');
  }

  private isElementsLoaded() {
    return (
      (!this.optionsStore.isVerticalScroll() || (this.colHead && this.tHeadTable)) &&
      this.colBody &&
      this.tBodyTable
    );
  }

  newWidth = 0;
  newColWidth = 0;
  frameId = -1;

  private startRafLoop() {
    this.frameId = requestAnimationFrame(
      this.optionsStore.isVerticalScroll() ? this.rafLoop : this.rafLoopNoVertical,
    );
  }

  private stopRafLoop() {
    cancelRequestAnimationFrame(this.frameId);
    this.frameId = -1;
  }

  private rafLoop = () => {
    (this.tBodyTable as HTMLElement).style.width = `${this.newWidth}px`;
    (this.tHeadTable as HTMLElement).style.width = `${this.newWidth}px`;
    (this.colHead as HTMLElement).style.width = `${this.newColWidth}px`;
    (this.colBody as HTMLElement).style.width = `${this.newColWidth}px`;
    this.frameId = reqAnimFrame(this.rafLoop);
  };

  private rafLoopNoVertical = () => {
    (this.tBodyTable as HTMLElement).style.width = `${this.newWidth}px`;
    (this.colBody as HTMLElement).style.width = `${this.newColWidth}px`;
    this.frameId = reqAnimFrame(this.rafLoopNoVertical);
  };
}
