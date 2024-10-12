import { Component, Input,Output,EventEmitter,ViewChild,inject,ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";
import Typewriter from 't-writer.js'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';
import {RecaptchaService} from "./recaptcha.service";
import {Inject } from '@angular/core';
//import { HousingLocationComponent } from './housing-location.component';
import { HousingLocation } from './housinglocation';
import { HousingService } from './housing.service';

//import * as type from '../scripts/type';
//import  './../../../assets/javascript.js'

//declare var typewriter: any;
declare var animinate: any;
//declare var arabic: any;
declare var time: any;
declare var top: any;
declare var scrollFunction: any;
declare var topFunction: any;
//declare var captcha: any;







@Component({
  selector: 'crush',
  //standalone: true,
  //imports: [],
  //imports: [],
  //imports: [RouterModule],
  templateUrl: './crush.component.html',
  styleUrl: './crush.component.css'
})
export class CrushComponent  {

  @ViewChild('about') about!: ElementRef;
  @ViewChild('otherServices') otherServices!: ElementRef;

  scrollToSection(section: string) {
    if (section === 'about') {
      this.about.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'otherServices') {
      this.otherServices.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }



  phoneNumber: string = '+2347030786761';  // Update with your phone number
  message: string = 'Hello, I need assistance!';  // Custom message

  getWhatsAppLink() {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
  }

@Input() myData: any;
@Output() myEvent = new EventEmitter<any>();


  contactForm: FormGroup;
  recaptchaToken: string | null = null; // Store the reCAPTCHA token
  errorMessage: string = '';
  successMessage: string = '';


  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private router: Router,
    private recaptchaService: RecaptchaService,

  ) {
      this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['']
    });
  }




  @ViewChild('submitButton') submitButton!: HTMLButtonElement;
  isSubmitting = false;


  onSubmit(): void {
    if (this.contactForm.valid && this.recaptchaToken) {
      this.isSubmitting = true;
      this.submitButton.disabled = true;
      // Send the form data along with the reCAPTCHA token
      this.formService.submitForm({ ...this.contactForm.value, recaptchaToken: this.recaptchaToken })
        .subscribe(response => {
          console.log('Form submitted successfully', response);
          this.isSubmitting = false;
          this.submitButton.disabled = false;
          // Display a success message to the user
          //this.submitButton.textContent = 'Form Submitted';
          this.successMessage = 'Form submitted successfully!';

          this.errorMessage = ''; // Clear error message
        }, error => {
          console.error('Error submitting form', error);
          this.isSubmitting = false;
          this.submitButton.disabled = false;
          // Display an error message to the user
          this.submitButton.textContent = 'Error Submitting';
          this.errorMessage = 'An error occurred while submitting the form. Please try again later.';
        });
    } else {
      console.error('Form validation failed or reCAPTCHA token not resolved.');
      this.errorMessage = 'Form validation failed or reCAPTCHA token not resolved.';

    }
  }



  // Function triggered by the reCAPTCHA component to capture the token
  resolved(token: string) {
    this.recaptchaToken = token;
  }





  ngOnInit(): void {







  const target1 = document.querySelector('.typewriting2');
  const target2 = document.querySelector('.typewrite');

  const writer1 = new Typewriter(target1, {

  loop: true,
  typeSpeed: 80,
  deleteSpeed: 80,
  typeColor: 'white'

  })

  const writer2 = new Typewriter(target2, {

  loop: true,
  typeSpeed: 100,
  deleteSpeed: 80,
  typeColor: 'color:#009999'

  })



writer1
  .type('We build bespoke websites to deliver unique experiences ')
  .rest(500)
  //.changeOps({ deleteSpeed: 20 })
  //.remove(4)
  .type(' that are meant particularly for your products or services')
  .rest(500)
  //.remove(4)
  .type(' uniformly across platforms and devices')
  .removeCursor()
  .rest(500)
  //.changeOps({ deleteSpeed: 80 })
  //.remove(21)
  .type('.')
  .removeCursor()
  .rest(500)
  .clear()
  .start();

  writer2
  .type('نترجم النص')
  .rest(500)
  //.changeOps({ deleteSpeed: 80 })
  .remove(10)
  .type('الإنجليزي')
  .rest(500)
  .remove(9)
  .type('إلى')
  .rest(500)
  //.changeOps({ deleteSpeed: 20 })
  .remove(3)
  .type('اللغة العربية')
  .rest(500)
  .remove(14)
  .clear()
  .start();


  new animinate();
  //new arabic();

  new time();

  new top();

  new scrollFunction();

  new topFunction();

  //new captcha();
};



/*navigateToStore() {
  this.router.navigate(['/store']); // Navigates to the '/' route
}
(click)="navigateToStore()"//this code should be in crush.component.htl*/




  //new typewriter();

  /*ngAfterViewInit(){ setTimeout(() => {
    new typewriter();

    new animinate();

    new arabic();

    //new time();

    //new top();

    new scrollFunction();

    new topFunction();

    new captcha();


  });








};*/







}
