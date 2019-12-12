import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPromocionesComponent } from './book-promociones.component';

describe('BookPromocionesComponent', () => {
  let component: BookPromocionesComponent;
  let fixture: ComponentFixture<BookPromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
