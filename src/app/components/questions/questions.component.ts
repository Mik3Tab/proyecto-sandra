import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  faqs = [
    {
      question: "¿Cuánto dura cada sesión de terapia?",
      answer: "Cada sesión tiene una duración aproximada de 55 minutos. Esta es la duración más común y recomendada en terapia individual."
    },
    {
      question: "¿Qué tipo de terapia ofreces?",
      answer: "Ofrezco terapia individual online tanto en adolescentes como adultos. Empleando un enfoque integrador que reúne técnicas de diferentes escuelas para ofrecer un tratamiento personalizado que se adapte a las necesidades de los pacientes."
    },
    {
      question: "¿Con qué frecuencia debo asistir a terapia?",
      answer: " Inicialmente, se recomiendan sesiones semanales. A medida que se avanza, podemos ajustar la frecuencia según las necesidades y objetivos de cada persona."
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: "Para asegurar tu plaza y facilitar la organización de la agenda, el pago de la sesión se realiza con 24 horas de antelación por Bizum o transferencia."
    },
    {
      question: "¿Qué debo tener en cuenta para realizar una sesión de terapia online?",
      answer: "Para tu sesión de terapia online, asegúrate de tener buena conexión a internet, un espacio privado y tranquilo, y el dispositivo cargado y listo. Se enviará un enlace de la sesión online al correo electrónico previamente."
    }
  ];
}