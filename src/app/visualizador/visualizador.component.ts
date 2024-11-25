import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [NgClass],
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() texto: string = '';
  @Input() estado: string = ''; // Nueva propiedad
  @Input() isCircle: boolean = false; // Controla si el cuadrado es un círculo
  @Input() customColor: string = ''; // Color personalizado para el fondo
}
