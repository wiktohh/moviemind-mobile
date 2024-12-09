import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { exit, film, heart, people, settings, time } from 'ionicons/icons';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [TranslateModule, CommonModule, IonicModule, RouterModule],
})
export class MenuComponent {
  lang: string = '';
  isLoggedIn: boolean = false;

  constructor(private translate: TranslateService, private authService: AuthService, private router: Router) {
    addIcons({ exit, settings, heart, time, film, people });
    this.isLoggedIn = this.authService.isAuthenticated;
   }

   changeLanguage(lang: string){
      this.lang = lang;
      this.translate.use(lang);
   }

   logout(): void {
      this.authService.logout();
   }

   login(): void {
      this.router.navigate(['/login']);
   }

}
