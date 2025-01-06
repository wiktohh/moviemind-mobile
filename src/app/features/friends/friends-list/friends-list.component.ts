import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonList, IonItem, IonAvatar, IonLabel, IonButton, IonIcon } from "@ionic/angular/standalone";
import { FriendsService } from 'src/app/shared/services/friends/friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class FriendsListComponent implements OnInit {

  friends: any[] = []

  constructor(private friendService: FriendsService) { }

  ngOnInit() {
    console.log('FriendsListComponent ionViewWillEnter');
    this.friendService.getFriends().subscribe({
      next: (friends) => {
        this.friends = friends;
        console.log(friends)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  removeFriend(friend: any) {
    console.log('Remove friend:', friend);
  }

}
