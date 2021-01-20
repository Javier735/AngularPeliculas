import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo:PeliculaDTO={
    titulo:'Mortal Kombat',
    resumen:'abcdefghijk',
    enCines:true,
    fechaLanzamiento:new Date(),
    trailer:'asdfghijklmn',
    poster:'https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }

  ngOnInit(): void {
  }

  guardarCambios(pelicula:PeliculaCreacionDTO){
  console.log(pelicula);
  }

}
