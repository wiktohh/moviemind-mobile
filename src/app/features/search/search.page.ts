import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre, Movie } from 'src/app/shared/models/movies/movie.model';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { IonHeader, IonToolbar, IonTitle, IonItem, IonContent, IonSearchbar, IonList, IonLabel, IonText } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { debounce, debounceTime, finalize, Subject, takeUntil } from 'rxjs';

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
export class SearchPage implements OnInit, OnDestroy  {
  loading: boolean = false;
  searchTerm: string = '';
  movies: Movie[] = []
  Genre = Genre;
  filteredMovies: Movie[] = []

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private router: Router, private moviesService: MoviesServiceService) {}

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.onSearch();
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch() {
    if(this.searchTerm.length === 0) {
      this.filteredMovies = [];
      return;
    }
   this.loading = true;
   this.moviesService.getMovieByTitle(this.searchTerm).pipe(finalize(() => this.loading = false)).subscribe({
      next: (movies: Movie[]) => {
        this.filteredMovies = movies;
      },
      error: (error) => {
        console.log('Error:', error);
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
