import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartRecyclePageRoutingModule } from './chart-recycle-routing.module';

import { ChartRecyclePage } from './chart-recycle.page';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    ChartRecyclePageRoutingModule
  ],
  declarations: [ChartRecyclePage]
})
export class ChartRecyclePageModule {}
