import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/shared/models/actors/actor.model';
import { Movie } from 'src/app/shared/models/movies/movie.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {

  @Input() data: (Movie | Actor)[] = [];

  constructor() { }

  isMovie(el: Movie | Actor): el is Movie {
    return (el as Movie).poster !== undefined;
  }

}
