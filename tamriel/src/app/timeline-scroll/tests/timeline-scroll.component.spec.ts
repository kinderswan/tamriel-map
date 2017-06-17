import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineScrollComponent } from '../timeline-scroll.component';

describe('TimelineScrollComponent', () => {
  let component: TimelineScrollComponent;
  let fixture: ComponentFixture<TimelineScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
