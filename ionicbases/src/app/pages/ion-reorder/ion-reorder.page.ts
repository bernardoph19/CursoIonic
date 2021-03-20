import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-reorder',
  templateUrl: './ion-reorder.page.html',
  styleUrls: ['./ion-reorder.page.scss'],
})
export class IonReorderPage implements OnInit {

  constructor() { }

  Almuerzo = [ 'papas', 'camores', 'azucar', 'frejoles', 'camote'];
  ngOnInit() {
  }

}
