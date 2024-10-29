import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControlService } from '../core/form-control.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // options = ["0 - 500", "500 - 2000", "2000 - 10000", "+10000"];

  // selectedAdSpend: string = "0 - 500";

  constructor(private modalService: NgbModal, config: NgbModalConfig, private formSender: FormControlService) {
    config.animation = true;
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // TODO: replace "adspend" field with dropdown menu with options above.
  // selectAdSpend(option: string) {
  //   this.selectedAdSpend = option;
  // }
  
  onSubmit(form: NgForm, content: any) {
    if(form.valid) {
      // TODO: write form to excel sheet
      console.log('form: ', form.value);
      console.log('typeof form: ', typeof form.value);
      this.formSender.sendFormData(form.value).subscribe(res => {
        console.log(res);
        console.log("success");
      });
      this.modalService.open(content);
      form.resetForm();
    }
  }
}
