import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-ejercicio-04',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ejercicio-04.component.html',
  styleUrl: './ejercicio-04.component.css'
})
export class Ejercicio04Component implements OnInit {
  
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      carnetCond: ['no'],
      dni: [''],
      fecha: ['']
    });
  }

}
