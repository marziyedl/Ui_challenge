import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.scss']
})
export class MobileFooterComponent implements OnInit {
showFirstMenu:boolean =false;
showSeacondMenu:boolean =false;

  constructor() { }

  ngOnInit() {
  }
toggleFirstMenu(){
  this.showFirstMenu = !this.showFirstMenu;

}
toggleSecondMenu(){
  this.showSeacondMenu = !this.showSeacondMenu;

}

}
