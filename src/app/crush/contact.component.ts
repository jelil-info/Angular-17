import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";
import Typewriter from 't-writer.js'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';
import {RecaptchaService} from "./recaptcha.service";
import {Inject } from '@angular/core';

//import * as type from '../scripts/type';
//import  './../../../assets/javascript.js'

//declare var typewriter: any;
declare var animinate: any;
//declare var arabic: any;
declare var time: any;
declare var top: any;
declare var scrollFunction: any;
declare var topFunction: any;
declare var captcha: any;




//declare var typewriter: any;
//declare var animinate: any;
//declare var arabic: any;
declare var time: any;
//declare var top: any;
//declare var scrollFunction: any;
//declare var topFunction: any;
//declare var captcha: any;


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './crush.component.css'
})



export class ContactComponent    {


  contactForm: FormGroup;
  recaptchaToken: string | null = null; // Store the reCAPTCHA token
  errorMessage: string = '';
  successMessage: string = '';


  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private router: Router,
    private recaptchaService: RecaptchaService
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

    new captcha();
  };



  //new animinate();

  //new arabic();



  //new top();

  //new scrollFunction();

  //new topFunction();

  //new captcha();







}
