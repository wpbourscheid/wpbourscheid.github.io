import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumoComponent } from './pages/resumo/resumo.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resumo', component: ResumoComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
];
