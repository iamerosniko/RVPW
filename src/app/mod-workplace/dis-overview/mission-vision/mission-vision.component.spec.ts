import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVisionComponent } from './mission-vision.component';

describe('MissionVisionComponent', () => {
  let component: MissionVisionComponent;
  let fixture: ComponentFixture<MissionVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
