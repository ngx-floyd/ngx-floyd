import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { FloColumnResizeService } from './resize.service';

@Directive({
  selector: '[flo-column-resize]',
})
export class FloColumnResizeDirective implements AfterViewInit, OnDestroy {
  @Input() index!: number;

  @Output() resizeStart = new EventEmitter();
  @Output() resizeEnd = new EventEmitter();

  private oldClientX: number = 0;
  private _destroy$ = new Subject();

  mouseDown$!: Observable<MouseEvent>;
  mouseMove$!: Observable<MouseEvent>;
  mouseUp$!: Observable<MouseEvent>;

  constructor(
    private resizeService: FloColumnResizeService,
    @Inject(DOCUMENT) private document: Document,
    private element: ElementRef,
    private zone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    this.connectEvents();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private connectEvents() {
    this.zone.runOutsideAngular(() => {
      this.mouseDown$ = fromEvent<MouseEvent>(this.element.nativeElement, 'mousedown').pipe(
        tap((e) => {
          e.preventDefault();
          e.stopPropagation();
        }),
      );
      this.mouseMove$ = fromEvent<MouseEvent>(this.document, 'mousemove').pipe(
        tap((e) => {
          e.preventDefault();
          e.stopPropagation();
        }),
      );
      this.mouseUp$ = fromEvent<MouseEvent>(this.document, 'mouseup').pipe(
        tap((e) => {
          e.preventDefault();
          e.stopPropagation();
        }),
      );

      this.mouseDown$
        .pipe(
          takeUntil(this._destroy$),
          tap((e) => this.startResize(e)),
          switchMap(() =>
            this.mouseMove$.pipe(
              tap((e) => this.renderResize(e)),
              takeUntil(this.mouseUp$.pipe(tap((e) => this.finishResize(e)))),
            ),
          ),
        )
        .subscribe();
    });
  }

  private startResize(event: MouseEvent) {
    this.resizeStart.emit();
    this.resizeService.startResizeAnimation(this.index);
    this.oldClientX = event.clientX;
  }

  private renderResize(event: MouseEvent) {
    const offset = event.clientX - this.oldClientX;
    this.resizeService.offsetColumnWidth(this.index, offset, true);
  }

  private finishResize(e: any) {
    this.resizeService.stopResizeAnimation();
    this.resizeEnd.emit();
  }
}
