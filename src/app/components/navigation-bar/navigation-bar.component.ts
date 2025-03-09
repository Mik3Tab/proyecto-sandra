import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const hamburger = document.querySelector('.hamburger');
    hamburger?.classList.toggle('active');
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      const hamburger = document.querySelector('.hamburger');
      hamburger?.classList.remove('active');
    }
  }
}