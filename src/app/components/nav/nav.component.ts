import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor( private cookieService: CookieService, private router: Router ) { }

  ngOnInit(): void {
  }

  closeSession() {
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }
}
