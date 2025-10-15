import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { ResumoComponent } from './pages/resumo/resumo';
import { ProjetosComponent } from './pages/projetos/projetos';
import { HabilidadesComponent } from './pages/habilidades/habilidades';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resumo', component: ResumoComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
];
