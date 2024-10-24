import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'hola';

  tasks = signal ([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);
  
  name = signal('Diego');
  age = '21';
  disabled = true;
  img="https://picsum.photos/200"

  person = {
    name: 'Diego',
    age: 21, 
    avatar: 'https://picsum.photos/200'
  }
  clickHandler() {
    alert('Hola');
  }
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }
}