import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonItem } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from "./core/components/menu/menu.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonItem, IonApp, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pl');
    this.translate.use('pl');
  }
}
