import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { FloOptionsStore } from '../options/options.store';

@Injectable()
export class FloDomService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private optionsService: FloOptionsStore,
  ) {}

  getDocumentBody(): HTMLElement {
    return this.document.body;
  }

  getContainer(): HTMLElement {
    return this.document.querySelector(`.${this.optionsService.getTableId()}`) as HTMLElement;
  }

  getBodyTable(): HTMLElement {
    return this.queryTable(this.getTBodyClass());
  }

  getHeaderTable(): HTMLElement {
    return this.queryTable(this.getTHeadClass());
  }

  getBodyColumns(): NodeListOf<HTMLElement> {
    return this.queryColumns(this.getTBodyClass());
  }

  getHeaderColumns(): NodeListOf<HTMLElement> {
    return this.queryColumns(this.getTHeadClass());
  }

  private queryTable(tableClass: string) {
    return this.document.querySelector(
      `.${this.optionsService.getTableId()} ${tableClass} table`,
    ) as HTMLElement;
  }

  private queryColumns(tableClass: string): NodeListOf<HTMLElement> {
    return this.queryAll(`${tableClass} col`);
  }

  private query(selector: string): HTMLElement {
    return this.document.querySelector(
      `.${this.optionsService.getTableId()} ${selector}`,
    ) as HTMLElement;
  }

  private queryAll(selector: string): NodeListOf<HTMLElement> {
    return this.document.querySelectorAll(`.${this.optionsService.getTableId()} ${selector}`);
  }

  private getTHeadClass() {
    return '.ant-table-header';
  }

  private getTBodyClass() {
    return this.optionsService.isVirtualScroll()
      ? '.cdk-virtual-scroll-content-wrapper'
      : this.optionsService.isVirtualScroll()
      ? '.ant-table-fixed'
      : '.ant-table-body';
  }
}
