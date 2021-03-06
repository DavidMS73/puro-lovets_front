import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

//const btnfilterByC1: HTMLElement = document.getElementById("button-filterByC1");
//btnfilterByC1.onclick = function() { this.filterBooks();};

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  filteredBooks: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  
  filterBooks(categoria: number) {
    console.log(categoria);
    this.filteredBooks = this.books.filter(book =>book.categoria===categoria);
    console.log(this.filteredBooks);
  }

  getBooks(): void {
    console.log("getBooks on init");
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.filteredBooks = this.books;
      console.log(this.books);
    });
  } 

  onFiltro(categoria:number) {
    this.filterBooks(categoria);
  }
 
}
