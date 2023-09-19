import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionActivoComponent } from './actualizacion-activo.component';

describe('ActualizacionActivoComponent', () => {
  let component: ActualizacionActivoComponent;
  let fixture: ComponentFixture<ActualizacionActivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionActivoComponent]
    });
    fixture = TestBed.createComponent(ActualizacionActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
