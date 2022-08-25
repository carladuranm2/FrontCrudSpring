import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaViewerComponent } from './lista-viewer.component';

describe('ListaViewerComponent', () => {
  let component: ListaViewerComponent;
  let fixture: ComponentFixture<ListaViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
