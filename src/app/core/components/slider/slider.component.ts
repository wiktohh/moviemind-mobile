import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/shared/models/actors/actor.model';
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {
  @Input() data: any[] = [];
  @Input() height: number = 220;
  @Input() width: number = 125;
  @Input() slidesPerView = 2.5;
  @Output() cardClick = new EventEmitter<Movie | Actor>();

  tempImage = environment.tempImage


  constructor(private router: Router) {}

  isMovie(el: Movie | Actor): el is Movie {
    return (el as Movie)?.genre !== undefined;
  }

  redirectToPage(el: Movie | Actor) {
    if(this.isMovie(el)) {
      console.log("redirecting to movie details")
      this.router.navigate(['/movies', el.id]);
    } else {
      console.log("redirecting to actor details")
      this.router.navigate(['/actors', el.id]);
    }
  }

  onCardClick(el: Movie | Actor) {
    this.cardClick.emit(el)
  }

}
