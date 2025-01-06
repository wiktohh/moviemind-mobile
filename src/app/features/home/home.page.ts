import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Actor } from 'src/app/shared/models/actors/actor.model';
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { ActorsService } from 'src/app/shared/services/actors/actors.service';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import {register} from 'swiper/element/bundle';
import { SliderComponent } from "../../core/components/slider/slider.component";
import { addIcons } from 'ionicons';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';

register()

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, SliderComponent, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {

  movies: Movie[] = []
  actors: Actor[] = []
  loading: boolean = false
  tempImage = environment.tempImage

  constructor(
    private moviesService: MoviesServiceService,
    private actorsService: ActorsService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true
    this.moviesService.getMovies().subscribe({
      next: (movies: Movie[]) => {
        this.movies = movies
        console.log("movies", movies)
      },
      error: (error) => {
        console.log('Error:', error)
      }
    })
    this.actorsService.getActors().pipe(finalize(() => this.loading = false)).subscribe({
      next: (actors: Actor[]) => {
        this.actors = actors
        console.log(actors)
      },
      error: (error) => {
        console.log('Error:', error)
      }
    })
  }

  onCardClick(el: Movie | Actor) {
    if ('genre' in el) {
      this.router.navigate(['/movies', el.id])
    } else {
      this.router.navigate(['/actors', el.id])
    }
  }
}
