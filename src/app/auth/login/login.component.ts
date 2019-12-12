import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  hide = true;

  form: FormGroup;

  constructor(private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  login() {
    this.authService.getUsuarioDetailByUser(this.form.controls.username.value).subscribe(
      (result) => {
        if (result !== undefined) {
          this.authService.setLoggedUser(result);
        } else {
          this.toastr.warning('El usuario no existe', 'Logging in');
        }
      }, error => this.toastr.error(error.message, 'Error')
    );
  }

  ngOnInit() {
  }

}
