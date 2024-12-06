import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBackButton, IonButtons, IonButton, IonIcon, IonAvatar, IonImg, IonText, IonSegment, IonSegmentButton, SegmentChangeEventDetail, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader } from '@ionic/angular/standalone';
import { IonSegmentCustomEvent } from '@ionic/core';
import { TranslateModule } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [TranslateModule, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCol, IonRow, IonGrid, IonSegmentButton, IonSegment, IonText, IonImg, IonAvatar, IonIcon, IonButton, IonButtons, IonBackButton, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class MoviesPage implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService: MoviesServiceService, private router: Router) {
    addIcons({ star });
  }

  ngOnInit() {
   this.movies = this.moviesService.getMovies()
   console.log(this.movies)
  }

  goToMovieDetails(movieId: string) {
    this.router.navigate(['/movies', movieId]);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    const option = event.detail.value;
    if(option === "best"){
      this.movies = this.movies.sort((a, b) => b.rating - a.rating);
    } else {
      this.movies = this.movies.sort((a, b) => a.rating - b.rating);
    }
  }
}
