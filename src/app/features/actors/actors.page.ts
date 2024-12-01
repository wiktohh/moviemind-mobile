import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonText, IonIcon, IonRow, IonButton, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonCardContent, IonButtons } from '@ionic/angular/standalone';
import { Actor } from 'src/app/shared/models/actors/actor.model';
import { ActorsService } from 'src/app/shared/services/actors/actors.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'actors.page.html',
  styleUrls: ['actors.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonButtons, IonCardContent, IonImg, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCol, IonButton, IonRow, IonIcon, IonText, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule]
})
export class ActorsPage implements OnInit {

  actors: Actor[] = [];

  constructor(private actorsService: ActorsService) {}

  ngOnInit(): void {
    this.actors = this.actorsService.getActors();
  }

}
