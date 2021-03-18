import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButttonsPageRoutingModule } from './butttons-routing.module';

import { ButttonsPage } from './butttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButttonsPageRoutingModule
  ],
  declarations: [ButttonsPage]
})
export class ButttonsPageModule {}
