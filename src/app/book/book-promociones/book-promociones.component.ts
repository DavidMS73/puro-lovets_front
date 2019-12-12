import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-promociones',
  templateUrl: './book-promociones.component.html',
  styleUrls: ['./book-promociones.component.css']
})
export class BookPromocionesComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  filterBooks() {
    console.log(this.books);
    this.filteredBooks = this.books.filter(book => book.descuento>0);
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
