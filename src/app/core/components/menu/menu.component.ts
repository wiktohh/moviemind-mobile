import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { exit } from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [TranslateModule, CommonModule, IonicModule, RouterModule],
})
export class MenuComponent {
  lang: string = '';

  constructor(private translate: TranslateService) {
    addIcons({ exit });
   }

   changeLanguage(lang: string){
      this.lang = lang;
      this.translate.use(lang);
   }

}
