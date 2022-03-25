import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternPageComponent } from './pattern-page.component';

describe('PatternPageComponent', () => {
  let component: PatternPageComponent;
  let fixture: ComponentFixture<PatternPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
