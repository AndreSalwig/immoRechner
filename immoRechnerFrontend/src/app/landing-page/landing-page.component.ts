import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BasicFormComponent } from '../basic-form/basic-form.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, BasicFormComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
