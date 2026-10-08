import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Edifica Ingeniería Estructural'
  },
  {
    path: '**',
    redirectTo: ''
  }
];