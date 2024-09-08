import { TranslationService } from './core/translation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translation: TranslationService) {
  }

  ngOnInit() {
    const lang = this.translation.getLanguage();
    this.translation.setLanguage(lang);
  }
}
