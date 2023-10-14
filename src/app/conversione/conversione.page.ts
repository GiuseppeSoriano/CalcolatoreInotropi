import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-conversione',
  templateUrl: './conversione.page.html',
  styleUrls: ['./conversione.page.scss'],
})
export class ConversionePage implements OnInit {
  soluto: any = null;
  solvente: any = null;
  velocita: any = null;
  codice: any;
  name: any;
  peso: any;
  openPopup: boolean = false;
  result: number = 0;

  constructor(private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    if(navigation){
      const state = navigation.extras.state as {
        Codice: string,
        Name: string,
        Peso: any
      };
      this.codice = state.Codice;
      this.name = state.Name;
      this.peso = state.Peso;
    }
  }

  ngOnInit() {
  }
  
  goHome(){
    this.router.navigate(['/home']);
  }

  converti(){
    if(this.soluto == null || this.solvente == null || this.velocita == null)
      return;

    this.result = Math.round((((this.velocita*(this.soluto/this.solvente)/60)/this.peso)*1000+Number.EPSILON)*1000)/1000;

    this.openPopup = true;
    console.log(this.result);
  }
}
