import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {BookService} from '../book.service';
import {Book} from '../book';
import {BookDetail} from '../book-detail';
import {BookReviewComponent} from '../book-review/book-review.component';
import {BookAddReviewComponent} from '../book-add-review/book-add-review.component';
import { TouchSequence } from 'selenium-webdriver';
import { Review } from '../review';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
  
        private router: Router,
        private viewRef: ViewContainerRef
       
    ) {
        //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
        this.numero=0;
        this.calificacion=0;
        this.suma =0;
    }

    /**
    * The book's id retrieved from the path
    */
    book_id: number;
    numero : number;
    calificacion: number;
    suma:number;
    /**
    * The book whose details are shown
    */
    bookDetail: BookDetail;

    /**
    * The other books shown in the sidebar
    */
    other_books: Book[];

    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    aumentar(): void {
        this.numero= this.numero +1;
    }
    dis(): void {
        this.numero= this.numero -1;
    }
   
    estrella (i: number): string{
        
        if (i != null)
         return "../../../assets/"+i+".PNG";
        else
        return "../../../assets/0.PNG";
    }
    gen (): string{
        console.log(this.bookDetail);
        console.log(this.bookDetail.calificacion);
        this.calificacion = 0;
        this.suma =0;
        for (let a of this.bookDetail.reviews)
        {
        
            this.calificacion = this.calificacion + a.calificacion;
            console.log("holis "+this.calificacion);
            this.suma = this.suma +1;
        }
        if (this.suma != 0 )
             this.calificacion = Math.floor(this.calificacion/this.suma );
        else
            this.calificacion = 0;
        if (this.calificacion == NaN)
            return "../../../assets/0.PNG";
        this.numero =0;
        console.log("CAL"+this.calificacion);
         return "../../../assets/"+this.calificacion+".PNG";
        
    }
    toggleReviews(): void {
       
    }

    toggleCreateReview(): void {
        
    }


    /**
    * The method which retrieves the details of the book that
    * we want to show
    */
    getBookDetail(): void {
        this.bookService.getBookDetail(this.book_id)
            .subscribe(bookDetail => {
                this.bookDetail = bookDetail;
            });
          console.log(this.bookDetail);
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.other_books = books;
                this.other_books = this.other_books.filter(book => book.id !== this.book_id);
            });
    }

    /**
     * The function called when a review is posted, so that the child component can refresh the list
     */
    updateReviews(): void {
        this.getBookDetail();
        
    }

    /**
* This function deletes the book from the BookStore 
*/
    deleteBook(): void {
       
    }

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
       console.log("---");
        this.book_id = +this.route.snapshot.paramMap.get('id');
        this.bookDetail = new BookDetail();
        this.numero =0;
        this.getBookDetail();
        this.getOtherBooks();
    }

    /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
      console.log("JAJAJJA");
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}