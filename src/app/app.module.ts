// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
// Submodules
import { WebsiteModule } from './website/website.module';
import { AuthModule } from './auth/auth.module';
// Interceptors
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    WebsiteModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,//Escucha todas las peticiones http
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
