import { Component, OnInit } from '@angular/core';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-calcola-other-farmaco',
  templateUrl: './calcola-other-farmaco.page.html',
  styleUrls: ['./calcola-other-farmaco.page.scss'],
})
export class CalcolaOtherFarmacoPage implements OnInit {
  soluto: any = null;
  fiale: any = null;
  volume: any = null;

  codice: any;
  name: string;
  peso: any;
  sostanza: any;
  min_volume: any;
  dose_standard: string;

  openPopup: boolean = false;
  result: number = 0;
  val1: any = null;
  val2: any = null;
  units: any;
  from_unit: any = null;
  to_unit: any = null;
  valore_riferimento: any;

  constructor(private sqlite: SQLite, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    if(navigation){
      const state = navigation.extras.state as {
        Codice: string,
        Name: string,
        Peso: any,
        Sostanza: any,
        Min_volume: any,
        Dose_standard: any
      };
      this.codice = state.Codice;
      this.name = state.Name;
      this.peso = state.Peso;
      this.sostanza= state.Sostanza;
      this.min_volume= state.Min_volume;
      this.dose_standard= state.Dose_standard;
    }
    else{
      this.dose_standard = "";
      this.name = "";
    }
  }

  ngOnInit() {
    this.units = [
      {
        code: 0,
        name: 'ml/h'
      },
      {
        code: 1,
        name: 'ml/min'
      },
      {
        code: 2,
        name: 'mg/h'
      },
      {
        code: 3,
        name: 'mg/min'
      },
      {
        code: 4,
        name: 'mcg/min'
      },
      {
        code: 5,
        name: 'mcg/h'
      },
      {
        code: 6,
        name: 'mcg/kg/min'
      },
      {
        code: 7,
        name: 'mg/kg/h'
      },
      {
        code: 8,
        name: 'mcg/kg/h'
      },
      {
        code: 9,
        name: 'mg/kg/min'
      },
    ]
  }
  
  goHome(){
    this.router.navigate(['/home']);
  }

  calcola(){
    if(this.from_unit == null || this.to_unit == null || this.fiale == null || this.volume == null || this.val1 == null){
      return;
    }
    if(this.min_volume != null && this.min_volume*this.fiale > this.volume){
      this.val2 = null;
      this.openPopup = true;
      return;
    }
    let tot_quantita = this.fiale * this.sostanza;
    let concentrazione = tot_quantita/this.volume;

    switch(this.from_unit.code){
      case 0: {
        this.valore_riferimento = this.val1;
        break;
      }
      case 1: {
        this.valore_riferimento = this.val1*60;
        break;
      }
      case 2: {
        this.valore_riferimento = this.val1/concentrazione;
        break;
      }
      case 3: {
        this.valore_riferimento = this.val1*60/concentrazione;
        break;
      }
      case 4: {
        this.valore_riferimento = (this.val1*60)/(concentrazione*1000);
        break;
      }
      case 5: {
        this.valore_riferimento = this.val1/(concentrazione*1000);
        break;
      }
      case 6: {
        this.valore_riferimento = (this.val1*60*this.peso)/(concentrazione*1000);
        break;
      }
      case 7: {
        this.valore_riferimento = this.val1*this.peso/concentrazione;
        break;
      }
      case 8: {
        this.valore_riferimento = (this.val1*this.peso)/(concentrazione*1000);
        break;
      }
      case 9: {
        this.valore_riferimento = this.val1*60*this.peso/concentrazione;
        break;
      }
      default: break;
    }

    switch(this.to_unit.code){
      case 0: {
        this.result = this.valore_riferimento;
        break;
      }
      case 1: {
        this.result = this.valore_riferimento/60;
        break;
      }
      case 2: {
        this.result = this.valore_riferimento*concentrazione;
        break;
      }
      case 3: {
        this.result = this.valore_riferimento*concentrazione/60;
        break;
      }
      case 4: {
        this.result = this.valore_riferimento*concentrazione*1000/60;
        break;
      }
      case 5: {
        this.result = this.valore_riferimento*concentrazione*1000;
        break;
      }
      case 6: {
        this.result = (this.valore_riferimento*concentrazione*1000)/(60*this.peso);
        break;
      }
      case 7: {
        this.result = this.valore_riferimento*concentrazione/this.peso;
        break;
      }
      case 8: {
        this.result = this.valore_riferimento*concentrazione*1000/this.peso;
        break;
      }
      case 9: {
        this.result = this.valore_riferimento*concentrazione/(60*this.peso);
        break;
      }
      default: break;
    }

    this.result = Math.round((this.result+Number.EPSILON)*10000)/10000;
    this.val2 = this.result;
  }

  handleChange1(ev: any) {
    this.from_unit = ev.target.value;
  }
  handleChange2(ev: any) {
    this.to_unit = ev.target.value;
  }

}
