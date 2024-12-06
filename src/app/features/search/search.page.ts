import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { IonHeader, IonToolbar, IonTitle, IonItem, IonContent, IonSearchbar, IonList, IonLabel, IonText } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonText, IonLabel, IonList, IonSearchbar, IonContent, IonItem, IonTitle, IonHeader, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchPage implements OnInit {
  searchTerm: string = ''; // Aktualny tekst w polu wyszukiwania
  movies: Movie[] = []

  filteredMovies: Movie[] = []

  constructor(private router: Router, private moviesService: MoviesServiceService) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
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
