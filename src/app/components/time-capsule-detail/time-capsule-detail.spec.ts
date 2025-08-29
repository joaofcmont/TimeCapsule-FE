import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCapsuleDetail } from './time-capsule-detail';

describe('TimeCapsuleDetail', () => {
  let component: TimeCapsuleDetail;
  let fixture: ComponentFixture<TimeCapsuleDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCapsuleDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeCapsuleDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
