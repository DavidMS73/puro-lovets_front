import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookListComponent} from './book/book-list/book-list.component'
import { HomeComponent } from './home/home.component';
import { BookDetailComponent} from './book/book-detail/book-detail.component'
import { BookNovedadesComponent } from './book/book-novedades/book-novedades.component'
import { BookPromocionesComponent } from './book/book-promociones/book-promociones.component'

const routes: Routes = [
  {
      path: 'auth',
      children: [
          {
              path: 'login',
              component: LoginComponent,
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
    path:'novedades',
    component: BookNovedadesComponent
  },
  {
    path:'promociones',
    component: BookPromocionesComponent
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
