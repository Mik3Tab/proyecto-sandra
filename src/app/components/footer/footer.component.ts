import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email = ' sandradualalaminos@gmail.com ';

  openLinkedin(event?: Event): void {
    if (event) event.preventDefault();
    window.open('https://www.linkedin.com/in/sandra-dual-alaminos-909a541b9/', '_blank', 'noopener');
  }
  
  openInstagram(event?: Event): void {
    if (event) event.preventDefault();
    window.open('https://www.instagram.com/psicologia_sandradual/', '_blank', 'noopener');
  }
}