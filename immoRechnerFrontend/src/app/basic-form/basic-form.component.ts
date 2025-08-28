import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css'
})
export class BasicFormComponent {
  kaufpreis: number = 100000;
  wohnflaeche: number = 50;
  nebenkostenU: number = 200;
  nebenkostenNU: number = 150;
  kaltmiete: number = 400;
  mietrendite: number = Math.round((this.kaltmiete*12*100/this.kaufpreis)*100)/100;
  ueberschuss: number = Math.round((this.kaltmiete-this.kaufpreis/100*5/12-this.nebenkostenNU)*100)/100;
  empfehlung: String = "Diese Immobilie ist für diesen Preis nicht zu Empfehlen";


  onSubmit() {
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
