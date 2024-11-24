import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ejercicio-02',
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio-02.component.html',
  styleUrl: './ejercicio-02.component.css'
})
export class Ejercicio02Component {

  texto_01: string = "";
  texto_02: string = "";
  resultado: string = "";

   

  //Crear funcion que me compara cadenas y verifica que letras coinciden
  comparar(texto_01: string, texto_02: string) {
 
    this.resultado = '';

    for ( const caracter of texto_01){
      if(texto_02.includes(caracter) && !this.resultado.includes(caracter)){
        this.resultado += caracter;
      }
    }

   

  }
  


}
