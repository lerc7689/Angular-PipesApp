import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeEsDo from '@angular/common/locales/es-DO';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsDo);
registerLocaleData(localeFrCA);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    //Para establecer un idioma en toda la pagina
    {
      provide: LOCALE_ID,
      useValue: 'es-DO',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
