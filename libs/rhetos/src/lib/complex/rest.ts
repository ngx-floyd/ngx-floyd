import { Observable } from 'rxjs';
import { ComplexGetInfo, ComplexInfo } from './info';
import { FunctionService } from '../function/rest';
import { RhetosRestService } from '../core/rest';

export class ComplexGetService<T> {
  private getService: FunctionService<{ ID: string }, T>;
  constructor(protected info: ComplexGetInfo<T>, protected base: RhetosRestService) {
    this.getService = new FunctionService(info.getFunctionInfo, base);
  }

  get(ID: string): Observable<T> {
    return this.getService.execute({ ID });
  }
}

export class ComplexService<T> extends ComplexGetService<T> {
  private saveService: FunctionService<T, T>;

  constructor(info: ComplexInfo<T>, base: RhetosRestService) {
    super({ getFunctionInfo: info.getFunctionInfo }, base);
    this.saveService = new FunctionService<T, T>(info.saveFunctionInfo, base);
  }

  save(entity: T): Observable<T> {
    return this.saveService.execute(entity);
  }
}
