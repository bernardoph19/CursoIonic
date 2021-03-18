import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresPageRoutingModule } from './refres-routing.module';

import { RefresPage } from './refres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefresPageRoutingModule
  ],
  declarations: [RefresPage]
})
export class RefresPageModule {}
