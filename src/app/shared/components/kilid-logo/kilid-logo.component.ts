import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kilid-logo',
  templateUrl: './kilid-logo.component.html',
  styleUrls: []
})
export class KilidLogoComponent implements OnInit {
 @Input() logowidth:string;
  constructor() { }

  ngOnInit() {
  }

}
