import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepiker',
  templateUrl: './datepiker.page.html',
  styleUrls: ['./datepiker.page.scss'],
})
export class DatepikerPage implements OnInit {
  constructor() {}

  fechaNac: Date = new Date();
  custonPikerOpcions;
  customDate;
  ngOnInit() {
    this.custonPikerOpcions = {
      buttons: [{
        text: 'Guardar',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: (event) => {
          console.log('Clicked Log. Do not Dismiss.');
          console.log(event);

        }
      }]
    };
  }

  cambioFecha(event) {
    console.log('ionChange', event);
    console.log('Date', new Date(event.detail.value));
  }


}
