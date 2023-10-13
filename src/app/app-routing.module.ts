import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'secondary',
    loadChildren: () => import('./secondary/secondary.module').then( m => m.SecondaryPageModule)
  },
  {
    path: 'choose-diluizione',
    loadChildren: () => import('./choose-diluizione/choose-diluizione.module').then( m => m.ChooseDiluizionePageModule)
  },
  {
    path: 'calcola-diluizione',
    loadChildren: () => import('./calcola-diluizione/calcola-diluizione.module').then( m => m.CalcolaDiluizionePageModule)
  },
  {
    path: 'conversione',
    loadChildren: () => import('./conversione/conversione.module').then( m => m.ConversionePageModule)
  },
  {
    path: 'elenco-farmaci',
    loadChildren: () => import('./elenco-farmaci/elenco-farmaci.module').then( m => m.ElencoFarmaciPageModule)
  },
  {
    path: 'calcola-other-farmaco',
    loadChildren: () => import('./calcola-other-farmaco/calcola-other-farmaco.module').then( m => m.CalcolaOtherFarmacoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
