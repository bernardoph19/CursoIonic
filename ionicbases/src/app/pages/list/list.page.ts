import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { users } from '../../interfaces/usuarios.interface';
import { AlbumsService } from '../../services/albums.service';
import { albums } from '../../interfaces/albums.inteface';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  data: users[];
  albums: albums[];
  @ViewChild('lista') lista: IonList;

  constructor(
    private daservice: DataService,
    private datealbumsservice: AlbumsService
  ) {}

  ngOnInit() {
    this.daservice.getUsers().subscribe((result: users[]) => {
      this.data = result;
    });

    // servicio de albums
    this.datealbumsservice.getAlbums().subscribe((resultado: albums[]) => {
      this.albums = resultado;
    });
  }

  nuevo(item) {
    console.log('nuevo', item);
    this.lista.closeSlidingItems();
  }
  
  delete(item) {
    console.log('delete', item);
    this.lista.closeSlidingItems();
  }

  compartir(item) {
    console.log('compartir', item);
    this.lista.closeSlidingItems();
  }
}
