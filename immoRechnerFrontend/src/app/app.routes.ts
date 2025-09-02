import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImmobilienFormComponent } from './immobilien-form/immobilien-form.component';
import { IstSollVergleichComponent } from './ist-soll-vergleich/ist-soll-vergleich.component';

export const routes: Routes = [
    {
        path:"",
        component: LandingPageComponent
    },
    {
        path:"detailseite",
        component:ImmobilienFormComponent 
    },
    {
        path:"istSollVergleich",
        component:IstSollVergleichComponent 
    }
];
