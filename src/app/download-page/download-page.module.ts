import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadPagePageRoutingModule } from './download-page-routing.module';

import { DownloadPagePage } from './download-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadPagePageRoutingModule
  ],
  declarations: [DownloadPagePage]
})
export class DownloadPagePageModule {}
