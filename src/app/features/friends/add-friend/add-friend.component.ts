import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonSearchbar, IonText, IonTitle, IonToolbar, IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { personAdd } from 'ionicons/icons';
import { TranslateModule } from '@ngx-translate/core';
import { FriendsService } from 'src/app/shared/services/friends/friends.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonText, IonLabel, IonList, IonSearchbar, IonContent, IonItem, IonTitle, IonHeader, IonToolbar, CommonModule, FormsModule, TranslateModule],
})
export class AddFriendComponent implements OnInit {
  searchFriend: string = '';
  filteredUsers: any[] = [];
  users: any[] = [];

  constructor(private fb: FormBuilder, private friendService: FriendsService, private authService: AuthService) { 
    addIcons({personAdd});
    console.log('AddFriendComponent constructor');
  }

  ngOnInit(): void {
    const currentUser = this.authService.getUser();
    this.friendService.getUsers().subscribe({
      next: (users: any) => {
        this.users = users.filter((user: any) => user.id !== currentUser.id);
        console.log('Users:', users);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  onSearch() {
    if(this.searchFriend.length === 0){
      this.filteredUsers = [];
      return;
    }
    this.filteredUsers = this.users.filter((user) =>
      user.login.toLowerCase().includes(this.searchFriend.toLowerCase()) || user.email.toLowerCase().includes(this.searchFriend.toLowerCase())
    );
  }

  addFriend(user: any) {
    this.friendService.addFriend(user.id).subscribe({
      next: (response) => {
        console.log('Friend request sent:', response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
