import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  // toggles the open class on the nav-links UL
  toggleMenu() {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;
    nav.classList.toggle('open');
    const btn = document.querySelector('.menu-toggle') as HTMLButtonElement | null;
    if (btn) btn.setAttribute('aria-expanded', nav.classList.contains('open').toString());
  }
}