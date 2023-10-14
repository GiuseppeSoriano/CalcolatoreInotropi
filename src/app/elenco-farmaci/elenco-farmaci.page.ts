import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-elenco-farmaci',
  templateUrl: './elenco-farmaci.page.html',
  styleUrls: ['./elenco-farmaci.page.scss'],
})
export class ElencoFarmaciPage implements OnInit {
  peso: any;
  Farmaci: any;
  
  constructor(private router:Router, private DatabaseService: DatabaseService) { 
    const navigation = this.router.getCurrentNavigation();
    if(navigation){
      const state = navigation.extras.state as {
        Peso: any
      };
      this.peso = state.Peso;
    }
    this.Farmaci = [
      {
        code: '',
        name: ''
      }
    ];
  }

  ngOnInit(){
    this.Farmaci.pop();
    
    if(this.DatabaseService.database != null){
      let sql = "SELECT * FROM otherfarmaco";
      console.log(sql);
      this.DatabaseService.database.executeSql(sql, [])
        .then((result: any) => {
          for (let i = 0; i < result.rows.length; i++) {
            let item = result.rows.item(i);
            this.Farmaci.push(item);
          }
        })
        .catch((e:any) => console.log(e));
    }
    else{
      console.log("database is null");
    }
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
