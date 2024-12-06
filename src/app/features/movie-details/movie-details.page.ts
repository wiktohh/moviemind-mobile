import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { addIcons } from 'ionicons';
import { calendar, earth, film, star, time, videocam } from 'ionicons/icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieDetailsPage implements OnInit {
  movieId: string = '';
  movie: Movie | null = null;

  constructor(private route: ActivatedRoute, private movieService: MoviesServiceService) { 
    addIcons({ star, videocam, earth, film, time, calendar });
  }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.movieId)
    const movie = this.movieService.getMovieById(this.movieId);
    this.movie = movie !== undefined ? movie : null;
    console.log(this.movie)
  }

}
