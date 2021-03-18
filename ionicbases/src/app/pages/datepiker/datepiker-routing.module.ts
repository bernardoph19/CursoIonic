import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatepikerPage } from './datepiker.page';

const routes: Routes = [
  {
    path: '',
    component: DatepikerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatepikerPageRoutingModule {}
