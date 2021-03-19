import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string;

  usuario = {
    email:'',
    password: ''
  }
  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    this.presentToast();
    console.log(this.usuario);
  }





  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Datos Correctos.',
      duration: 2000
    });
    toast.present();
  }
}
