import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseDiluizionePageRoutingModule } from './choose-diluizione-routing.module';

import { ChooseDiluizionePage } from './choose-diluizione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseDiluizionePageRoutingModule
  ],
  declarations: [ChooseDiluizionePage]
})
export class ChooseDiluizionePageModule {}
