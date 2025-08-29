import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCapsuleList } from './time-capsule-list';

describe('TimeCapsuleList', () => {
  let component: TimeCapsuleList;
  let fixture: ComponentFixture<TimeCapsuleList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCapsuleList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeCapsuleList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
