import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActivosAdminComponent } from './lista-activos-admin.component';

describe('ListaActivosAdminComponent', () => {
  let component: ListaActivosAdminComponent;
  let fixture: ComponentFixture<ListaActivosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaActivosAdminComponent]
    });
    fixture = TestBed.createComponent(ListaActivosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
