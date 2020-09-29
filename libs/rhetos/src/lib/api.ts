import { Injectable } from '@angular/core';
import { ActionService } from './action/rest';
import { ComplexGetInfo, ComplexInfo } from './complex/info';
import { ComplexGetService, ComplexService } from './complex/rest';
import { EntityService } from './entity/service';
import { FunctionInfo } from './function/info';
import { FunctionService } from './function/rest';
import { QueryableService } from './queryable/rest';
import { TemplaterReportService } from './report/rest';
import { RhetosRestService } from './core/rest';
import { FloRhetosModule } from './rhetos.module';
import { StructureInfo } from './structure/info';
import { Entity } from './entity/interfaces';

@Injectable({ providedIn: FloRhetosModule })
export class RhetosRest {
  constructor(protected rhetosRest: RhetosRestService) {}

  forAction<T>(info: StructureInfo<T>): ActionService<T> {
    return new ActionService(info, this.rhetosRest);
  }

  forQueryable<T extends Entity>(info: StructureInfo<T>): QueryableService<T> {
    return new QueryableService(info, this.rhetosRest);
  }

  forEntity<T extends Entity>(info: StructureInfo<T>): EntityService<T> {
    return new EntityService(info, this.rhetosRest);
  }

  forTemplaterReport<T>(info: StructureInfo<T>): TemplaterReportService<T> {
    return new TemplaterReportService(info, this.rhetosRest);
  }

  forFunction<T, R>(info: FunctionInfo<T, R>): FunctionService<T, R> {
    return new FunctionService<T, R>(info, this.rhetosRest);
  }

  forComplexGet<T>(info: ComplexGetInfo<T>): ComplexGetService<T> {
    return new ComplexGetService<T>(info, this.rhetosRest);
  }

  forComplex<T>(info: ComplexInfo<T>): ComplexService<T> {
    return new ComplexService<T>(info, this.rhetosRest);
  }
}
