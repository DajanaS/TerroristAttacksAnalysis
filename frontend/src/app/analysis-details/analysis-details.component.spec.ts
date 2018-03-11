import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisDetailsComponent } from './analysis-details.component';

describe('AnalysisDetailsComponent', () => {
  let component: AnalysisDetailsComponent;
  let fixture: ComponentFixture<AnalysisDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
