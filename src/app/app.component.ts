import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { InputsComponent } from './inputs/inputs.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonesComponent, InputsComponent, VisualizadorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = '';
  password: string = '';
  texto: string = '';
  estado: string = ''; // Variable para almacenar el estado (Aceptar o Cancelar)
  isCircle: boolean = false; // Indica si el cuadrado es un círculo
  customColor: string = ''; // Almacena el color aleatorio

  // Métodos para actualizar los valores desde los inputs
  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }

  updatePassword(newPassword: string): void {
    this.password = newPassword;
  }

  updateTexto(newTexto: string): void {
    this.texto = newTexto;
  }

  // Método para manejar la acción de los botones
  onAccion(accion: string): void {
    switch (accion) {
      case 'Aceptar':
      case 'Cancelar':
        this.estado = accion;
        break;
      case 'Primario':
        this.isCircle = !this.isCircle; // Alterna entre círculo y cuadrado
        break;
      case 'Secundario':
        this.customColor = this.generateRandomColor(); // Cambia el color aleatoriamente
        break;
      case 'ModoOscuro':
        const body = document.body;
        body.classList.toggle('dark-mode'); // Aplica o elimina la clase dark-mode
        break;
    }
  }
  
  

  // Genera un color aleatorio en formato hexadecimal
  private generateRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
