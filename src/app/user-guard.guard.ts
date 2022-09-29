import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'//Manejador de cookies
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) { }

  redirect(flag:boolean): any {
    if(!flag) {
      this.router.navigate(['/login']);//Si no existe la cookie redirigimos a la página de login
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = this.cookieService.check('token');//Comprobamos si existe la cookie
    this.redirect(cookie)
    return cookie;
  }
}
