import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() texto: string = '';

  @Output() emailChange = new EventEmitter<string>();
  @Output() passwordChange = new EventEmitter<string>();
  @Output() textoChange = new EventEmitter<string>();

  // Métodos para emitir los cambios al padre
  onEmailChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.emailChange.emit(input.value);
  }

  onPasswordChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.passwordChange.emit(input.value);
  }

  onTextoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.textoChange.emit(input.value);
  }
  }

