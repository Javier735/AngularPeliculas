import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  control:FormControl=new FormControl();
  actores=[
    {nombre:'Michelle Monaghan',personaje:'', foto:'https://m.media-amazon.com/images/M/MV5BNzEwYTdjNjYtZDk4NC00YzFmLTlkZTQtNTQyZTg3YmIxYWIxL2ltYWdlXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_UY209_CR13,0,140,209_AL_.jpg'},
    {nombre:'Mia Khalifa',personaje:'', foto:'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY317_CR51,0,214,317_AL_.jpg'},
    {nombre:'Yan-Kay Crystal Lowe',personaje:'', foto:'https://m.media-amazon.com/images/M/MV5BNjlkZTIzMjItMjU0ZS00MDczLWFjNTMtOWVjN2YyY2Q1YzAyXkEyXkFqcGdeQXVyMzY4MzA1MDI@._V1_UX140_CR0,0,140,209_AL_.jpg'}
  ];

  actoresOriginal=this.actores;
  actoresSeleccionados=[];

  columnasAMostrar=['imagen','nombre','personaje','acciones'];

  @ViewChild(MatTable) table:MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor=>{
      this.actores=this.actoresOriginal;
      this.actores=this.actores.filter(actor=>actor.nombre.indexOf(valor)!==-1);
    });
  }


  optionSelected(event:MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table !==undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor:any){
    const indice=this.actoresSeleccionados.findIndex(a=> a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice,1);
    this.table.renderRows();
  }

}
