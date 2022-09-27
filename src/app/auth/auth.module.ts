// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
// Components
import { LogoComponent } from '../shared/components/logo/logo.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: () => 'Campo requerido',
          email: () => 'Por favor ingrese un correo válido',
          minlength: ({requiredLength, actualLength}) => `Este campo requiere al menos ${requiredLength} caracteres, usted ingresó ${actualLength}`,
          maxlength: ({requiredLength, actualLength}) => `Este campo requiere al menos ${requiredLength} caracteres, usted ingresó ${actualLength}`,
          pattern: () => 'Por favor ingrese un correo válido',
        }
      }
    })
  ],
  providers: [CookieService]
})
export class AuthModule { }
