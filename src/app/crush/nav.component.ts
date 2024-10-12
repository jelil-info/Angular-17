import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

declare var time: any;



@Component({
  selector: 'menu',
  templateUrl: 'nav.component.html',
  styleUrl: './crush.component.css'
})



export class NavComponent    {

  constructor(private router: Router) { }

 title= 'example';

  ngAfterViewInit(){ setTimeout(() => {
    //new typewriter();
    new time();


  });





};



}
