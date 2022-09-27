import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() logo:string = './assets/img/pet (1).svg';

  constructor() { }

  ngOnInit(): void {
  }

}
