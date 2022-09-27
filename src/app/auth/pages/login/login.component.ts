import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// Services
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder, private _usersService: UsersService, private cookieService: CookieService, private router: Router) {

    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,9}$")]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });

  }
  ngOnInit(): void {
  }

  loader() {
    this.toastr.success('Espere por favor...', 'Iniciando sesión',{
      timeOut: 1500,
    });
  }

  postUser() {
    this._usersService.postUser(this.loginForm.value)
    .subscribe((data) => {
      console.log(this.loginForm.value);
      this.loader();
      setTimeout(() => {
      this.cookieService.set('token', data.token,1,'/');
      this.router.navigate(['/home']);
      }, 2000);
    } , (error) => {
      console.log(error);
      this.toastr.error('Email o contraseña incorrecta!', 'Error al iniciar sesión',{
        timeOut: 3000,
      });
    }
    )
  }
}
