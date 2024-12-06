import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsPage implements OnInit {
  isDarkTheme = false;
  selectedLanguage = 'pl';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.isDarkTheme = document.body.classList.contains('dark');
    this.selectedLanguage = this.translate.currentLang;
    console.log(this.selectedLanguage)
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark', this.isDarkTheme);
  }

  changeLanguage(event: any) {
    console.log(event)
    const lang = event.detail.value;
    this.selectedLanguage = lang;
    this.translate.use(this.selectedLanguage);
  }

}
