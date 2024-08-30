import { Component } from '@angular/core';
import { TranslationService } from '../core/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;

  constructor(private translationService: TranslationService) {}

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }
}
