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
  isSubmitting: boolean = false; // Track submission state
  // TODO: replace "adspend" field with dropdown menu with options above.
  // selectAdSpend(option: string) {
  //   this.selectedAdSpend = option;
  // } --------------- DONE ----------------
  
  options = ["0 - 500", "500 - 2000", "2000 - 10000", "+10000"];
  selectedAdSpend: string = ''; // Initialize with an empty string or the first option

  selectAdSpend(option: string): void {
    this.selectedAdSpend = option;
    console.log('Selected Ad Spend:', this.selectedAdSpend); // Log the selected option
  }


  constructor(private modalService: NgbModal, config: NgbModalConfig, private formSender: FormControlService) {
    config.animation = true;
    config.backdrop = 'static';
    config.keyboard = false;
  }

   onSubmit(form: NgForm, content: any, errorContent: any): void {
        if (form.valid) {
            this.isSubmitting = true; // Set submitting state to true
            
            this.formSender.sendFormData(form.value)
                .subscribe({
                    next: () => {
                        this.modalService.open(content);
                        this.isSubmitting = false; // Reset submitting state
                    },
                    error: (error) => {
                        console.log(error);
                        this.modalService.open(errorContent);
                        this.isSubmitting = false; // Reset submitting state
                    }
                });
            
            form.resetForm();
        }
    }
}
