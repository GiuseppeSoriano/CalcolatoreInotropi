import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-calcola-diluizione',
  templateUrl: './calcola-diluizione.page.html',
  styleUrls: ['./calcola-diluizione.page.scss'],
})
export class CalcolaDiluizionePage implements OnInit {

  Database: SQLiteObject | any;
  soluto: number = 0;
  solvente: number = 0;
  fiale: number = 0;
  min_dose: number = 0;
  max_dose: number = 0;
  codice: any;
  name: any;
  peso: any;
  dose: any = null;
  openPopup: boolean = false;
  openWarningPopup: boolean = false;
  result: number = 0;
  type_diluizione: string;
  mod_diluizione: string;
  dose_terapeutica: string;

  constructor(private sqlite: SQLite, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    if(navigation){
      const state = navigation.extras.state as {
        Codice: string,
        Name: string,
        Peso: number,
        Soluto: number,
        Solvente: number,
        Fiale: any,
        Min_dose: number,
        Max_dose: number,
        Standard: boolean
      };
      this.codice = state.Codice;
      this.name = state.Name;
      this.peso = state.Peso;
      this.soluto = state.Soluto;
      this.solvente = state.Solvente;
      this.fiale = state.Fiale;
      this.min_dose = state.Min_dose;
      this.max_dose = state.Max_dose;
      if(state.Standard)
        this.type_diluizione = "Diluizione STANDARD";
      else
        this.type_diluizione = "Diluizione PERSONALIZZATA";
      if(this.fiale != 0)
        this.mod_diluizione = this.soluto + "mg (" + this.fiale + " fiale) in " + this.solvente + "ml di fisiologica";
      else
        this.mod_diluizione = this.soluto + "mg in " + this.solvente + "ml di fisiologica";
      this.dose_terapeutica = "Dose terapeutica: " + this.min_dose + "-" + this.max_dose + " mcg/Kg/min";
    }
    else{
      this.type_diluizione = "";
      this.mod_diluizione = "";
      this.dose_terapeutica = "";
      this.soluto = 0;
      this.solvente = 0;
      this.fiale = 0;
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

  converti(force: boolean){
    if(this.dose == null)
      return;

    if(!force && (this.dose > this.max_dose || this.dose < this.min_dose)){
      this.openWarningPopup = true;
    }
    else{
      this.openWarningPopup = false;
      this.result = Math.round(((this.dose*this.peso*60*this.solvente)/(1000*this.soluto)+Number.EPSILON)*1000)/1000;
      this.openPopup = true;
    }
  }

}
