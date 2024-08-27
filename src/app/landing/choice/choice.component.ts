import { Component } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent {
  cards = [// ADD 'ENGLISH VERSION' + 'FR VERSION'
    {
      icon: '../../../assets/icons/clock.svg',
      title: 'Do it yourself?',
      text: "No problem if you have little to do. However, if you're busy… I don't think that's feasible."
    },
    {
      icon: '../../../assets/icons/clock.svg',
      title: 'Hire new staff?',
      text: "Finding good people is not an obvious task. Training them is also expensive. And even if you find the perfect person, you still rely on one individual."
    },
    {
      icon: '../../../assets/icons/clock.svg',
      title: 'Hire an agency?',
      text: "Don't have a marketing budget of tens of thousands of euros per month? Then your account is probably going to be managed by the intern of the assistant of the assistant. Not ideal."
    }
  ]
}
