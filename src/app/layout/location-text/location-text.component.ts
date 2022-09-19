import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-text',
  templateUrl: './location-text.component.html',
  styleUrls: ['./location-text.component.scss']
})
export class LocationTextComponent implements OnInit {

  @Input() locationTitle: string = 'Our Services';
  @Input() locationText: string = 'National Brand With a Local Feel. Experience the Fetch! Difference';

  constructor() { }

  ngOnInit(): void {
  }

}
