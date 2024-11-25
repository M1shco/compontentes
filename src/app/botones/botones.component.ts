import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  @Output() accion = new EventEmitter<string>();

  emitirAccion(accion: string) {
    this.accion.emit(accion);
  }
}
