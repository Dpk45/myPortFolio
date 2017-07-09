import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../app/component/home/home.component";
import {AboutComponent}  from  '../app/component/about/about.component';
import {SkillsComponent}  from  '../app/component/skills/skills.component';
import {EducationComponent}  from  '../app/component/education/education.component'
import {ContactComponent}  from  '../app/component/contact/contact.component'

const appRoutes: Routes=[
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"about",
        component:AboutComponent
    }
    ,{
        path:"skills",
        component:SkillsComponent
    },
    {
        path:"education",
        component:EducationComponent
    },
    {
        path:"contact",
        component:ContactComponent
    }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);