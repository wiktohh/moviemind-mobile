import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonSearchbar, IonText, IonTitle, IonToolbar, IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { personAdd } from 'ionicons/icons';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonText, IonLabel, IonList, IonSearchbar, IonContent, IonItem, IonTitle, IonHeader, IonToolbar, CommonModule, FormsModule],
})
export class AddFriendComponent {
  searchFriend: string = '';
  filteredUsers: any[] = [];
  users: any[] = [
    { id: 1, name: 'Anna Kowalska', email: 'anna@example.com', avatar: 'assets/avatar1.jpg' },
    { id: 2, name: 'Jan Nowak', email: 'jan@example.com', avatar: 'assets/avatar2.jpg' },
    { id: 3, name: 'Maria Wiśniewska', email: 'maria@example.com', avatar: 'assets/avatar3.jpg' }
  ];

  constructor(private fb: FormBuilder) { 
    addIcons({personAdd})
    console.log('AddFriendComponent constructor');
  }

  onSearch() {
    if(this.searchFriend.length === 0){
      this.filteredUsers = [];
      return;
    }
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchFriend.toLowerCase())
    );
  }

  addFriend(user: any) {
    console.log('Add friend:', user);
  }
}
