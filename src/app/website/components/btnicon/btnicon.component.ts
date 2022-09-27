import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btnicon',
  templateUrl: './btnicon.component.html',
  styleUrls: ['./btnicon.component.scss']
})
export class BtniconComponent implements OnInit {

  @Input() inputValue : string= 'Zip Code';

  constructor() { }

  ngOnInit(): void {
  }

}
