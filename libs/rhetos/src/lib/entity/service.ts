import { newGuid } from '@ngx-floyd/core';
import { Observable } from 'rxjs';
import { RhetosRestService } from '../core/rest';
import { InfoOrKey } from '../core/util';
import { QueryableService } from '../queryable/rest';
import { Entity, IEntityService, Optional } from './interfaces';

export class EntityService<T extends Entity> extends QueryableService<T>
  implements IEntityService<T> {
  constructor(protected infoOrKey: InfoOrKey<T>, protected restService: RhetosRestService) {
    super(infoOrKey, restService);
  }

  insert(entity: Optional<T, 'ID'>): Observable<{ ID: string }> {
    return this.restService.request<{ ID: string }>(this._key, 'POST', '', this.coerceID(entity));
  }

  update(entity: T): Observable<void> {
    return this.restService.request<void>(this._key, 'PUT', entity.ID, entity);
  }

  delete(id: string): Observable<string> {
    return this.restService.request<string>(this._key, 'DELETE', id);
  }

  private coerceID(entity: Optional<T, 'ID'>) {
    return entity.ID ? entity : { ...entity, ID: newGuid() };
  }
}
