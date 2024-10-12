import { Component } from '@angular/core';
import { Router } from "@angular/router";






//declare var typewriter: any;
declare var animinate: any;
//declare var arabic: any;
//declare var time: any;
declare var top: any;
declare var scrollFunction: any;
declare var topFunction: any;
declare var readmore: any;



@Component({
  templateUrl: './portfolio.component.html',
  styleUrl: './crush.component.css'
})



export class PortfolioComponent    {

  constructor(private router: Router) { }


 title= 'example';

 ngOnInit(): void {








 new animinate();
 //new arabic();

 //new time();

 new top();

 new scrollFunction();

 new topFunction();


 new readmore();






};




}
