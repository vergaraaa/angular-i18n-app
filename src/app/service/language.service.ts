import { inject, Injectable, InjectionToken, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const SERVER_LANG_TOKEN = new InjectionToken<string>(
  'SERVER_LANG_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  cookie = inject(SsrCookieService);
  translate = inject(TranslateService);

  langServer = inject(SERVER_LANG_TOKEN, {
    optional: true,
  });

  currentlang = signal(this.langServer ?? 'en');

  changeLanguage(lang: string) {
    this.cookie.set('lang', lang);

    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    this.currentlang.set(lang);
  }
}
