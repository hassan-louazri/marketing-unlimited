import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang("en");
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
