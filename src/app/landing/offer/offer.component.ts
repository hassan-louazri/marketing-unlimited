import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements AfterViewInit{
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elements = document.querySelectorAll('.head-text') as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Check if each text element is in the viewport (with some offset)
      if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        element.classList.add('visible');
      }
    });
  }

  ngAfterViewInit() {
    this.onWindowScroll(); // Call once on initialization
  }
}
