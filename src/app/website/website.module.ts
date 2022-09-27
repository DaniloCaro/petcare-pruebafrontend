//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '../auth/auth.module';
import { CookieService } from 'ngx-cookie-service';
import { WebsiteRoutingModule } from './website-routing.module';
//Components
import { SliderCardComponent } from './components/slider-card/slider-card.component';
import { BtniconComponent } from './components/btnicon/btnicon.component';
import { LocationTextComponent } from './layout/location-text/location-text.component';
import { SliderComponent } from './components/slider/slider.component';
import { HowItWorksComponent } from './templates/how-it-works/how-it-works.component';
import { OurServicesComponent } from './templates/our-services/our-services.component';
import { AboutUsComponent } from './templates/about-us/about-us.component';
import { FooterComponent } from './templates/footer/footer.component';
import { OwnersPetsComponent } from './templates/owners-pets/owners-pets.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from '../shared/pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
//    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CardComponent,
    NavComponent,
    HeroComponent,
    BtniconComponent,
    LocationTextComponent,
    SliderComponent,
    HowItWorksComponent,
    OurServicesComponent,
    AboutUsComponent,
    FooterComponent,
    OwnersPetsComponent,
    SliderCardComponent
  ],
  imports: [
    WebsiteRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    BrowserModule
  ],
  providers: [CookieService],
})
export class WebsiteModule { }
