import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControlService } from '../core/form-control.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  constructor(private modalService: NgbModal, config: NgbModalConfig, private formSender: FormControlService,private http: HttpClient) {
    config.animation = true;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  // DIRTY CODE STARTS HERE  -----------------------
  countryCodes: { [key: string]: string } = {};
  selectedCountryCode: string = '';
  email: string = '';
  emailInvalid: boolean = false;

  // Regular expression pattern for email validation
  emailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';

  isSubmitting: boolean = false; // Track submission state
  options = ["0 - 500", "500 - 2000", "2000 - 10000", "+10000"];
  selectedAdSpend: string = ''; // Initialize with an empty string or the first option
  selectedCountryFlag: string = ''; // Initialize with an empty string

  selectAdSpend(option: string): void {
    this.selectedAdSpend = option;
    console.log('Selected Ad Spend:', this.selectedAdSpend); // Log the selected option
  }
  getCountryCodes() {
    this.http.get<{ [key: string]: string }>('../../assets/static-data/phone.json')
      .subscribe((data) => {
        this.countryCodes = data;
      });
  }
  format_code(code: string) {
    return code.startsWith('+') ? code : '+'+code;
  }
  validateEmail(value: string) {
    if (value.trim() === '') {
      this.emailInvalid = false; // Do not show the message if the input is empty
      return;
  }
    // Validate the email using regex
    const regex = new RegExp(this.emailPattern);
    this.emailInvalid = !regex.test(value);
  }
  onCountryCodeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
  
    this.selectedCountryCode = selectElement.value;  // Numeric country code
    this.selectedCountryFlag = selectedOption.textContent?.split(' ')[1].toLowerCase() || '';  // Country key in lowercase    
  }
  ngOnInit() {
    this.getCountryCodes();
  }
  // DIRTY CODE ENDS HERE  -----------------------

  // -----------------------
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
