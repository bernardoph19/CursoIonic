import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { menuOpcion } from '../interfaces/opcionesMenu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuOpcionService {

  constructor(private http:HttpClient) { }
  
  getMenuOpcion(){
    return this.http.get<menuOpcion[]>('assets/data/menu.json');
  }
}

