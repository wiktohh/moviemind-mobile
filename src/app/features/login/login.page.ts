import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { filmOutline } from 'ionicons/icons';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, TranslateModule],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private auth: AuthService,
    private toastService: ToastService) {
    addIcons({filmOutline})
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login:', this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          this.toastService.success('Zalogowano pomyślnie');
          this.router.navigate(['/tabs/home']);
        },
        error: (err) => {
          this.toastService.failed('Błąd logowania');
          console.error('Błąd logowania:', err);
        }
      });
    } else {
      console.log('Invalid login form');
    }
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  continueAsGuest(){
    this.auth.continueAsGuest();
    this.router.navigate(['/tabs/home']);
  }
}
