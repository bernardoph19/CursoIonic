import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public  AlertControler:AlertController) { }
  async presentAlert() {
    const alert = await this.AlertControler.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'can',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },


        {
          text: 'Ok',
          cssClass: 'okey',
          handler: (blah) => {
            console.log('Boton de  okey');
          }
        },
      ]
    });

    await alert.present();
  }


  bernaTab = 1;
  tabs($tabNumber :number) {
    this.bernaTab = $tabNumber;
  }



  async  abrirInput() {
    const alert = await this.AlertControler.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'can',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },


        {
          text: 'Ok',
          cssClass: 'okey',
          handler: (blah) => {
            console.log('Boton de  okey');
          }
        },
      ]
    });

    await alert.present();
  }


  ngOnInit() {
  }


}
