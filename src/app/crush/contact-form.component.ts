import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./crush.component.css']
})
export class ContactFormComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  onSubmit(): void {
    this.formService.submitForm(this.contactForm.value).subscribe(response => {
      console.log('Form submitted successfully', response);
    }, error => {
      console.error('Error submitting form', error);
    });
  }
}
