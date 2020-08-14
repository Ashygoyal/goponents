import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoOffCanvasHeaderComponent } from './go-off-canvas-header.component';

describe('GoOffCanvasHeaderComponent', () => {
  let component: GoOffCanvasHeaderComponent;
  let fixture: ComponentFixture<GoOffCanvasHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoOffCanvasHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoOffCanvasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
