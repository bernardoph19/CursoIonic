import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepiker',
  templateUrl: './datepiker.page.html',
  styleUrls: ['./datepiker.page.scss'],
})
export class DatepikerPage implements OnInit {

  constructor() { }

  fechaNac : Date = new Date();
  ngOnInit() {
  }

  cambioFecha( event ){
    console.log('ionChange', event);
    console.log('Date', new Date(event.detail.value));


  }

}
