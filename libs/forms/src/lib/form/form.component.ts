import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FloSafeAny } from '@ngx-floyd/core';
import { FloFieldConfig } from '../fields/interfaces';

@Component({
  selector: 'flo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FloFormComponent implements OnChanges {
  @Input() model: FloSafeAny = {};
  @Input() fields: FloFieldConfig[] = [];
  @Input() form: FormGroup = new FormGroup({});

  @Input() layout: 'inline' | 'horizontal' | 'vertical' = 'vertical';

  @Output() floSubmit = new EventEmitter<FloSafeAny>();
  @Output() modelChange = new EventEmitter<FloSafeAny>();

  private _model: FloSafeAny;

  ngOnChanges(changes: SimpleChanges): void {
    const { model } = changes;

    if (model) {
      this._model = model.currentValue;
    }
  }

  onSubmit() {
    this.floSubmit.emit(this._model);
  }

  onModelChange($event: FloSafeAny) {
    this._model = $event;
    this.modelChange.emit($event);
  }
}
