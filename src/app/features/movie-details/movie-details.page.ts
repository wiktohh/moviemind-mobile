import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTextarea, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { Genre, Movie, Review } from 'src/app/shared/models/movies/movie.model';
import { addIcons } from 'ionicons';
import { add, addOutline, calendar, earth, film, star, starOutline, videocam, heart, time, bookmark, trash } from 'ionicons/icons';
import { ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { finalize, forkJoin, Observable, Subscription } from 'rxjs';
import {environment} from '../../../environments/environment';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ReviewActor, ReviewMovie } from 'src/app/shared/models/movies/review.model';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { ActorsService } from 'src/app/shared/services/actors/actors.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonTextarea, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule],
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
  Genre = Genre;
  loading = false;
  tempMovieImage = environment.tempImage;
  private authSubscription: Subscription = new Subscription();
  user: any = null;
  commentMovieReview: string = '';

  constructor(private toastService: ToastService, private actorService: ActorsService, private route: ActivatedRoute, private movieService: MoviesServiceService, private router: Router, private authService: AuthService) { 
    addIcons({videocam,earth,film,time,calendar,star,heart,bookmark,add,starOutline,addOutline,trash});
  }

  ngOnInit() {
    this.loading = true;
    this.movieId = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.movieId);

    this.authSubscription.add(
      this.authService.user$.subscribe((user) => {
        console.log(user)
        this.user = user;
      })
    );

    const requests: { movie: Observable<Movie>, favorites?: Observable<Movie[]>, watchlist?: Observable<Movie[]> } = {
      movie: this.movieService.getMovieById(this.movieId),
    }

    if(this.user){
      requests['favorites'] = this.movieService.getFavorites();
      requests['watchlist'] = this.movieService.getWatchLater();
    }

    forkJoin(requests)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: ({ movie, favorites, watchlist }) => {
          this.movie = movie;
          if(this.user){
            this.isFavorite = favorites?.some(favorite => favorite.id === this.movieId) || false;
            this.isWatchlist = watchlist?.some(watchlist => watchlist.id === this.movieId) || false;
          }
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
  }

  getMovieCountries(): string {
    return this.movie?.countries?.map(country => country.countryName).join(', ') || '';
  }

  getMovieDuration(): string {
    const hours = Math.floor(this.movie!.duration / 60);
    const minutes = this.movie!.duration % 60;
    if(hours === 0) {
      return `${minutes}min`;
    } else if(hours > 0 && minutes === 0) {
      return `${hours}h`;
    } else {
      return `${hours}h ${minutes}min`;
    }

  }

  addToFavorites(): void {
    console.log(this.movieId)
    this.movieService.addToFavorites(this.movieId).subscribe({
      next: (movie: Movie) => {
        this.isFavorite = !this.isFavorite;
        console.log(`Dodano film ${movie.title} do ulubionych.`);
        this.toastService.success('Film został dodany do ulubionych.');
      },
      error: (error) => {
        console.error(error);
        this.toastService.success('Nie udało się dodać filmu do ulubionych.');
      }
    })
  }

  removeFromFavorites(): void {
    this.movieService.removeFromFavorites(this.movieId).subscribe({
      next: (movie: Movie) => {
        this.isFavorite = !this.isFavorite;
        console.log(`Usunięto film ${movie.title} z ulubionych.`);
        this.toastService.success('Film został usunięty z ulubionych.');
      },
      error: (error) => {
        console.error(error);
        this.toastService.success('Nie udało się usunąć filmu z ulubionych.');
      }
    })
  }

  addToWatchlist(): void {
    this.movieService.addToWatchLater(this.movieId).subscribe({
      next: (movie: Movie) => {
        this.isWatchlist = !this.isWatchlist;
        console.log(`Dodano film ${movie.title} do listy do obejrzenia później.`);
        this.toastService.success('Film został dodany do listy do obejrzenia później.');
      },
      error: (error) => {
        console.error(error);
        this.toastService.success('Nie udało się dodać filmu do listy do obejrzenia później.');
      }})
  }

  removeFromWatchlist(): void {
    console.log(this.movieId)
    this.movieService.removeFromWatchLater(this.movieId).subscribe({
      next: (movie: Movie) => {
        this.isWatchlist = !this.isWatchlist;
        console.log(`Usunięto film ${movie.title} z listy do obejrzenia później.`);
        this.toastService.success('Film został usunięty z listy do obejrzenia później.');
      },
      error: (error) => {
        console.error(error);
        this.toastService.success('Nie udało się usunąć filmu z listy do obejrzenia później.');
      }
    })
  }

  rateMovie(value: number): void {
    this.ratingMovie = value
    console.log(`Film został oceniony na: ${value}/5`);
  }

  openActorModal(actor: any): void {
    console.log(actor)
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

  getMovie() {
    this.movieService.getMovieById(this.movieId).subscribe({
      next: (movie) => {
        this.movie = movie;
      },
      error: (error) => {
        console.error(error);
  }})
  }

  submitActorReview(): void {
    const dto: ReviewActor = {
      rating: this.ratingActor,
      roleId: this.selectedActor,
    }
    this.actorService.addActorReview(dto).pipe(finalize(() => this.closeActorModal())).subscribe({
      next: () => {
        console.log('Dodano recenzję.');
        this.toastService.success('Recenzja została dodana.');
      },
      error: (error) => {
        console.error(error)
        this.toastService.failed('Nie udało się dodać recenzji.');
    }});
  }

  redirectToActor(actorId: string): void {
    this.router.navigate(['/actors', actorId]);
  }

  deleteReview(reviewId: string): void {
    this.movieService.deleteReview(reviewId).subscribe({
      next: () => {
        console.log('Usunięto recenzję.');
        this.toastService.success('Recenzja została usunięta.');
        this.getMovie();
      },
      error: (error) => {
        console.error(error);
        this.toastService.failed('Nie udało się usunąć recenzji.');
      }
    })
  }

  submitReview(): void {
    const dto: ReviewMovie = {
      rating: this.ratingMovie,
      comment: this.commentMovieReview,
      movieId: this.movieId,
    }
    console.log(dto)
    this.movieService.addReview(dto).subscribe({
      next: () => {
        console.log('Dodano recenzję.');
        this.toastService.success('Recenzja została dodana.');
        this.getMovie()
      },
      error: (error) => {
        console.error(error)
        this.toastService.failed('Nie udało się dodać recenzji.');
    }})
  }

}
