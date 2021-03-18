import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refres',
  templateUrl: './refres.page.html',
  styleUrls: ['./refres.page.scss'],
})
export class RefresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
