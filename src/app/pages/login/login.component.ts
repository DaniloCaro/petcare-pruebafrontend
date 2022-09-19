import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Services
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private _usersService: UsersService, private cookieService: CookieService, private router: Router) {

    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,9}$")]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  // postUser() {
  //   this._usersService.postUser(this.userInputs).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  postUser() {
    this._usersService.postUser(this.loginForm.value)
    .subscribe(data => {
      // console.log(data);
      console.log(this.loginForm.value);
      console.log('login exitoso');
      this.cookieService.set('token', data.token,1,'/');
      this.router.navigate(['/home']);
    });
  }
}
