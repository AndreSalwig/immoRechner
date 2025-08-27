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
  mietrendite: number = this.kaltmiete*12*100/this.kaufpreis;
  ueberschuss: number = this.kaltmiete-this.kaufpreis/100*5/12-this.nebenkostenNU
  empfehlung: String = "Diese Immobilie ist für diesen Preis nicht zu Empfehlen";


  onSubmit() {
    this.mietrendite = this.kaltmiete*12*100/this.kaufpreis;
    this.ueberschuss = this.kaltmiete-this.kaufpreis/100*5/12-this.nebenkostenNU;
    if(this.mietrendite >= 6 || this.ueberschuss >= 0){
      this.empfehlung = "Ein genauer Blick lohnt sich"
    }
    else if(this.mietrendite >= 6 && this.ueberschuss >= 0){
      this.empfehlung = "Diese Immobilie sollte sich auf jeden Fall genauer angeschaut werden."
    }
    else{
      this.empfehlung = "Diese Immobilie ist für diesen Preis nicht zu Empfehlen"
    }
    
  }

}
