import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {
  areas=['suez canal university'];
  cities=['Ismailia','Suez','Port-Said','Cairo'];
  constructor() { }

  ngOnInit() {
  }

}
