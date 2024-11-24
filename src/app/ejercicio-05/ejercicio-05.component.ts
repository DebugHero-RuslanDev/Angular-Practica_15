import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio-05',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ejercicio-05.component.html',
  styleUrl: './ejercicio-05.component.css'
})
export class Ejercicio05Component implements OnInit {

  contactForm!: FormGroup;
  paises: string[] = ['Argentina', 'Brasil', 'Chile', 'Uruguay', 'Paraguay'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
     this.contactForm = this.fb.group({
      carnetCond: ['no'],
      dni: [''],
      fecha: ['']
    });
  
  }

}
