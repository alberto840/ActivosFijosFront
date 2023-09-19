import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLocalizacionComponent } from './registro-localizacion.component';

describe('RegistroLocalizacionComponent', () => {
  let component: RegistroLocalizacionComponent;
  let fixture: ComponentFixture<RegistroLocalizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroLocalizacionComponent]
    });
    fixture = TestBed.createComponent(RegistroLocalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
