import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'movies',
        loadComponent: () =>
          import('../movies/movies.page').then((m) => m.MoviesPage),
      },
      {
        path: 'actors',
        loadComponent: () =>
          import('../actors/actors.page').then((m) => m.ActorsPage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../search/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'favourites',
        loadComponent: () =>
          import('../favourites/favourites.page').then((m) => m.FavouritesPage),
      },
      {
        path: 'watch-list',
        loadComponent: () =>
          import('../watch-list/watch-list.page').then((m) => m.WatchListPage),
      },
      {
        path: 'friends',
        loadComponent: () => import('../friends/friends.page').then( m => m.FriendsPage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
