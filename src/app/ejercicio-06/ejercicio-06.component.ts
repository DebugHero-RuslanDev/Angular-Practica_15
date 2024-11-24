import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio-06',
  imports: [CommonModule],
  templateUrl: './ejercicio-06.component.html',
  styleUrl: './ejercicio-06.component.css'
})
export class Ejercicio06Component {

  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Cadena para el display
  display: string = '';

  // Método para manejar el clic en los botones
  onButtonClick(numero: number): void {
    this.display += numero.toString();
  }

}
