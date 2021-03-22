import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {
  
  }

  async abrirmodal(){
  const modal = await this.modal.create({
      component:ModalInfoPage,
      componentProps: {
        nombre :  'Bernardo ',
        pais   :  'Peru'
         
      }
  });
   await modal.present();
   const {data} = await modal.onDidDismiss();
   console.log('retorno con daots',  data);
   

  
  }
}
