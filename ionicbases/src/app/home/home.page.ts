import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MenuOpcionService } from '../services/menu-opcion.service';
import { menuOpcion } from '../interfaces/opcionesMenu.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  menu: Observable<menuOpcion[]>;

  constructor(
    private menuCtrl: MenuController,
    private menuserv: MenuOpcionService
  ) {}

  toogleMenu() {
    this.menuCtrl.toggle();
  }
  ngOnInit() {
    this.menu = this.menuserv.getMenuOpcion();
  }
  
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
