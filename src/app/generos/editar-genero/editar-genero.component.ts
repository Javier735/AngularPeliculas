import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router:Router) { }

modelo:generoCreacionDTO={nombre: 'Maria'};
  ngOnInit(): void {
   
  }  
  guardarCambios(genero:generoCreacionDTO){
    //..logica aqui
  
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
