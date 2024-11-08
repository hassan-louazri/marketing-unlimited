import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      image: "../../../assets/images/adves_media.jpg",
      title: "SERVICES.META.TITLE",
      description: "SERVICES.META.DESCRIPTION"
    },
    {
      image: "../../../assets/images/marketing-idea.jpg",
      title: "SERVICES.CONTENT.TITLE",
      description: "SERVICES.CONTENT.DESCRIPTION"
    },
    {
      image: "../../../assets/images/email_markt.jpg",
      title: "SERVICES.EMAIL.TITLE",
      description: "SERVICES.EMAIL.DESCRIPTION"
    },
    {
      image: "../../../assets/images/google-ads.jpg",
      title: "SERVICES.GOOGLE.TITLE",
      description: "SERVICES.GOOGLE.DESCRIPTION"
    },
    {
      image: "../../../assets/images/website.jpg",
      title: "SERVICES.WEBSITE.TITLE",
      description: "SERVICES.WEBSITE.DESCRIPTION"
    }
  ];

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/contact']);
  }
}
