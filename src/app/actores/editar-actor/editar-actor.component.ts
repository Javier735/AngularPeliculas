import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  modelo:actorDTO={nombre:'Maria Magdalena', fechaNacimiento: new Date(),foto:'https://m.media-amazon.com/images/M/MV5BNDA5YjE4OGMtZDk1My00ZjU0LTlhOTYtMTE1NGU3NzAxNjYyXkEyXkFqcGdeQXVyNjgzMjQ0MTA@._V1_UY268_CR147,0,182,268_AL_.jpg'};
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      //alert(params.id);
    });
  }

  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
  }

}
