import { Injectable, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastController = inject(ToastController);

  constructor() {
    addIcons({close})
  }

  async presentToast(message: string, color: 'success' | 'danger', duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      color,
      buttons: [
        {
          icon: 'close',
          htmlAttributes: {
            'aria-label': 'close',
          },
        },
      ],
      position: 'top',
    });
    await toast.present();
  }

  success(message: string) {
    this.presentToast(message, 'success');
  }

  failed(message: string) {
    this.presentToast(message, 'danger');
  }
}
