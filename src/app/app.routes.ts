import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routes/auth/auth.module').then((m) => m.AuthModule),
  },
];
