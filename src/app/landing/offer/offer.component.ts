import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements AfterViewInit{

  cards = [
    {
      img: '../../../assets/images/free-time.jpeg',
      icon: 'readiness_score',
      title: 'OFFER.CARDS.ONE.TITLE',
      text: 'OFFER.CARDS.ONE.TEXT'
    },
    {
      img: '../../../assets/images/conversions.jpg',
      icon: 'groups',
      title: 'OFFER.CARDS.TWO.TITLE',
      text: 'OFFER.CARDS.TWO.TEXT'
    },
    {
      img: '../../../assets/images/professional.jpg',
      icon: 'engineering',
      title: 'OFFER.CARDS.THREE.TITLE',
      text: 'OFFER.CARDS.THREE.TEXT'
    },
    {
      img: '../../../assets/images/agency.jpg',
      icon: 'store',
      title: 'OFFER.CARDS.FOUR.TITLE',
      text: 'OFFER.CARDS.FOUR.TEXT'
    },
  ]

  isVisible: any;

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elements = document.querySelectorAll('.head-text') as NodeListOf<HTMLElement>;
    
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      
      // Check if the text is in the viewport (with some offset)
      if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        element.classList.add('visible');  // Scroll down: show text
      } else {
        element.classList.remove('visible');  // Scroll up: hide text (move right)
      }
    });
  }

  ngAfterViewInit() {
    this.onWindowScroll(); // Call once on initialization
  }

  onClick() {
    this.router.navigate(['/services']);
  }
}
