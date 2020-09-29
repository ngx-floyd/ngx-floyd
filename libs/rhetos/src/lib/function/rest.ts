import { Observable } from 'rxjs';
import { StructureService } from '../structure/rest';
import { FunctionInfoOrKey, getFunctionKey } from './info';
import { RhetosRestService } from '../core/rest';

export interface IFunctionService<T, R> {
  execute(param: T): Observable<R>;
}

export class FunctionService<T, R> extends StructureService implements IFunctionService<T, R> {
  constructor(functionInfoOrKey: FunctionInfoOrKey, private rhetosRest: RhetosRestService) {
    super(getFunctionKey(functionInfoOrKey), rhetosRest);
  }

  execute(param: T): Observable<R> {
    return this.request('POST', '', param);
  }
}
