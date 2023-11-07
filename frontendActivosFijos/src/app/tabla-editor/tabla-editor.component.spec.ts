import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEditorComponent } from './tabla-editor.component';

describe('TablaEditorComponent', () => {
  let component: TablaEditorComponent;
  let fixture: ComponentFixture<TablaEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaEditorComponent]
    });
    fixture = TestBed.createComponent(TablaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
