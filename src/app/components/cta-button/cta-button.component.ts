import { Component, Input } from '@angular/core';

@Component({
  selector: 'cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.scss']
})
export class CtaButtonComponent {
  // Default values
  @Input() label: string = 'Click Me'; // To set when calling the button component
  @Input() type: string = 'button'; // Can be 'button', 'submit', or 'reset'
  @Input() disabled: boolean = false;
  @Input() className: string = '';
}
