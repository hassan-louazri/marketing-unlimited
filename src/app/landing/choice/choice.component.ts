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
      title: 'CHOICE.CARDS.ONE.TITLE',
      text: 'CHOICE.CARDS.ONE.TEXT'
    },
    {
      icon: '../../../assets/icons/clock.svg',
      title: 'CHOICE.CARDS.TWO.TITLE',
      text: 'CHOICE.CARDS.TWO.TEXT'
    },
    {
      icon: '../../../assets/icons/clock.svg',
      title: 'CHOICE.CARDS.THREE.TITLE',
      text: 'CHOICE.CARDS.THREE.TEXT'
    }
  ]
}
