import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElencoFarmaciPageRoutingModule } from './elenco-farmaci-routing.module';

import { ElencoFarmaciPage } from './elenco-farmaci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElencoFarmaciPageRoutingModule
  ],
  declarations: [ElencoFarmaciPage]
})
export class ElencoFarmaciPageModule {}
