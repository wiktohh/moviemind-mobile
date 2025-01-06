import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonText, IonIcon, IonRow, IonButton, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonCardContent, IonButtons } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { finalize } from 'rxjs';
import { Actor } from 'src/app/shared/models/actors/actor.model';
import { ActorsService } from 'src/app/shared/services/actors/actors.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'actors.page.html',
  styleUrls: ['actors.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [TranslateModule, IonButtons, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonText, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule]
})
export class ActorsPage implements OnInit {

  actors: Actor[] = [];
  loading: boolean = false

  constructor(
    private actorsService: ActorsService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true
    this.actorsService.getActors().pipe(finalize(() => this.loading = false)).subscribe({
      next: (actors: Actor[]) => {
        this.actors = actors
      },
      error: (error) => {
        console.log('Error:', error)
      }
    })
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

  onActorClick(actorId: string) {
    this.router.navigate(['/actors', actorId]);
  }

}
