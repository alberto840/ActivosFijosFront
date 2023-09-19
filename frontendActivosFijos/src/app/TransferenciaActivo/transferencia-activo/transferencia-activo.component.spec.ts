import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaActivoComponent } from './transferencia-activo.component';

describe('TransferenciaActivoComponent', () => {
  let component: TransferenciaActivoComponent;
  let fixture: ComponentFixture<TransferenciaActivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferenciaActivoComponent]
    });
    fixture = TestBed.createComponent(TransferenciaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
