import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/fr|en/) ? browserLang : 'en');  
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  getLanguage(): string {
    return localStorage.getItem('language') || 'en';
  }
}
