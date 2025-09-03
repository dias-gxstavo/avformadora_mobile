import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cartao',
    pathMatch: 'full',
  },
  {
    path: 'cartao',
    loadComponent: () => import('./cartao/cartao.page').then( m => m.CartaoPage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre/sobre.page').then( m => m.SobrePage)
  },
];
