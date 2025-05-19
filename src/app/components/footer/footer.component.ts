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

  openLinkedin(): void {
    window.open('https://www.linkedin.com/in/sandra-dual-alaminos-909a541b9/');
  }
  
  openInstagram(): void {
    window.open('https://www.instagram.com/psicologia_sandradual/')
  }
}