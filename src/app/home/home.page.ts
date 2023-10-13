import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  viewProviders: []
})
export class HomePage {
  peso: any;
  activities: any;
  objectDB: SQLiteObject | null;
  openPopup: boolean = false;
  openDisclaimer: boolean = true;
  hideBanner: boolean = false;


  constructor(private sqlite: SQLite, private router:Router, private httpClient: HttpClient, private sqlitePorter: SQLitePorter) {
    this.objectDB = null;
    this.httpClient.get('assets/db/myapp.sql', {responseType: 'text'})
    .subscribe(data => { 
      this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
        this.objectDB = db;
        this.sqlitePorter.importSqlToDb(db, data).then(f => this.do_nothing());
      }).catch(e => {
        console.log(e)});
    });
  }

  do_nothing(){}
  
  ngOnInit() {
    this.activities = [
      {
        code: 'F001',
        name: 'DOPAMINA'
      },
      {
        code: 'F002',
        name: 'DOBUTAMINA'
      },
      {
        code: 'F003',
        name: 'ADRENALINA'
      },
      {
        code: 'F004',
        name: 'NORADRENALINA'
      }
    ]
  }

  go_secondary(e: any, item: any){
    if(isNaN(this.peso) || this.peso <= 0){
      console.log(this.peso);
      this.openPopup=true;
      return;
    }
    const navigationExtras: NavigationExtras = {
      state: {
        Codice: item.code,
        Name: item.name,
        Peso: this.peso
      }
    };
    this.router.navigate(['/secondary'], navigationExtras);
  }

  go_elenco_farmaci(){
    if(isNaN(this.peso) || this.peso <= 0){
      console.log(this.peso);
      this.openPopup=true;
      return;
    }
    const navigationExtras: NavigationExtras = {
      state: {
        Peso: this.peso
      }
    };
    this.router.navigate(['/elenco-farmaci'], navigationExtras);
  }

  onFocus() {
    this.hideBanner = true;
  }

  onBlur() {
    this.hideBanner = false;
  }

}
