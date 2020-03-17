import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartTypeBinPageRoutingModule } from './chart-type-bin-routing.module';

import { ChartTypeBinPage } from './chart-type-bin.page';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    ChartTypeBinPageRoutingModule
  ],
  declarations: [ChartTypeBinPage]
})
export class ChartTypeBinPageModule {}
