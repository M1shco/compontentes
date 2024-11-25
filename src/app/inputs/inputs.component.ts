import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [NgIf],
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() texto: string = '';

  @Output() emailChange = new EventEmitter<string>();
  @Output() passwordChange = new EventEmitter<string>();
  @Output() textoChange = new EventEmitter<string>();

  emailError: string | null = null;
  passwordError: string | null = null;

  // Validación de correo
  onEmailChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para correos
      if (!emailRegex.test(input)) {
        throw new Error('El correo no tiene un formato válido.');
      }
      this.emailError = null; // Limpia el error si la validación es exitosa
      this.emailChange.emit(input); // Emite el valor válido
    } catch (error: any) {
      this.emailError = error.message; // Muestra el mensaje de error
    }
  }

  // Validación de contraseña
  onPasswordChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    try {
      if (input.length < 8) {
        throw new Error('La contraseña debe tener al menos 8 caracteres.');
      }
      this.passwordError = null; // Limpia el error si la validación es exitosa
      this.passwordChange.emit(input); // Emite el valor válido
    } catch (error: any) {
      this.passwordError = error.message; // Muestra el mensaje de error
    }
  }

  // Sin validaciones para el texto
  onTextoChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.textoChange.emit(input);
  }
}
