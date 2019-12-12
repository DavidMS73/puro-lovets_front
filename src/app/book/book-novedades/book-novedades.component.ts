import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-novedades',
  templateUrl: './book-novedades.component.html',
  styleUrls: ['./book-novedades.component.css']
})
export class BookNovedadesComponent implements OnInit {

  books: Book[] = [];
  filteredBooks: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  filterBooks() {
    console.log(this.books);
    this.filteredBooks = this.books.filter(book => {
      let fecha = new Date(book.publishingdate.slice(0,-5));
      let hoy = new Date();
      (hoy.getTime() - fecha.getTime())/(1000 * 3600 * 24) === 5;
    });
  }

  getBooks(): void {
    console.log("getBooks on init");
    this.bookService.getBooks().subscribe(
      books => {
        this.books = books; 
      this.filterBooks();
      });
  } 
}
