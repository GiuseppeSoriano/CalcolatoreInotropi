import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcolaOtherFarmacoPageRoutingModule } from './calcola-other-farmaco-routing.module';

import { CalcolaOtherFarmacoPage } from './calcola-other-farmaco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcolaOtherFarmacoPageRoutingModule
  ],
  declarations: [CalcolaOtherFarmacoPage]
})
export class CalcolaOtherFarmacoPageModule {}
