import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcolaOtherFarmacoPage } from './calcola-other-farmaco.page';

const routes: Routes = [
  {
    path: '',
    component: CalcolaOtherFarmacoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcolaOtherFarmacoPageRoutingModule {}
