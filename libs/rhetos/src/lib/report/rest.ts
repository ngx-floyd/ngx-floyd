import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StructureService } from '../structure/rest';

export interface RhetosReportResponse {
  ReportFile: number[];
  SuggestedFileName: string;
}

export type RhetosReportFormat = 'pdf';

export class TemplaterReportService<T> extends StructureService {
  get(param: T, format: RhetosReportFormat = 'pdf'): Observable<RhetosReportResponse> {
    return this.request<RhetosReportResponse>(
      'GET',
      '',
      undefined,
      new HttpParams().append('parameter', JSON.stringify(param)).append('convertFormat', format)
    );
  }

  download(param: T, format: RhetosReportFormat = 'pdf') {
    return this.get(param, format).pipe(tap((res) => this.downloadFile(res)));
  }

  private downloadFile(data: RhetosReportResponse) {
    // It is necessary to create a new blob object with mime-type explicitly set
    // otherwise only Chrome works like it should
    const newBlob = new Blob([new Uint8Array(data.ReportFile).buffer], {
      type: 'application/pdf',
    });

    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const file = window.URL.createObjectURL(newBlob);

    const link = document.createElement('a');
    link.href = file;
    link.download = data.SuggestedFileName;
    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

    setTimeout(function () {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(file);
      link.remove();
    }, 100);
  }
}
