import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversionePage } from './conversione.page';

const routes: Routes = [
  {
    path: '',
    component: ConversionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversionePageRoutingModule {}
