import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-elenco-farmaci',
  templateUrl: './elenco-farmaci.page.html',
  styleUrls: ['./elenco-farmaci.page.scss'],
})
export class ElencoFarmaciPage implements OnInit {

  Database: SQLiteObject | any;
  peso: any;
  Farmaci: any;
  
  constructor(private sqlite: SQLite, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    if(navigation){
      const state = navigation.extras.state as {
        Peso: any
      };
      this.peso = state.Peso;
    }
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
      this.fill_farmaci();
    })
    this.Farmaci = [
      {
        code: '',
        name: ''
      }
    ];
  }

  fill_farmaci(){
    this.Farmaci.pop();
    let sql = "SELECT * FROM otherfarmaco";

    this.Database.executeSql(sql, [])
      .then((result: any) => {
        for (let i = 0; i < result.rows.length; i++) {
          let item = result.rows.item(i);
          this.Farmaci.push(item);
        }
      })
      .catch((e:any) => console.log(e));
  }

  ngOnInit() {
    
  }
  
  goHome(){
    this.router.navigate(['/home']);
  }

  goNext(e: any, item: any){
    const navigationExtras: NavigationExtras = {
      state: {
        Codice: item.Codice,
        Name: item.Name,
        Peso: this.peso,
        Sostanza: item.Sostanza,
        Min_volume: item.Min_volume,
        Dose_standard: item.Dose_standard
      }
    }
    this.router.navigate(['/calcola-other-farmaco'], navigationExtras);
  }
}
