import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookListComponent} from './book/book-list/book-list.component'
import { HomeComponent } from './home/home.component';
import { BookDetailComponent} from './book/book-detail/book-detail.component'
import { BookList2Component } from './book/book-list2/book-list2.component';
import { MicarritoComponent } from './auth/micarrito/micarrito.component';

const routes: Routes = [
  {
      path: 'auth',
      children: [
          {
              path: 'login',
              component: LoginComponent,
          },
          {
            path: 'micarrito',
            component: MicarritoComponent,
          },
          {
              path: 'signup',
              component: SignupComponent
          }
      ]
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'libros',
    //component: BookListComponent,
    children: [
      {
        path: 'list',
        component: BookListComponent
      },
      {
          path: ':id',
          component: BookDetailComponent
      }
    ]
  },
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
  },
  {
      path: '**',
      //component: Page404Component,
      redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
