import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { OfferComponent } from './offer/offer.component';



@NgModule({
  declarations: [
    HeroComponent,
    OfferComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    OfferComponent
  ]
})
export class LandingModule { }
