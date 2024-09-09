import { Component } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent {
  cards = [
    {
      icon: 'list_alt',
      title: 'CHOICE.CARDS.ONE.TITLE',
      text: 'CHOICE.CARDS.ONE.TEXT'
    },
    {
      icon: 'supervisor_account',
      title: 'CHOICE.CARDS.TWO.TITLE',
      text: 'CHOICE.CARDS.TWO.TEXT'
    },
    {
      icon: 'support_agent',
      title: 'CHOICE.CARDS.THREE.TITLE',
      text: 'CHOICE.CARDS.THREE.TEXT'
    },
    {
      icon: 'support_agent',
      title: "Or choose us",
      text: "We're so confident in our service that we win only if you win. You won't have to pay us if we don't deliver. We believe it's the basis of a good business relationship"
    }
  ]
}
