import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartTimePageRoutingModule } from './chart-time-routing.module';

import { ChartTimePage } from './chart-time.page';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    ChartTimePageRoutingModule
  ],
  declarations: [ChartTimePage]
})
export class ChartTimePageModule {}
