import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBackButton, IonButtons, IonButton, IonIcon, IonAvatar, IonImg, IonText, IonSegment, IonSegmentButton, SegmentChangeEventDetail, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader } from '@ionic/angular/standalone';
import { IonSegmentCustomEvent } from '@ionic/core';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCol, IonRow, IonGrid, IonSegmentButton, IonSegment, IonText, IonImg, IonAvatar, IonIcon, IonButton, IonButtons, IonBackButton, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class MoviesPage implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService: MoviesServiceService) {
    addIcons({ star });
  }

  ngOnInit() {
   this.movies = this.moviesService.getMovies()
   console.log(this.movies)
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
