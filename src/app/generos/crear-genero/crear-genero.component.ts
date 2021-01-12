import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';
//import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router:Router) { }
  form: FormGroup;

  ngOnInit(): void {
   
  }

  guardarCambios(genero:generoCreacionDTO){
    //..logica aqui
    //alert("hola mundo");
    console.log(genero);
    this.router.navigate(['/generos']);
  }

  

}
