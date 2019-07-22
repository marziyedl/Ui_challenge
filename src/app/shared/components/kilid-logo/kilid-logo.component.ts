import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kilid-logo',
  templateUrl: './kilid-logo.component.html',
  styleUrls: ['./kilid-logo.component.scss']
})
export class KilidLogoComponent implements OnInit {
 @Input() logowidth:string;
  constructor() { }

  ngOnInit() {
  }

}
