import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FileDownloadService } from './file-download.service';





//declare var typewriter: any;
declare var animinate: any;
//declare var arabic: any;
//declare var time: any;
declare var top: any;
declare var scrollFunction: any;
declare var topFunction: any;
declare var readmore: any;



@Component({
  templateUrl: './about.component.html',
  styleUrl: './crush.component.css'
})



export class AboutComponent    {

  constructor(private fileDownloadService: FileDownloadService,private router: Router) { }

  downloadFile() {
    const fileUrl = '/assets/images/myCV.pdf'; // Replace with your file URL

    this.fileDownloadService.downloadFile(fileUrl).subscribe((blob) => {
      // Create a URL for the file and trigger the download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'OyekanmiOyetunjiCV.pdf'; // Replace with the desired file name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }

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
