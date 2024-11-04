import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaButtonComponent } from './cta-button/cta-button.component';

@NgModule({
  declarations: [CtaButtonComponent],
  imports: [CommonModule],
  exports: [CtaButtonComponent] // Export to make it available in other modules
})
export class ComponentsModule { }
