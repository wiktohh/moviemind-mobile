import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { Genre, Movie } from 'src/app/shared/models/movies/movie.model';
import { Router } from '@angular/router';

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

  constructor(private movieService: MoviesServiceService, private router: Router) { }

  ionViewWillEnter() {
    console.log("e uruchomisz sie?")
    this.movieService.getWatchLater().subscribe({
      next: (movies) => {
        console.log(movies);
        this.movies = movies;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  goToDetails(movieId: string) {
    this.router.navigate(['/movies', movieId]); 
  }

}
