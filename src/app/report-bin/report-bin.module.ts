import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportBinPageRoutingModule } from './report-bin-routing.module';

import { ReportBinPage } from './report-bin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportBinPageRoutingModule
  ],
  declarations: [ReportBinPage]
})
export class ReportBinPageModule {}
