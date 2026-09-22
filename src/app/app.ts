import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolaMundo } from './hola-mundo/hola-mundo';  // <-- esta línea falta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HolaMundo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('KBRASO');
}
