import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalOverviewComponent } from './festival-overview.component';

describe('FestivalOverviewComponent', () => {
  let component: FestivalOverviewComponent;
  let fixture: ComponentFixture<FestivalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
