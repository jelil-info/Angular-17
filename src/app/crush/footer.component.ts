import { Component } from '@angular/core';
import { Router } from "@angular/router";





//declare var typewriter: any;
declare var animinate: any;
//declare var arabic: any;
//declare var time: any;
declare var top: any;
declare var scrollFunction: any;
declare var topFunction: any;



@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrl: './crush.component.css'
})



export class FooterComponent    {

  constructor(private router: Router) { }

 title= 'example';

 ngOnInit(): void {








 new animinate();
 //new arabic();

 //new time();

 new top();

 new scrollFunction();

 new topFunction();







};




}
