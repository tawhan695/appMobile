import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartTypeBinPage } from './chart-type-bin.page';

const routes: Routes = [
  {
    path: '',
    component: ChartTypeBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartTypeBinPageRoutingModule {}
