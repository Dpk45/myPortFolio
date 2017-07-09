import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from "./app.route"

import { AppComponent } from './app.component';
import {HomeComponent}  from  '../app/component/home/home.component';
import {AboutComponent}  from  '../app/component/about/about.component';
import {SkillsComponent}  from  '../app/component/skills/skills.component';
import {EducationComponent}  from  '../app/component/education/education.component';
import {ContactComponent}  from  '../app/component/contact/contact.component';
import {NavbarComponent}  from  '../app/component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
