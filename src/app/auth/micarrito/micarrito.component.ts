import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-micarrito',
    templateUrl: './micarrito.component.html',
    styleUrls: ['./micarrito.component.css']
})
export class MicarritoComponent implements OnInit {

    hide = true;

    form: FormGroup;

    constructor(private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router) {
        
    }


    showSuccess() {
        this.toastr.success('Pago', 'Se procederá a su pago', { progressBar: true, timeOut: 3000 });
    }

    showCancel() {
        this.toastr.warning('Pago', 'Se canceló la compra', { progressBar: true, timeOut: 3000 });
    }

    ngOnInit() {
    }

}
