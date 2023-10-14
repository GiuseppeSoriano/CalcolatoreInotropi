import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

import { timer } from 'rxjs';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showSplash = true;

  constructor(private platform: Platform, private splashScreen: SplashScreen, private Servizio: DatabaseService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then( () => {
      this.splashScreen.hide();

      timer(4000).subscribe(() => this.showSplash = false)
    });

  }

  ngOnInit(): void {
    console.log(this.Servizio.test);
    this.platform.ready().then(() => {
      this.Servizio.initializeDatabase();
    });
  }
}
