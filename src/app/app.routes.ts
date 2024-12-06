import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./features/movie-details/movie-details.page').then( m => m.MovieDetailsPage)
  },
  {
    path: 'actors/:id',
    loadComponent: () => import('./features/actor-details/actor-details.page').then( m => m.ActorDetailsPage)
  },
];
