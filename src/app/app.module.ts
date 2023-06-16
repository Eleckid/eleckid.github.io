import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {registerLocaleData} from "@angular/common";
import * as fr from "@angular/common/locales/fr";
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpprofessionnellesComponent } from './expprofessionnelles/expprofessionnelles.component';
import { FormationsComponent } from './formations/formations.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { AproposComponent } from './apropos/apropos.component';
import { MylinksComponent } from './mylinks/mylinks.component';
import { CompetencesComponent } from './competences/competences.component';
import { RealisationsComponent } from './realisations/realisations.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ExpprofessionnellesComponent,
    FormationsComponent,
    ContactComponent,
    HeaderComponent,
    AproposComponent,
    MylinksComponent,
    CompetencesComponent,
    RealisationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'},],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
