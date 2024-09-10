import { Component } from '@angular/core';
import { TranslationService } from '../core/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;
  selectedLanguage!: string;
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.selectedLanguage = this.translationService.getLanguage();
    this.translationService.setLanguage(this.selectedLanguage);
  }

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.selectedLanguage = lang;
  }
}
