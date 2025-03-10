import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuestionsComponent } from './components/questions/questions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainComponent,
    PricingComponent,
    QuestionsComponent,
    ReviewsComponent,
    FooterComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sandra Dual Alaminos - Psicóloga';
}
