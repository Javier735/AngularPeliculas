import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carpeta-inv',
  templateUrl: './carpeta-inv.component.html',
  styleUrls: ['./carpeta-inv.component.css']
})
export class CarpetaInvComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder) { }

  /*Catalogos*/
  catTipoFiscalia=[
    {id:1,nombre:'Fiscalia 1'},
    {id:2,nombre:'Fiscalia 2'},
    {id:3,nombre:'Fiscalia 3'}
  ]; 

  catTipoAgencia=[
    {id:1,nombre:'Agencia 1'},
    {id:2,nombre:'Agencia 2'},
    {id:3,nombre:'Agencia 3'}
  ]; 

  catTipoVialidad=[
    {id:1,nombre:'Vialidad 1'},
    {id:2,nombre:'Vialidad 2'},
    {id:3,nombre:'Vialidad 3'}
  ]; 

  catColonia=[
    {id:1,nombre:'Colonia 1'},
    {id:2,nombre:'Colonia 2'},
    {id:3,nombre:'Colonia 3'}
  ]; 

  catMunicipio=[
    {id:1,nombre:'Municipio 1'},
    {id:2,nombre:'Municipio 2'},
    {id:3,nombre:'Municipio 3'}
  ]; 

  catEntidadFederativa=[
    {id:1,nombre:'Entidad Federativa 1'},
    {id:2,nombre:'Entidad Federativa 2'},
    {id:3,nombre:'Entidad Federativa 3'}
  ]; 

  catMedioConocimiento=[
    {id:1,nombre:'Medio 1'},
    {id:2,nombre:'Medio 2'},
    {id:3,nombre:'Medio 3'}
  ]; 

  catFormaIncioCarpeta=[
    {id:1,nombre:'Forma 1'},
    {id:2,nombre:'Forma 2'},
    {id:3,nombre:'Forma 3'}
  ];  



  /*---- */

  ngOnInit(): void {
//inicializa el formulario
this.form=this.fb.group({
  NombreFiscaliaRegionalEspecializada:['', Validators.required],
  catTipoFiscaliaID:[''],
  NombreNumAgencia:[''],
  CatTipoAgenciaID:[''],

  catTipoVialidadId:[''],
  Calle:[''],
  CatColoniaId:[''],
  NumeroExterior:[''],
  NumeroInterior:[''],
  CodigoPostal:[''],
  Localidad:[''],
  CatMunicipioId:[''],
  CatEntidadFederativaId:[''],
  Latitud:[''],
  Longitud:[''],

  NombreAgentesMPResponsable:[''],
  IdentificadorAgentesMPResponsable:[''],
  CatMedioConocimientoId:[''],

  NumeroCarpetaInvs:[''],
  NumeroCarpetaFormatoNumerico:[''],
  AnioCarpeta:[''],
  FechaCarpInv:[''],
  HoraPublic:[''],
  catFormaIncioCarpetaId:[''],
  CantidadDelitos:[''],
  CantidadImputados:[''],
  CantidadVictimas:[''],
  DescripcionHechos:['']
   });

  }

 guardar(){
    alert('guardar carpeta');
 }

}
