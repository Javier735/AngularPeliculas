import { AbstractControl, ValidatorFn } from "@angular/forms";
//import { AbstractConstructor } from "@angular/material/core/common-behaviors/constructor";

export function primeraLetraMayuscula(): ValidatorFn{
    return(control:AbstractControl)=>{
      const valor= <string>control.value;
      if(!valor) return;
      if(valor.length===0) return;
      
      const primeraLetra= valor[0];
      if(primeraLetra !== primeraLetra.toUpperCase()){
          return{
            primeraLetraMayuscula :{
                mensaje:'La primera letra debe ser mayuscula'
            }
          };
      }
      return;
     
    }
}