import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

const btnfilterByC1: HTMLElement = document.getElementById("button-filterByC1");
btnfilterByC1.onclick = function() { applyFilterByC1();};

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    console.log("getBooks on init");
    this.bookService.getBooks().subscribe(books => this.books = books);
  } 
 
}

function applyFilterByC1() {
  clearCoursesInTable();
  let booksfiltered: Book[] = searchCourseByC1(1, this.books);
}
 function clearCoursesInTable() {
  while (this.books.hasChildNodes()) {
    this.books.removeChild(this.books.lastChild);
  }
}
  function searchCourseByC1(categoria: number, books: Book[]) {
    let categoriaT:string = categoria+"";
    return categoriaT === '' ? books : books.filter((course) => course.categoria==categoria);
  }