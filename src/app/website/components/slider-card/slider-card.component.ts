import { Component, Input, OnInit } from '@angular/core';
// Service
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  constructor(private _userService:UsersService) { }

  @Input() cardImg: string='';
  @Input() cardTitle: string = '';

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe((data) => {
      let arrayData:number = data.data.length;
      let random:number = arrayData + 1;
      while (random > arrayData) {
        random = Math.floor(Math.random() * arrayData);
        this.cardImg = data.data[random].avatar;
        this.cardTitle = data.data[random].first_name;
        break;
      }
    })
  }

}
