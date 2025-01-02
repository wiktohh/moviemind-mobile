import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-friends-list',
  templateUrl: './pending-friends-list.component.html',
  styleUrls: ['./pending-friends-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PendingFriendsListComponent {

  constructor() { }

  friends = [
    {id: 1, name: 'John', avatar: 'https://randomuser.me/api/port', status: 'online' },
  ]


  removeFriend(friend: any) {
    this.friends = this.friends.filter(f => f.id !== friend.id);
    console.log('Removed pending friend:', friend);
  }

  acceptFriend(friend: any) {
    friend.status = 'accepted';
    console.log('Accepted friend:', friend);
  }

}
