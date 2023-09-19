import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaResumenComponent } from './tabla-resumen.component';

describe('TablaResumenComponent', () => {
  let component: TablaResumenComponent;
  let fixture: ComponentFixture<TablaResumenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaResumenComponent]
    });
    fixture = TestBed.createComponent(TablaResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
