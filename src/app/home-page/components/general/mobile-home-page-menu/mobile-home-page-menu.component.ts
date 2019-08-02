import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-home-page-menu',
  templateUrl: './mobile-home-page-menu.component.html',
  styleUrls: ['./mobile-home-page-menu.component.scss']
})
export class MobileHomePageMenuComponent implements OnInit {
  show: boolean;

  constructor() { }

  ngOnInit() {
  }
  toggleMenu(){
    this.show =!this.show;
  }

}
