import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefresPage } from './refres.page';

const routes: Routes = [
  {
    path: '',
    component: RefresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefresPageRoutingModule {}
