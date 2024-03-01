import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEscuelaComponent } from './detalle-escuela.component';

describe('DetalleEscuelaComponent', () => {
  let component: DetalleEscuelaComponent;
  let fixture: ComponentFixture<DetalleEscuelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleEscuelaComponent]
    });
    fixture = TestBed.createComponent(DetalleEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
