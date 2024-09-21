import { Component, effect, Inject, inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguageService, SERVER_LANG_TOKEN } from './service/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'i18n-app';

  languageService = inject(LanguageService);
  cookies = inject(SsrCookieService);

  constructor(
    @Optional()
    @Inject(SERVER_LANG_TOKEN)
    langServer: string
  ) {
    console.log({ langServer });
    console.log({ cookie: this.cookies.get('lang') });

    const lang =
      langServer ?? this.cookies.check('lang')
        ? this.cookies.get('lang')
        : 'en';
    this.languageService.changeLanguage(lang);
  }
}
