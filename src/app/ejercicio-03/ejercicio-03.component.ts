import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-03',
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio-03.component.html',
  styleUrl: './ejercicio-03.component.css'
})
export class Ejercicio03Component {

  r: number = 0;
  v: number = 0;
  a: number = 0;
  backgroundColor: string = '';

  constructor() {
    //Asignamos los valores de los colores
    this.r = this.generaAleatIntensidad(0, 255);
    this.v = this.generaAleatIntensidad(0, 255);
    this.a = this.generaAleatIntensidad(0, 255);
  
  }

  generaAleatIntensidad(min: number, max: number) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  cambiaFondo()  {
    this.backgroundColor = `rgb(${this.r}, ${this.v}, ${this.a})`;
    
  }

  pulsaBoton(color: string) {
    let valorAleatorio = this.generaAleatIntensidad(0, 255); 
    switch(color) {
      case 'rojo': this.r = valorAleatorio; break;
      case 'verde': this.v = valorAleatorio; break;
      case 'azul': this.a = valorAleatorio; break; 
    }
    this.cambiaFondo();

  }

}
