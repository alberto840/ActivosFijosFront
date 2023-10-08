import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorDetalleGrupoComponent } from './lector-detalle-grupo.component';

describe('LectorDetalleGrupoComponent', () => {
  let component: LectorDetalleGrupoComponent;
  let fixture: ComponentFixture<LectorDetalleGrupoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LectorDetalleGrupoComponent]
    });
    fixture = TestBed.createComponent(LectorDetalleGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
