import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-main',
  imports: [NavigationBarComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {}