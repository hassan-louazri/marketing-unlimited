import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(form: any) {
    if(form.valid) {
      console.log("submitted");
      console.log(form.value);
    }
  }
}
