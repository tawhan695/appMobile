import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'members',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'modals',
    loadChildren: () => import('./modals/modals.module').then( m => m.ModalsPageModule)
  },
  {
    path: 'report-bin',
    loadChildren: () => import('./report-bin/report-bin.module').then( m => m.ReportBinPageModule)
  },
  {
    path: 'download-page',
    loadChildren: () => import('./download-page/download-page.module').then( m => m.DownloadPagePageModule)
  },
  {
    path: 'notify',
    loadChildren: () => import('./notify/notify.module').then( m => m.NotifyPageModule)
  },
  {
    path: 'list-notify',
    loadChildren: () => import('./list-notify/list-notify.module').then( m => m.ListNotifyPageModule)
  },
  {
    path: 'chart-type-bin',
    loadChildren: () => import('./chart-type-bin/chart-type-bin.module').then( m => m.ChartTypeBinPageModule)
  },
  {
    path: 'chart-recycle',
    loadChildren: () => import('./chart-recycle/chart-recycle.module').then( m => m.ChartRecyclePageModule)
  },
  {
    path: 'chart-time',
    loadChildren: () => import('./chart-time/chart-time.module').then( m => m.ChartTimePageModule)
  }
  // ,
  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  // }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
