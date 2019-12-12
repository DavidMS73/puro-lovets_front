import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookList2Component } from './book-list2.component';

describe('BookList2Component', () => {
  let component: BookList2Component;
  let fixture: ComponentFixture<BookList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
