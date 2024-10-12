import { Component } from '@angular/core';
import { Router } from "@angular/router";
import Typewriter from 't-writer.js';




//declare var typewriter: any;
declare var animinate: any;
//declare var arabic: any;
//declare var time: any;
declare var top: any;
declare var scrollFunction: any;
declare var topFunction: any;
declare var captcha: any;


@Component({
  templateUrl: './contact.component.html',
  styleUrl: './crush.component.css'
})



export class ContactComponent    {

  constructor(private router: Router) { }

 title= 'example';

 ngOnInit(): void {







 //const target1 = document.querySelector('.typewriting2');
 const target2 = document.querySelector('.typewrite');

 /*const writer1 = new Typewriter(target1, {

 loop: true,
 typeSpeed: 80,
 deleteSpeed: 80,
 typeColor: 'white'

})*/

 const writer2 = new Typewriter(target2, {

 loop: true,
 typeSpeed: 100,
 deleteSpeed: 80,
 typeColor: 'color:#009999'

 })



/*writer1
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
 .start();*/

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

 //new time();

 new top();

 new scrollFunction();

 new topFunction();

 new captcha();
};




}
