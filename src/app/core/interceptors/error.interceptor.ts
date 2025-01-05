import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, throwError } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  const translateService = inject(TranslateService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Wystąpił nieznany błąd.';

      console.log(req.url)

      if (req.url.includes('/Movie/title')) {
        return next(req); 
      }

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Błąd klienta: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 400:
            errorMessage = translateService.instant('errors.400')
            break;
          case 401:
            errorMessage = translateService.instant('errors.401')
            break;
          case 403:
            errorMessage = translateService.instant('errors.403')
            break;
          case 404:
            errorMessage = translateService.instant('errors.404')
            break;
          case 500:
            errorMessage = translateService.instant('errors.405')
            break;
          default:
            errorMessage = translateService.instant('errors.default');
        }
      }

      toastService.failed(errorMessage);

      return throwError(() => error);
    })
  );
};
