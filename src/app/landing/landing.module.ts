import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { OfferComponent } from './offer/offer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';
import { ChoiceComponent } from './choice/choice.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    HeroComponent,
    OfferComponent,
    ChoiceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    HeroComponent,
    OfferComponent,
    ChoiceComponent,
    ContactComponent
  ]
})
export class LandingModule { }
