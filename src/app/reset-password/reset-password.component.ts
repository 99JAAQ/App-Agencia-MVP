import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  onSubmit() {
    // Lógica para restablecer la contraseña
    console.log('Email para restablecer contraseña:', this.email);
  }
}
