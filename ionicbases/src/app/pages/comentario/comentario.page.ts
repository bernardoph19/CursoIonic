import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../../services/comentarios.service';
import { comentarios } from '../../interfaces/comentarios.interface';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {

  comentarios : comentarios[];
  constructor(private comentarioService:ComentariosService) { }

  ngOnInit() {
    this.comentarioService.getComentario().
    subscribe((resultadocomentario:comentarios[]) =>{
      this.comentarios =resultadocomentario;
    })
  }

}
