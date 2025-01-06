import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Genre, Movie } from 'src/app/shared/models/movies/movie.model';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FavoritesPage implements OnInit {

  movies: Movie[] = [];
  Genre = Genre;

  constructor(private movieService: MoviesServiceService, private router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.movieService.getFavorites().subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (error) => {
        console.error(error);
        this.toastService.failed("Błąd podczas pobierania ulubionych filmów");
      }
    })
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  goToDetails(movieId: string) {
    this.router.navigate(['/movies', movieId]); 
  }

}
