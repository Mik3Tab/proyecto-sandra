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
      question: "How long does each therapy session last?",
      answer: "Each session typically lasts 50 minutes, allowing time for in-depth discussion while maintaining focus and effectiveness."
    },
    {
      question: "What types of therapy do you offer?",
      answer: "I offer individual therapy, couples counseling, and family therapy. My approach is tailored to each client's specific needs and goals."
    },
    {
      question: "Is everything I say confidential?",
      answer: "Yes, all sessions are strictly confidential. The only exceptions are those required by law, such as risk of harm to self or others."
    },
    {
      question: "How often should I attend therapy?",
      answer: "Initially, weekly sessions are recommended. As progress is made, we can adjust the frequency based on your needs and goals."
    },
    {
      question: "Do you accept insurance?",
      answer: "Please contact me directly to discuss insurance options and payment methods available."
    }
  ];
}