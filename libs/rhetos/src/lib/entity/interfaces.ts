import { Observable } from 'rxjs';

export interface Entity {
  ID: string;
}

export interface IEntityService<T extends Entity> {
  insert(entity: T): Observable<{ ID: string }>;
  update(entity: T): Observable<void>;
  delete(id: string): Observable<string>;
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
