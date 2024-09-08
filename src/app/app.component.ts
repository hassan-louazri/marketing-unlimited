import { TranslationService } from './core/translation.service';
import { Component } from '@angular/core';
import { injectSpeedInsights } from '@vercel/speed-insights';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translation: TranslationService) {
    injectSpeedInsights();
  }

  ngOnInit() {
    const lang = this.translation.getLanguage();
    this.translation.setLanguage(lang);
  }
}
