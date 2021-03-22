import { Component, OnInit } from '@angular/core';
import { MenuOpcionService } from '../../services/menu-opcion.service';
import { menuOpcion } from '../../interfaces/opcionesMenu.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuopci: Observable <menuOpcion[]>;
  
  constructor(private smenuservice:MenuOpcionService) { }

  ngOnInit() {
    this.menuopci = this.smenuservice.getMenuOpcion();
  }
 

}
