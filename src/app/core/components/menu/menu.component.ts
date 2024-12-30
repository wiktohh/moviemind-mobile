import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { exit, film, heart, people, settings, time } from 'ionicons/icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [TranslateModule, CommonModule, IonicModule, RouterModule],
})
export class MenuComponent implements OnInit, OnDestroy {
  lang: string = '';
  isLoggedIn: boolean = false;
  user: any = null;
  private authSubscription: Subscription = new Subscription();

  constructor(private translate: TranslateService, private authService: AuthService, private router: Router) {
    addIcons({ exit, settings, heart, time, film, people });
   }

   ngOnInit(): void {
      this.authSubscription.add(
        this.authService.isAuthenticated$.subscribe((isAuth) => {
          this.isLoggedIn = isAuth;
        })
      );
  
      this.authSubscription.add(
        this.authService.user$.subscribe((user) => {
          this.user = user;
        })
      );
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

   ngOnDestroy() {
      this.authSubscription?.unsubscribe();
    }

}
