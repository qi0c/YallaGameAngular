import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.css']
})
export class FiltrationComponent implements OnInit {
  height: number;
  constructor() { }

  ngOnInit() {
    this.height = window.innerHeight;
    console.log(this.height)
  }



}
