import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonText, IonIcon, IonRow, IonButton, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonCardContent } from '@ionic/angular/standalone';
import { ActorsService } from 'src/app/shared/services/actors/actors.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'actors.page.html',
  styleUrls: ['actors.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonImg, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCol, IonButton, IonRow, IonIcon, IonText, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule]
})
export class ActorsPage implements OnInit {

  actors: any[] = [];

  constructor(private actorsService: ActorsService) {}

  ngOnInit(): void {
    this.actors = this.actorsService.getActors();
  }

}
