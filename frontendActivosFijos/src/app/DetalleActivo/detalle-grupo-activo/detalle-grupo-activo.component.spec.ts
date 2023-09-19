import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGrupoActivoComponent } from './detalle-grupo-activo.component';

describe('DetalleGrupoActivoComponent', () => {
  let component: DetalleGrupoActivoComponent;
  let fixture: ComponentFixture<DetalleGrupoActivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleGrupoActivoComponent]
    });
    fixture = TestBed.createComponent(DetalleGrupoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
