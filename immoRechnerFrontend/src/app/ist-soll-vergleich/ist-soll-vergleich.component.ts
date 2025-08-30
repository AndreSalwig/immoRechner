import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ist-soll-vergleich',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ist-soll-vergleich.component.html',
  styleUrl: './ist-soll-vergleich.component.css'
})
export class IstSollVergleichComponent {
  istKaufpreis: number = 100000;
  istNebenkostenNU: number = 150;
  istKaltmiete: number = 400;
  sollKaufpreis: number = 90000;
  sollNebenkostenNU: number = 150;
  sollKaltmiete: number = 500;

  onSubmit(){

  }

}
