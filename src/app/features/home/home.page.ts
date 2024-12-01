import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Actor } from 'src/app/shared/models/actors/actor.model';
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { ActorsService } from 'src/app/shared/services/actors/actors.service';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import {register} from 'swiper/element/bundle';
import { SliderComponent } from "./slider/slider.component";

register()

@Component({
  selector: 'app-tab3',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, SliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {

  movies: Movie[] = []
  actors: Actor[] = []

  constructor(private moviesService: MoviesServiceService, private actorsService: ActorsService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies()
    this.actors = this.actorsService.getActors()
  }
}
