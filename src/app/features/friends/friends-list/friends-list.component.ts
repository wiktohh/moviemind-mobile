import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonList, IonItem, IonAvatar, IonLabel, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class FriendsListComponent {

  friends = [
    { name: 'John', avatar: 'https://randomuser.me/api/port', status: 'online' },
  ]

  constructor() { }

  removeFriend(friend: any) {
    console.log('Remove friend:', friend);
  }

}
