import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCustodioComponent } from './registro-custodio.component';

describe('RegistroCustodioComponent', () => {
  let component: RegistroCustodioComponent;
  let fixture: ComponentFixture<RegistroCustodioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroCustodioComponent]
    });
    fixture = TestBed.createComponent(RegistroCustodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
