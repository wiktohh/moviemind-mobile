import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { addIcons } from 'ionicons';
import { add, addOutline, calendar, earth, film, star, starOutline, videocam, heart, time, bookmark } from 'ionicons/icons';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieDetailsPage implements OnInit {
  movieId: string = '';
  movie: Movie | null = null;
  ratingMovie = 0;
  ratingActor = 0;
  stars = [1, 2, 3, 4, 5];
  isModalActorOpen = false;
  selectedActor: any = null;
  isFavorite = false;
  isWatchlist = false;

  constructor(private route: ActivatedRoute, private movieService: MoviesServiceService, private router: Router) { 
    addIcons({videocam,earth,film,time,calendar,star,heart,bookmark,add,starOutline,addOutline,});
  }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.movieId)
    const movie = this.movieService.getMovieById(this.movieId);
    this.movie = movie !== undefined ? movie : null;
    console.log(this.movie)
  }

  addToFavorites(): void {
    this.isFavorite = !this.isFavorite;
    console.log(`Dodano film ${this.movie?.title} do ulubionych.`);
  }

  addToWatchlist(): void {
    this.isWatchlist = !this.isWatchlist;
    console.log(`Dodano film ${this.movie?.title} do listy do obejrzenia.`);
  }

  rateMovie(value: number): void {
    this.ratingMovie = value
    console.log(`Film został oceniony na: ${value}/5`);
  }

  openActorModal(actor: any): void {
    this.selectedActor = actor;
    this.isModalActorOpen = true;
  }
  
  closeActorModal(): void {
    this.isModalActorOpen = false
    this.selectedActor = null;
  }

  rateActor(value: number): void {
    this.ratingActor = value;
    console.log(`Oceniono aktora ${this.selectedActor.firstName} ${this.selectedActor.lastName} na ${value}/5.`);
  }

  submitActorReview(): void {
    console.log(`Dodano recenzję dla aktora: ${this.selectedActor.firstName} ${this.selectedActor.lastName}, Ocena: ${this.ratingActor}/5`);
    this.closeActorModal();
  }

  redirectToActor(actorId: string): void {
    this.router.navigate(['/actors', actorId]);
  }

  submitReview(): void {
    console.log("XD")
  }

}
