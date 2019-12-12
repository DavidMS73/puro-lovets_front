import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import {BookModule} from './book/book.module';
import { HomeComponent } from './home/home.component';
import {MatCarouselModule} from '@ngmodule/material-carousel'

import { BookList2Component } from './book/book-list2/book-list2.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookList2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    BookModule,
    MatCarouselModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
