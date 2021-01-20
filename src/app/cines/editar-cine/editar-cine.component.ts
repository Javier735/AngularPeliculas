import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO } from '../cine';
import { cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }
modelo:cineDTO={nombre:"Mi cine favorito",latitud:20.60065072303873,longitud:-101.16210937500001};

  ngOnInit(): void {
  }

  guardarCambios(cine:cineCreacionDTO){
    console.log(cine);
  }

}
