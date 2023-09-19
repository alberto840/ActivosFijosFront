import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarListaActivosComponent } from './actualizar-lista-activos.component';

describe('ActualizarListaActivosComponent', () => {
  let component: ActualizarListaActivosComponent;
  let fixture: ComponentFixture<ActualizarListaActivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarListaActivosComponent]
    });
    fixture = TestBed.createComponent(ActualizarListaActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
