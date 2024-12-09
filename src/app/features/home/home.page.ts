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

  constructor(
    private moviesService: MoviesServiceService,
    private actorsService: ActorsService, 
    private translate: TranslateService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies()
    this.actors = this.actorsService.getActors()
  }
}
