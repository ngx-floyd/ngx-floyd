import { ComponentStore } from '@ngrx/component-store';
import produce from 'immer';

export abstract class FloComponentStore<T extends object> extends ComponentStore<T> {
  updateState(producerFn: (draft: T) => void) {
    this.setState((state) => {
      return produce(state, producerFn);
    });
  }
}
