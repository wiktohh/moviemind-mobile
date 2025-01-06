import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { Genre, Movie } from 'src/app/shared/models/movies/movie.model';
import { NavigationEnd, Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.page.html',
  styleUrls: ['./watch-list.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WatchListPage {

  movies: Movie[] = [];
  Genre = Genre;
  loading: boolean = false;
  private routerSubscription!: Subscription;

  constructor(private movieService: MoviesServiceService, private router: Router, private toastService: ToastService) { }


  //TODO: OPCJONALNIE DO REFAKTORINGU XD


  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        if (this.router.url === '/tabs/watch-list') {
          this.loadWatchList();
        }
      });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    console.log("XD")
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  loadWatchList() {
    this.loading = true;
    console.log('Ładowanie listy do obejrzenia...');
    this.movieService.getWatchLater().subscribe({
      next: (movies) => {
        console.log('Pobrane filmy:', movies);
        this.movies = movies;
        this.loading = false;
      },
      error: (error) => {
        console.error('Błąd:', error);
        this.toastService.failed('Błąd podczas pobierania filmów do obejrzenia');
        this.loading = false;
      }
    });
  }

  goToDetails(movieId: string) {
    this.router.navigate(['/movies', movieId]); 
  }

}
