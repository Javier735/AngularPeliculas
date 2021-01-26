import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-noticia',
  templateUrl: './nueva-noticia.component.html',
  styleUrls: ['./nueva-noticia.component.css']
})
export class NuevaNoticiaComponent implements OnInit {

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

    CatAutoridadRecDenun=[
      {id:1,nombre:'Autoridad 1'},
      {id:2,nombre:'Autoridad 2'},
      {id:3,nombre:'Autoridad 3'}
    ]; 

    CatTipoAtencion=[
      {id:1,nombre:'Atencion 1'},
      {id:2,nombre:'Atencion 2'},
      {id:3,nombre:'Atencion 3'}
    ]; 

    CatSentidoConclusion=[
      {id:1,nombre:'Sentido 1'},
      {id:2,nombre:'Sentido 2'},
      {id:3,nombre:'Sentido 3'}
    ]; 

  ngOnInit(): void {

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

      AbrirCarpeta:[false],
    
      NombreAgentesMPResponsable:[''],
      IdentificadorAgentesMPResponsable:[''],
      CatMedioConocimientoId:[''],
      FechaPresentacionDenunciaQuerella:[''],
      HoraPresentacionDenunciaQuerella:[''],
      CatAutoridadRecibioDenunciaQuerellaID:[''],

      CatTipoAtencionID:[''],
      NumeroAtencion:[''],
      FechaInicioAtencion:[''],
      FechaConclusionAtencion:[''],
      CatSentidoConclusionAtencionID:['']

    });    

  }

  
 guardar(){
  console.log(this.form);
}


}
