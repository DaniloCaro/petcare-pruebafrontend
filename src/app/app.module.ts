import { CookieService } from 'ngx-cookie-service';
// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './components/card/card.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { BtniconComponent } from './components/btnicon/btnicon.component';
import { LocationTextComponent } from './layout/location-text/location-text.component';
import { SliderComponent } from './components/slider/slider.component';
import { HowItWorksComponent } from './templates/how-it-works/how-it-works.component';
import { OurServicesComponent } from './templates/our-services/our-services.component';
import { AboutUsComponent } from './templates/about-us/about-us.component';
import { FooterComponent } from './templates/footer/footer.component';
import { OwnersPetsComponent } from './templates/owners-pets/owners-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    CardComponent,
    LogoComponent,
    NavComponent,
    HeroComponent,
    BtniconComponent,
    LocationTextComponent,
    SliderComponent,
    HowItWorksComponent,
    OurServicesComponent,
    AboutUsComponent,
    FooterComponent,
    OwnersPetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
