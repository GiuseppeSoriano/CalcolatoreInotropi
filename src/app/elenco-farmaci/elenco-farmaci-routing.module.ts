import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElencoFarmaciPage } from './elenco-farmaci.page';

const routes: Routes = [
  {
    path: '',
    component: ElencoFarmaciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElencoFarmaciPageRoutingModule {}
