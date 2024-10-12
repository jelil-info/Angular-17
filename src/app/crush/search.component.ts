import { Component, Input,Output,EventEmitter,ViewChild,inject } from '@angular/core';
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

declare var animinate: any;
declare var top: any;
declare var scrollFunction: any;
declare var topFunction: any;








@Component({
  selector: 'search-page',
  //standalone: true,
  //imports: [],
  //imports: [],
  //imports: [RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  {

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  errorMessage: string = '';

  constructor(private router: Router) {
    this.housingLocationList = this.housingService.getAllHousingLocations(),
    this.filteredLocationList = this.housingLocationList}

    filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    const filteredLocations = this.housingLocationList.filter(
      housingLocation => housingLocation?.frontend.toLowerCase().includes(text.toLowerCase())
    );

    if (filteredLocations.length === 0) {
      this.errorMessage = "No results found for your search. Use the following keywords to search for different projects: 'React', 'Vuejs', 'Angular', 'HTML/CSS', and 'Javascript'.";
    } else {
      this.errorMessage = "";
    }

    this.filteredLocationList = filteredLocations;
  }


  ngOnInit(): void {

  new animinate();
  new top();
  new scrollFunction();
  new topFunction();

};








}
