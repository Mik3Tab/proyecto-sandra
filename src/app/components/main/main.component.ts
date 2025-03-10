import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavigationBarComponent, MatIconModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  openDoctoralia(): void {
    window.open('https://www.doctoralia.es/sandra-dual/psicologo-psicologo-infantil/valencia', '_blank');
  }
}