import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartRecyclePage } from './chart-recycle.page';

const routes: Routes = [
  {
    path: '',
    component: ChartRecyclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartRecyclePageRoutingModule {}
