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
  {  path: 'action-sheet',   loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)  },
  {  path: 'alert',   loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)  },
  {  path: 'refres',   loadChildren: () => import('./pages/refres/refres.module').then( m => m.RefresPageModule)  },
  {  path: 'butttons',    loadChildren: () => import('./pages/butttons/butttons.module').then( m => m.ButttonsPageModule)  },
  {  path: 'card',   loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)  },
  {  path: 'check',    loadChildren: () => import('./pages/check/check.module').then( m => m.CheckPageModule)  },
  {   path: 'datepiker',    loadChildren: () => import('./pages/datepiker/datepiker.module').then( m => m.DatepikerPageModule)  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }