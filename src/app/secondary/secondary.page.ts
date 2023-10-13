import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.page.html',
  styleUrls: ['./secondary.page.scss'],
})
export class SecondaryPage implements OnInit {
  Database: SQLiteObject | any;
  soluto: any;
  solvente: any;
  fiale: any;
  codice: any;
  name: any;
  peso: any;
  min_dose: any;
  max_dose: any;
  constructor(private sqlite: SQLite, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    if(navigation){
      const state = navigation.extras.state as {
        Codice: any,
        Name: any,
        Peso: any
      };
      this.codice = state.Codice;
      this.name = state.Name;
      this.peso = state.Peso;
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
  
  diluizione(standard: boolean){
    console.log(this.codice);
    
    let sql = "SELECT * FROM farmaco WHERE Codice = '" + this.codice + "'";  // " + this.codice + "

    this.Database.executeSql(sql, [])
      .then((result:any) => {
        for (let i = 0; i < result.rows.length; i++) {
          let item = result.rows.item(i);
          this.soluto = item.Soluto;
          this.solvente = item.Solvente;
          this.fiale = item.Fiale;
          this.min_dose = item.Min_dose;
          this.max_dose = item.Max_dose;
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
            Standard: true
          }
        };
    
        if(standard){
          this.router.navigate(['/calcola-diluizione'], navigationExtras);
        }
        else{
          this.router.navigate(['/choose-diluizione'], navigationExtras);
        }

      })
      .catch((e: any) => console.log(e));
  }

  conversione(){
    const navigationExtras: NavigationExtras = {
      state: {
        Codice: this.codice,
        Name: this.name,
        Peso: this.peso
      }
    };
    this.router.navigate(['/conversione'], navigationExtras);
  }
}
