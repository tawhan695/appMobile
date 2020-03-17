import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadPagePage } from './download-page.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadPagePageRoutingModule {}
