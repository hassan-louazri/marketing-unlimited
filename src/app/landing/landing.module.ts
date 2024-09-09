import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { OfferComponent } from './offer/offer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';
import { ChoiceComponent } from './choice/choice.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    HeroComponent,
    OfferComponent,
    ChoiceComponent,
    HomepageComponent,
    NewsletterComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    HttpClientModule,
    TranslateModule,
    FormsModule
  ]
})
export class LandingModule { }
