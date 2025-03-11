import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  email = 'sandra.dual.alaminos@gmail.com';
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ\\s]{2,50}$'),
        Validators.maxLength(50)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
        Validators.maxLength(100)
      ]],
      message: ['', [
        Validators.required,
        Validators.maxLength(1000)
      ]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const sanitizedData = {
        name: this.sanitizeInput(this.contactForm.get('name')?.value),
        email: this.sanitizeInput(this.contactForm.get('email')?.value),
        message: this.sanitizeInput(this.contactForm.get('message')?.value)
      };

      this.http.post('http://localhost:3000/send-email', sanitizedData)
        .subscribe({
          next: () => {
            this.snackBar.open('Mensaje enviado correctamente', 'Cerrar', {
              duration: 3000
            });
            this.contactForm.reset();
          },
          error: () => {
            this.snackBar.open('Error al enviar el mensaje', 'Cerrar', {
              duration: 3000
            });
          }
        });
    }
  }

  private sanitizeInput(input: string): string {
    if (!input) return '';
    return input
      .trim()
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .replace(/data:/gi, '');
  }
}