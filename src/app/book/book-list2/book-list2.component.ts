import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list2',
  templateUrl: './book-list2.component.html',
  styleUrls: ['./book-list2.component.css']
})
export class BookList2Component implements OnInit {

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
