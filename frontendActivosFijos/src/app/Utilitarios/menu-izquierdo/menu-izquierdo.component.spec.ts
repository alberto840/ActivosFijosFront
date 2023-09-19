import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIzquierdoComponent } from './menu-izquierdo.component';

describe('MenuIzquierdoComponent', () => {
  let component: MenuIzquierdoComponent;
  let fixture: ComponentFixture<MenuIzquierdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuIzquierdoComponent]
    });
    fixture = TestBed.createComponent(MenuIzquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
