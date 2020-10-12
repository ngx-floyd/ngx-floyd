import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FloFormComponent;
  let fixture: ComponentFixture<FloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
