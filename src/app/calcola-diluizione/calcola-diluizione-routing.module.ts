import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcolaDiluizionePage } from './calcola-diluizione.page';

const routes: Routes = [
  {
    path: '',
    component: CalcolaDiluizionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcolaDiluizionePageRoutingModule {}
