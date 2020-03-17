import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportBinPage } from './report-bin.page';

const routes: Routes = [
  {
    path: '',
    component: ReportBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportBinPageRoutingModule {}
