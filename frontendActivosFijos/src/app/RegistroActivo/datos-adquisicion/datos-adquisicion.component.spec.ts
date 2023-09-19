import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAdquisicionComponent } from './datos-adquisicion.component';

describe('DatosAdquisicionComponent', () => {
  let component: DatosAdquisicionComponent;
  let fixture: ComponentFixture<DatosAdquisicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosAdquisicionComponent]
    });
    fixture = TestBed.createComponent(DatosAdquisicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
