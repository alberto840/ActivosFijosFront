import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorDetalleActivoComponent } from './lector-detalle-activo.component';

describe('LectorDetalleActivoComponent', () => {
  let component: LectorDetalleActivoComponent;
  let fixture: ComponentFixture<LectorDetalleActivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LectorDetalleActivoComponent]
    });
    fixture = TestBed.createComponent(LectorDetalleActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
