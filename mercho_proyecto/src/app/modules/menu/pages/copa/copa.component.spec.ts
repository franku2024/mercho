import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopaComponent } from './copa.component';

describe('CopaComponent', () => {
  let component: CopaComponent;
  let fixture: ComponentFixture<CopaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopaComponent]
    });
    fixture = TestBed.createComponent(CopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
