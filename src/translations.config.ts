import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Funkcja do ładowania plików tłumaczeń
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Konfiguracja aplikacji z tłumaczeniami
export const provideTranslations = (): ApplicationConfig['providers'] => [
  importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ),
];