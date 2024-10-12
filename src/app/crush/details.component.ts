import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from './housing.service';
import { HousingLocation } from './housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";

declare var animinate: any;
declare var top: any;
declare var scrollFunction: any;
declare var topFunction: any;

@Component({
  selector: 'app-details',
  /*standalone: true,*/
  /*imports: [
    CommonModule,
    ReactiveFormsModule
  ],*/
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private router: Router) {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  ngOnInit(): void {

  new animinate();
  new top();
  new scrollFunction();
  new topFunction();

};


}
