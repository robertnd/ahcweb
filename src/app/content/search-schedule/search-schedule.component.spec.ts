import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchScheduleComponent } from './search-schedule.component';

describe('SearchScheduleComponent', () => {
  let component: SearchScheduleComponent;
  let fixture: ComponentFixture<SearchScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
