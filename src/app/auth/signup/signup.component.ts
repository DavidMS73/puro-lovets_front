import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;

  form: FormGroup;

  constructor(private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required]
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

  signup() {
    if (this.form.controls.pass1.value !== this.form.controls.pass2.value) {
      this.toastr.warning('Contraseñas no coinciden', 'Warning');
    } else {
      const name: string = this.form.controls.firstName.value + ' ' + this.form.controls.lastName.value;
      const userName: string = this.form.controls.username.value;
      const password: string = this.form.controls.pass1.value;

      const user: Usuario = {
        nombre: name,
        contrasena: password,
        username: userName
      };
      this.authService.createUsuario(user).subscribe( o => {
        this.showSuccess();
        this.router.navigate(['/home']);
      }, error => this.toastr.warning('El registro no se logra hacer', 'Registro de usuario'));
    }
  }

  showSuccess() {
    this.toastr.success('Registro', 'Te has registrado exitosamente', { progressBar: true, timeOut: 3000 });
  }

  ngOnInit() {
  }

}
