import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  enviado = false;
  error = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit() {
    emailjs.init(environment.emailjs.publicKey);
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      try {
        const templateParams = {
          from_name: this.contactForm.value.nombre,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.mensaje,
          to_name: 'Sandra Dual',
        };

        await emailjs.send(
          environment.emailjs.serviceId,
          environment.emailjs.templateId,
          templateParams
        );
        
        this.enviado = true;
        this.contactForm.reset();
        this.contactForm.markAsPristine();
      } catch (error) {
        this.error = true;
        console.error('Error al enviar el email:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}