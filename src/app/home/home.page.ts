import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  viewProviders: []
})
export class HomePage {
  peso: any;
  activities: any;
  openPopup: boolean = false;
  openDisclaimer: boolean = true;
  hideBanner: boolean = false;

  constructor(private router:Router) {

  }
  
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
