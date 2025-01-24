import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-up',
    loadChildren: () => import('./routes/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./routes/home/home.module').then((m) => m.HomeModule),
  },
];

