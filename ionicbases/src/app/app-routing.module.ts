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
  {  path:  'alert',           loadChildren: () =>  import  ('./pages/alert/alert.module').then( m => m.AlertPageModule)  },
  {  path:  'action-sheet',    loadChildren: () =>  import   ('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)  },
  {  path:  'refres',          loadChildren: () =>  import   ('./pages/refres/refres.module').then( m => m.RefresPageModule)  },
  {  path:  'butttons',        loadChildren: () =>  import   ('./pages/butttons/butttons.module').then( m => m.ButttonsPageModule)  },
  {  path:  'card',            loadChildren: () =>  import   ('./pages/card/card.module').then( m => m.CardPageModule)  },
  {  path:  'check',           loadChildren: () =>  import   ('./pages/check/check.module').then( m => m.CheckPageModule)  },
  {  path:  'datepiker',       loadChildren: () =>  import   ('./pages/datepiker/datepiker.module').then( m => m.DatepikerPageModule)  },
  {  path:  'fab',             loadChildren: () =>  import   ('./pages/fab/fab.module').then( m => m.FabPageModule)  },
  {  path:  'grid',            loadChildren: () =>  import   ('./pages/grid/grid.module').then( m => m.GridPageModule)  },
  {  path:  'infinite-scroll', loadChildren: () =>  import   ('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)  },
  {  path:  'input',           loadChildren: () =>  import   ('./pages/input/input.module').then( m => m.InputPageModule)  },
  {  path:  'list',            loadChildren: () =>  import   ('./pages/list/list.module').then( m => m.ListPageModule)  },
  {  path:  'comentario',      loadChildren: () =>  import   ('./pages/comentario/comentario.module').then( m => m.ComentarioPageModule)  },
  {  path:  'ion-reorder',     loadChildren: () =>  import   ('./pages/ion-reorder/ion-reorder.module').then( m => m.IonReorderPageModule)  },
  {  path:  'menu',            loadChildren: () =>  import   ('./pages/menu/menu.module').then( m => m.MenuPageModule)},
  {  path:  'modal',           loadChildren: () =>  import   ('./pages/modal/modal.module').then( m => m.ModalPageModule)},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
