import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add, checkmark } from 'ionicons/icons';
import { FriendsService } from 'src/app/shared/services/friends/friends.service';

@Component({
  selector: 'app-pending-friends-list',
  templateUrl: './pending-friends-list.component.html',
  styleUrls: ['./pending-friends-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PendingFriendsListComponent implements OnInit{

  friends: any[] = []

  constructor(private friendService: FriendsService) {
    addIcons({checkmark})
   }

  ngOnInit(): void {
    this.getPendingFriends();
  }

  getPendingFriends(){
    this.friendService.getPendingFriends().subscribe({
      next: (friends: any) => {
        this.friends = friends;
        console.log('Pending friends:', friends);
      },
      error: (error) => {
        console.error(error);
      }});
  }

  rejectFriend(friend: any) {
    this.friendService.rejectFriend(friend.id).subscribe({
      next: (response) => {
        console.log('Friend request rejected:', response);
        this.getPendingFriends()
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  acceptFriend(friend: any) {
    this.friendService.acceptFriend(friend.id).subscribe({
      next: (response) => {
        console.log('Friend request accepted:', response);
        this.getPendingFriends()
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
