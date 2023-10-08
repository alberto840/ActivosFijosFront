import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioUserActualizadorComponent } from './inicio-user-actualizador.component';

describe('InicioUserActualizadorComponent', () => {
  let component: InicioUserActualizadorComponent;
  let fixture: ComponentFixture<InicioUserActualizadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioUserActualizadorComponent]
    });
    fixture = TestBed.createComponent(InicioUserActualizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
