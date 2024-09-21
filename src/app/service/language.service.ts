import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  cookie = inject(SsrCookieService);
  translate = inject(TranslateService);
  currentlang = signal('');

  changeLanguage(lang: string) {
    this.cookie.set('lang', lang);

    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    this.currentlang.set(lang);
  }
}
