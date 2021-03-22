import { Component, Inject, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  
  @Input() nombre;
  @Input() pais;

  constructor(private modal:ModalController) {

  }

  salir() {
    this.modal.dismiss();
  }
  guardar() {
    this.modal.dismiss({
      nombre: 'felipe',
      pais: 'España'
    });
    
  }
  ngOnInit() {}
}
