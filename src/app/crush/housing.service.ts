import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = "/assets/images/";

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Company Portfolio Website',
      frontend: 'Angular',
      backend: 'Nodejs',
      photo: `${this.baseUrl}/companyPortfolio.png`,
      link: 'https://www.infotechcrush.com/',
      //availableUnits: 4,
      //wifi: true,
      //laundry: true
    },
    {
      id: 1,
      name: 'Personal Portfolio Website',
      frontend: 'Javascript',
      backend: 'Nodejs',
      photo: `${this.baseUrl}/portfolio.png`,
      link: 'https://jelil-info.infotechcrush.com/',
      //availableUnits: 0,
      //wifi: false,
      //laundry: true
    },
    {
      id: 2,
      name: 'eCommerce Website',
      frontend: 'React',
      backend: 'Nodejs',
      photo: `${this.baseUrl}/onlineMarket.png`,
      link: 'https://suok.infotechcrush.com/',

      //availableUnits: 1,
      //wifi: false,
      //laundry: false
    },
    {
      id: 3,
      name: 'Social Media Website',
      frontend: 'React',
      backend: 'Nodejs',
      photo: `${this.baseUrl}/socialMedia.png`,
      link: 'https://jelil-info-mern-social.onrender.com/',
      //availableUnits: 1,
      //wifi: true,
      //laundry: false
    },
    {
      id: 4,
      name: 'Expense Tracker Application',
      frontend: 'React',
      backend: 'Nodejs',
      photo: `${this.baseUrl}/expenseTracker.png`,
      link: 'https://dull-pear-bee-wrap.cyclic.app/',
      //availableUnits: 1,
      //wifi: true,
      //laundry: false
    },
    {
      id: 5,
      name: 'SportsStore Application',
      frontend: 'Angular',
      backend: 'Nodejs',
      photo: `${this.baseUrl}/SportsStore.png`,
      link: 'https://jelilinfoangular-oyekanmijelili.b4a.run/store',
      //availableUnits: 2,
      //wifi: true,
      //laundry: true
    },
    {
      id: 6,
      name: 'Resume',
      frontend: 'HTML/CSS',
      backend: 'Nil',
      photo: `${this.baseUrl}/SportsStore.png`,
      link: 'https://jelil-info.infotechcrush.com/myResume',
      //availableUnits: 5,
      //wifi: true,
      //laundry: true
    },
    {
      id: 7,
      name: 'Pomodoro',
      frontend: 'Vuejs',
      backend: 'Nodejs',
      photo: `${this.baseUrl}/pomodoro.jpg`,
      link: 'https://stellar-florentine-5b3c4a.netlify.app/',
      //availableUnits: 2,
      //wifi: true,
      //laundry: true
    },
    {
      id: 8,
      name: 'Online Classroom',
      frontend: 'React',
      backend: 'Nodejs',
      photo: `${this.baseUrl}/onlineClassRoom.png`,
      link: 'https://stellar-florentine-5b3c4a.netlify.app/',
      //availableUnits: 10,
      //wifi: false,
      //laundry: false
    },
    {
      id: 9,
      name: 'Mediastream Application',
      frontend: 'React',
      backend: 'Nodejs',
      photo: `${this.baseUrl}/Mediastream.png`,
      link: 'https://stellar-florentine-5b3c4a.netlify.app/',
      //availableUnits: 6,
      //wifi: true,
      //laundry: true
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
