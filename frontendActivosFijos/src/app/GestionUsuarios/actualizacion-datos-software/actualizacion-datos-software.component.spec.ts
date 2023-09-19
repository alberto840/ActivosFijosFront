import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionDatosSoftwareComponent } from './actualizacion-datos-software.component';

describe('ActualizacionDatosSoftwareComponent', () => {
  let component: ActualizacionDatosSoftwareComponent;
  let fixture: ComponentFixture<ActualizacionDatosSoftwareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionDatosSoftwareComponent]
    });
    fixture = TestBed.createComponent(ActualizacionDatosSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
