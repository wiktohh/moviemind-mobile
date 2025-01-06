import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, NavController } from '@ionic/angular/standalone';
import { ActorsService } from 'src/app/shared/services/actors/actors.service';
import { Actor } from 'src/app/shared/models/actors/actor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { person, personOutline, star } from 'ionicons/icons';
import { SliderComponent } from "../../core/components/slider/slider.component";
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.page.html',
  styleUrls: ['./actor-details.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SliderComponent, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActorDetailsPage implements OnInit {
  actorId: string = '';
  actor: Actor | null = null;
  loading: boolean = false;

  constructor(private actorService: ActorsService, private route: ActivatedRoute,  private navController: NavController) { 
    addIcons({personOutline,star});
  }

  ngOnInit() {
    this.loading = true;
    this.actorId = this.route.snapshot.paramMap.get('id') || '';
    this.actorService.getActorById(this.actorId).pipe(finalize(() => this.loading = false)).subscribe({
      next: (actor: Actor) => {
        this.actor = actor;
        console.log(this.actor)
      },
      error: (error) => {
        console.log('Error:', error);
      }
    })
    console.log(this.actor)
  }

  // getActorMovies(id: string){
  //   this.actorService.getMoviesForActor(this.actorId).subscribe({
  //     next: (movies: Movie[]) => {
  //       if (this.actor) {
  //         this.actor.movies = movies;
  //       }
  //     },
  //     error: (error) => {
  //       console.log('Error:', error);
  //     }
  //   })
  // }

  onCardClick(actor: Actor | Movie) {
    this.navController.navigateForward(['/actors', actor.id]);
  }

  onMovieClick(movieId: string) {
    this.navController.navigateForward(['/movies', movieId]);
  }

  countAge(birthDate: string) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

}
