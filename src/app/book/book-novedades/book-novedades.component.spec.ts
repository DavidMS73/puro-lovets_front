import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNovedadesComponent } from './book-novedades.component';

describe('BookNovedadesComponent', () => {
  let component: BookNovedadesComponent;
  let fixture: ComponentFixture<BookNovedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNovedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
