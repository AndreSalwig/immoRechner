import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-immobilien-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './immobilien-form.component.html',
  styleUrl: './immobilien-form.component.css'
})
export class ImmobilienFormComponent {
  selectedImmoArt: string = "wohnung";
  kaufpreis: number = 100000;
  kaufnebenkosten: number = 15000;
  eigenkapital: number = 15000;
  kreditbetrag: number = 100000;
  zinssatz: number = 3.5;
  tilgung: number = 1.5;
  wohnflaeche: number = 50;
  nebenkostenU: number = 200;
  nebenkostenNU: number = 150;
  kaltmiete: number = 400;
  ruecklagen: number = 1000
  gebaudeanteil: number = 80;
  grundstuecksanteil: number = 100 - this.gebaudeanteil;
  isErbpacht: boolean = false;
  eingangsbereich: string = "";
  haustuer: string = "" ;
  fassade: string = "" ;
  vorgarten: string = "" ;
  treppenhaus: string = "" ;
  keller: string = "" ;
  alterDerHeizung: number = 15;
  heizungErneuern: boolean = false;
  dachAlter: number = 15;
  dachErneuern: boolean = false;
  garageVorhanden: boolean = false;
  stellplatzVorhanden: boolean = false;
  mietrendite: number = Math.round((this.kaltmiete*12*100/this.kaufpreis)*100)/100;
  ueberschuss: number = Math.round((this.kaltmiete-this.kaufpreis/100*5/12-this.nebenkostenNU)*100)/100;
  empfehlung: String = "Diese Immobilie ist für diesen Preis nicht zu Empfehlen";


  onSubmit() {

     if(this.selectedImmoArt === "wohnung"){

    }

    this.mietrendite = Math.round((this.kaltmiete*12*100/this.kaufpreis)*100)/100;
    this.ueberschuss = Math.round((this.kaltmiete-this.kaufpreis/100*5/12-this.nebenkostenNU)*100)/100;
    if(this.mietrendite >= 6 && this.ueberschuss >= 0){
      this.empfehlung = "Diese Immobilie sollte sich auf jeden Fall genauer angeschaut werden."
    } 
    else if(this.mietrendite >= 6 || this.ueberschuss >= 0){
      this.empfehlung = "Ein genauer Blick lohnt sich"
    } 
    else {
      this.empfehlung = "Diese Immobilie ist für diesen Preis nicht zu empfehlen"
    }
    
  }

}
