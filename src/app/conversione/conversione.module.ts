import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversionePageRoutingModule } from './conversione-routing.module';

import { ConversionePage } from './conversione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversionePageRoutingModule
  ],
  declarations: [ConversionePage]
})
export class ConversionePageModule {}
