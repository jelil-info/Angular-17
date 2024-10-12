import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';


@Component({
  selector: 'app-google-map',
  //standalone: true,
  //imports: [],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent implements OnInit {
       @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
       map!: google.maps.Map;

       ngOnInit(): void {
         this.loadMap();
       }

       loadMap() {
         const mapOptions = {
           center: new google.maps.LatLng(37.7749, -122.4194), // Coordinates for San Francisco
           zoom: 12,
           mapTypeId: google.maps.MapTypeId.ROADMAP
         };

         this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
       }
     }
