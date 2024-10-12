import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CrushComponent } from "./crush.component";
import { ContactComponent } from "./contact.component";
import { NavComponent } from "./nav.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";




@NgModule({
    //imports: [CommonModule, FormsModule, RouterModule],
    declarations: [CrushComponent, NavComponent],

})
export class CrushModule { }
