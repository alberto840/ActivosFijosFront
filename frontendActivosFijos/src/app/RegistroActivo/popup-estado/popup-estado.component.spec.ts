import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEstadoComponent } from './popup-estado.component';

describe('PopupEstadoComponent', () => {
  let component: PopupEstadoComponent;
  let fixture: ComponentFixture<PopupEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupEstadoComponent]
    });
    fixture = TestBed.createComponent(PopupEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
