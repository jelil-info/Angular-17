import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CrushComponent } from "./crush/crush.component";
import { ContactComponent } from "./crush/contact.component";
import { NavComponent } from "./crush/nav.component";
//import { CrushModule } from "./crush/crush.module";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './crush/contact-form.component';
import { ArtifactListComponent } from './artifact-list/artifact-list.component';
import { HttpClient } from '@angular/common/http';
import { TopComponent } from './top/top.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
//import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
//import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
//import {RecaptchaService} from "./recaptcha.service";
import {RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "./crush/footer.component";
import {AboutComponent} from "./crush/about.component";
import {PortfolioComponent} from "./crush/portfolio.component";
import { GoogleMapComponent } from "./crush/google-map.component";
import { HousingLocationComponent } from './crush/housing-location.component';
import { DetailsComponent } from './crush/details.component';
import { SearchComponent } from './crush/search.component';




@NgModule({
    imports: [BrowserModule, StoreModule,ReactiveFormsModule,CommonModule,RouterModule,HttpClientModule,FormsModule,RecaptchaModule,
              RecaptchaFormsModule, RouterOutlet, RouterLink, RouterLinkActive,

        RouterModule.forRoot([
            {
                path: "home", component: CrushComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "about", component: AboutComponent,

             },
             {
                path: "portfolio", component: PortfolioComponent,

             },
             {
                path: "contact", component: ContactComponent,

             },
             { path: "search", component: SearchComponent },

             { path: 'details/:id', component: DetailsComponent }, // Replace DetailsComponent with your actual component


            {
                path: "store", component: StoreComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "cart", component: CartDetailComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "checkout", component: CheckoutComponent,
                canActivate: [StoreFirstGuard]
            },

            {
                    path: 'contact-form', component: ContactFormComponent,
                    
             },
             {
                     path: 'map', component: GoogleMapComponent,
                     
              },
           {path: 'artifact-list', component: ArtifactListComponent},
           {path: 'top', component: TopComponent},



            {
                    path: "admin",
                    loadChildren: () => import("./admin/admin.module")
                        .then(m => m.AdminModule),
                    canActivate: [StoreFirstGuard]
             },
                { path: "**", redirectTo: "/home" },

            ]),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
        providers: [StoreFirstGuard],
        declarations: [AppComponent,CrushComponent,ContactComponent,NavComponent,ContactFormComponent,
                       TopComponent,ArtifactListComponent,FooterComponent,AboutComponent,PortfolioComponent,
                       HousingLocationComponent,GoogleMapComponent,DetailsComponent,SearchComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }
