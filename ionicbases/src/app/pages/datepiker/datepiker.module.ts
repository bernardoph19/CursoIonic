import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatepikerPageRoutingModule } from './datepiker-routing.module';

import { DatepikerPage } from './datepiker.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatepikerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatepikerPage]
})
export class DatepikerPageModule {}
