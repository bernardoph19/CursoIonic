import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButttonsPage } from './butttons.page';

const routes: Routes = [
  {
    path: '',
    component: ButttonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButttonsPageRoutingModule {}
