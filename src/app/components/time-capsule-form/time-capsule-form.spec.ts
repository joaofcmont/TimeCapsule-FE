import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCapsuleForm } from './time-capsule-form';

describe('TimeCapsuleForm', () => {
  let component: TimeCapsuleForm;
  let fixture: ComponentFixture<TimeCapsuleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCapsuleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeCapsuleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
