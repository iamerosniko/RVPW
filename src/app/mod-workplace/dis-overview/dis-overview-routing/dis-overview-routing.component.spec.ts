import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisOverviewRoutingComponent } from './dis-overview-routing.component';

describe('DisOverviewRoutingComponent', () => {
  let component: DisOverviewRoutingComponent;
  let fixture: ComponentFixture<DisOverviewRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisOverviewRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisOverviewRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
