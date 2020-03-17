import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartTimePage } from './chart-time.page';

const routes: Routes = [
  {
    path: '',
    component: ChartTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartTimePageRoutingModule {}
