import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIzquierdoLectorComponent } from './menu-izquierdo-lector.component';

describe('MenuIzquierdoLectorComponent', () => {
  let component: MenuIzquierdoLectorComponent;
  let fixture: ComponentFixture<MenuIzquierdoLectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuIzquierdoLectorComponent]
    });
    fixture = TestBed.createComponent(MenuIzquierdoLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
