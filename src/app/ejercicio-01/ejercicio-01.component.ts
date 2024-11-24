import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ejercicio02Component } from "../ejercicio-02/ejercicio-02.component";

@Component({
  selector: 'app-ejercicio-01',
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-01.component.html',
  styleUrl: './ejercicio-01.component.css'
})

export class Ejercicio01Component {
texto = "";
size: number = 0;
cantidad = "";

generar( ){
this.cantidad = this.texto + " -> " + this.texto.length;
}
}
