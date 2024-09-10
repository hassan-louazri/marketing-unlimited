import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      image: "../../../assets/images/free-time.jpeg",
      title: "SERVICES.META.TITLE",
      description: "SERVICES.META.DESCRIPTION"
    },
    {
      image: "../../../assets/images/free-time.jpeg",
      title: "SERVICES.CONTENT.TITLE",
      description: "SERVICES.CONTENT.DESCRIPTION"
    },
    {
      image: "../../../assets/images/free-time.jpeg",
      title: "SERVICES.EMAIL.TITLE",
      description: "SERVICES.EMAIL.DESCRIPTION"
    },
    {
      image: "../../../assets/images/free-time.jpeg",
      title: "SERVICES.GOOGLE.TITLE",
      description: "SERVICES.GOOGLE.DESCRIPTION"
    },
    {
      image: "../../../assets/images/free-time.jpeg",
      title: "SERVICES.WEBSITE.TITLE",
      description: "SERVICES.WEBSITE.DESCRIPTION"
    }
  ]
}
