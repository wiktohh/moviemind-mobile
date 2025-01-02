import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonButton, IonIcon, IonItem, IonAvatar, IonList, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { FriendsListComponent } from "./friends-list/friends-list.component";
import { PendingFriendsListComponent } from "./pending-friends-list/pending-friends-list.component";
import { AddFriendComponent } from "./add-friend/add-friend.component";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone: true,
  imports: [IonButtons, IonList, IonAvatar, IonItem, IonIcon, IonButton, IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FriendsListComponent, PendingFriendsListComponent, AddFriendComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class FriendsPage implements OnInit {

  constructor() {
    addIcons({trash});
   }

  friends = [
    { name: 'John', avatar: 'https://randomuser.me/api/port', status: 'online' },
  ]
  segment: string = 'all'

  ngOnInit() {
    console.log('FriendsPage ngOnInit');
  }

  segmentChanged(event: any) {
    this.segment = event.detail.value;
    console.log(event);
  }

  removeFriend(friend: any) {
    console.log('Remove friend:', friend);
  }

}
