import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseDiluizionePage } from './choose-diluizione.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseDiluizionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseDiluizionePageRoutingModule {}
