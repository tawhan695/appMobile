import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListNotifyPageRoutingModule } from './list-notify-routing.module';

import { ListNotifyPage } from './list-notify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListNotifyPageRoutingModule
  ],
  declarations: [ListNotifyPage]
})
export class ListNotifyPageModule {}
