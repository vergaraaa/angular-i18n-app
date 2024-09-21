import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { SsrCookieService } from 'ngx-cookie-service-ssr';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    SsrCookieService,
  ],
};
