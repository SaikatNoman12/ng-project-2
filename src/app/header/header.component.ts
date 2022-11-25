import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dataStyle: object = {
    'margin-right': '6px',
    'color': 'rgb(13, 110, 253)'
  };

  goBack: boolean = false;
  headerNav: boolean = true;
  headerLogin:boolean = true;
  headerLogInBack: boolean = false;
  headerContactDetails:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



}
