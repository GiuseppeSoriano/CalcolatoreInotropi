import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcolaDiluizionePageRoutingModule } from './calcola-diluizione-routing.module';

import { CalcolaDiluizionePage } from './calcola-diluizione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcolaDiluizionePageRoutingModule
  ],
  declarations: [CalcolaDiluizionePage]
})
export class CalcolaDiluizionePageModule {}
