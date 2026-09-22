import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [],
  templateUrl: './hola-mundo.html'
})
export class HolaMundo {
  mostrarMensaje = false;

  mostrar(): void {
    this.mostrarMensaje = true;
  }
}