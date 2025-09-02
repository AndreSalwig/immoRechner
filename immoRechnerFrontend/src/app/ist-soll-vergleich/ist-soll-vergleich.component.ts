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
  istKreditsumme: number = 100000;
  istEigenkapital: number = 15000;
  sollKreditsumme: number = 90000;
  sollEigenkapital: number = 13500;
  zinssatz: number = 3.5;
  tilgung: number = 1.5;

  istEinnahmen: number = this.istKaltmiete;
  istAusgaben: number = Math.round(((this.istKaufpreis*1.12-this.istEigenkapital)/100*(this.zinssatz+this.tilgung))/12*100)/100;
  istRendite: number = Math.round(this.istKaltmiete*12/this.istKaufpreis*100*100)/100;
  sollEinnahmen: number = this.sollKaltmiete;
  sollAusgaben: number = Math.round(((this.sollKaufpreis*1.12-this.sollEigenkapital)/100*(this.zinssatz+this.tilgung))/12*100)/100;
  sollRendite: number = Math.round(this.sollKaltmiete*12/this.sollKaufpreis*100*100)/100;

  onSubmit(){
    this.istAusgaben = Math.round(((this.istKaufpreis*1.12-this.istEigenkapital)/100*(this.zinssatz+this.tilgung))/12*100)/100;
    this.istRendite = Math.round(this.istKaltmiete*12/this.istKaufpreis*100*100)/100;
    this.sollAusgaben = Math.round(((this.sollKaufpreis*1.12-this.istEigenkapital)/100*(this.zinssatz+this.tilgung))/12*100)/100;
    this.sollRendite = Math.round(this.sollKaltmiete*12/this.sollKaufpreis*100*100)/100;
  }

}
