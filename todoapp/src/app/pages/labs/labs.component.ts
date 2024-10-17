import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'hola';
  tareas = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]
}