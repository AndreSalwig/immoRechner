import { Component } from '@angular/core';
import { BasicFormComponent } from '../basic-form/basic-form.component';

@Component({
    standalone: true,
    selector: 'app-landing-page',
    imports: [BasicFormComponent],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
