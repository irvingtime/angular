import { Routes } from '@angular/router';

import { authGuard, publicGuard } from './core/guards';
import HomeComponent from './pages/home/home.components';
import SignUpComponent from './pages/auth/sign-up/sign-up.component';
import logInComponent from './pages/auth/log-in/log-in.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component:HomeComponent,
    //loadComponent: () => import('./pages/home/home.components'),
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      {
        path: 'sign-up',
        component:SignUpComponent,
        //loadComponent: () => import('./pages/auth/sign-up/sign-up.component'),
      },
      {
        path: 'log-in',
        component:logInComponent,
        //loadComponent: () => import('./pages/auth/log-in/log-in.component'),
      },
    ],
  },
];