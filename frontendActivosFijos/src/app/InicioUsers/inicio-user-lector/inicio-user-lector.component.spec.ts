import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioUserLectorComponent } from './inicio-user-lector.component';

describe('InicioUserLectorComponent', () => {
  let component: InicioUserLectorComponent;
  let fixture: ComponentFixture<InicioUserLectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioUserLectorComponent]
    });
    fixture = TestBed.createComponent(InicioUserLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
