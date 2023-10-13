import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-choose-diluizione',
  templateUrl: './choose-diluizione.page.html',
  styleUrls: ['./choose-diluizione.page.scss'],
})
export class ChooseDiluizionePage implements OnInit {
  Database: SQLiteObject | any;
  soluto: any;
  solvente: any;
  fiale: any;
  codice: any;
  name: any;
  peso: any;
  min_dose: any;
  max_dose: any;
  openPopup: boolean = false;
  constructor(private sqlite: SQLite, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    if(navigation){
      const state = navigation.extras.state as {
        Codice: string,
        Name: string,
        Peso: any,
        Soluto: any,
        Solvente: any,
        Fiale: any,
        Min_dose: number,
        Max_dose: number,
        Standard: boolean
      };
      this.codice = state.Codice;
      this.name = state.Name;
      this.peso = state.Peso;
      this.soluto = null;
      this.solvente = null;
      this.fiale = 0;
      this.min_dose = state.Min_dose;
      this.max_dose = state.Max_dose;
    }
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
    })
  }

  ngOnInit() {
  }
  
  goHome(){
    this.router.navigate(['/home']);
  }

  calcolaDiluizione(){
    if(this.soluto == null || this.solvente == null){
      this.openPopup = true;
      return;
    }
    const navigationExtras: NavigationExtras = {
      state: {
        Codice: this.codice,
        Name: this.name,
        Peso: this.peso,
        Soluto: this.soluto,
        Solvente: this.solvente,
        Fiale: this.fiale,
        Min_dose: this.min_dose,
        Max_dose: this.max_dose,
        Standard: false
      }
    };
    this.router.navigate(['/calcola-diluizione'], navigationExtras);
  }
}
