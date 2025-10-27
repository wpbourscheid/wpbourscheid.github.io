import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  constructor(private router: Router) {}

  // Define a ordem das páginas do site
  pages = ['home', 'resumo', 'projetos', 'habilidades', 'tecnologias'];

  toggleMenu() {
    // Se quiser, depois implementamos o menu mobile aqui
  }

  // Detecta pressionamento de teclas (setas)
  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.navigatePrevious();
    } else if (event.key === 'ArrowRight') {
      this.navigateNext();
    }
  }

  // Página anterior
  navigatePrevious() {
    const current = this.router.url.replace('/', '');
    const index = this.pages.indexOf(current);
    const prev = index > 0 ? this.pages[index - 1] : this.pages[this.pages.length - 1];
    this.router.navigate(['/' + prev]);
  }

  // Próxima página
  navigateNext() {
    const current = this.router.url.replace('/', '');
    const index = this.pages.indexOf(current);
    const next = index < this.pages.length - 1 ? this.pages[index + 1] : this.pages[0];
    this.router.navigate(['/' + next]);
  }
}