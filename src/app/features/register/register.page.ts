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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, TranslateModule],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private toastService: ToastService) {
    addIcons({filmOutline})
    this.registerForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    // , { validators: this.passwordMatchValidator }
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (res: any) => {
          this.toastService.success('Zarejestrowano pomyślnie');
          this.goToLogin();
        },
        error: (err) => {
          this.toastService.failed('Błąd rejestracji');
          console.error('Błąd rejestracji:', err);
        },
      })
    } else {
      console.log('Invalid register form');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  continueAsGuest(){
    this.authService.continueAsGuest();
    this.router.navigate(['/tabs/home']);
  }
}
