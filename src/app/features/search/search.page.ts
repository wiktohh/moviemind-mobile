import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre, Movie } from 'src/app/shared/models/movies/movie.model';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { IonHeader, IonToolbar, IonTitle, IonItem, IonContent, IonSearchbar, IonList, IonLabel, IonText } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonText, IonLabel, IonList, IonSearchbar,
            IonContent, IonItem, IonTitle, IonHeader, 
            IonToolbar, CommonModule, FormsModule, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchPage implements OnInit {
  loading: boolean = false;
  searchTerm: string = '';
  movies: Movie[] = []
  Genre = Genre;
  filteredMovies: Movie[] = []

  constructor(private router: Router, private moviesService: MoviesServiceService) {}

  ngOnInit() {
    this.loading = true;
    this.moviesService.getMovies().pipe(finalize(() => this.loading = false)).subscribe({
      next: (movies: Movie[]) => {
        this.movies = movies;
        this.filteredMovies = [...this.movies];
      },
      error: (error) => {
        console.log('Error:', error);
      }
    })
    this.filteredMovies = [...this.movies];
  }

  onSearch() {
    this.filteredMovies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToDetails(movieId: string) {
    this.router.navigate(['/movies', movieId]); // Przejście do szczegółów filmu
  }
}
