import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIzquierdoEditorComponent } from './menu-izquierdo-editor.component';

describe('MenuIzquierdoEditorComponent', () => {
  let component: MenuIzquierdoEditorComponent;
  let fixture: ComponentFixture<MenuIzquierdoEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuIzquierdoEditorComponent]
    });
    fixture = TestBed.createComponent(MenuIzquierdoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
