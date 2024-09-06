import { Component } from '@angular/core';
import { TranslationService } from '../core/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;
  selectedLanguage: string | undefined;

  constructor(private translationService: TranslationService) {}

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.selectedLanguage = lang;
  }
  
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }
}
