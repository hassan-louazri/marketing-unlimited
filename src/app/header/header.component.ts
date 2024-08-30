import { Component } from '@angular/core';
import { TranslationService } from '../core/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;
  selectedLanguage: string = 'en'; // Hadi RIGLHA BDAKCHI D LOCALSTORAGE OU L3IBAT
  constructor(private translationService: TranslationService,  private router:Router) {}

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
