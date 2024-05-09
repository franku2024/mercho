import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibertadoresComponent } from './libertadores.component';

describe('LibertadoresComponent', () => {
  let component: LibertadoresComponent;
  let fixture: ComponentFixture<LibertadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibertadoresComponent]
    });
    fixture = TestBed.createComponent(LibertadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
