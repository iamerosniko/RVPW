import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisProgramsComponent } from './dis-programs.component';

describe('DisProgramsComponent', () => {
  let component: DisProgramsComponent;
  let fixture: ComponentFixture<DisProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
