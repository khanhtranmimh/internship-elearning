import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hethong' },
  { path: 'hethong', loadChildren: () => import('./pages/hethong/hethong.module').then(m => m.HethongModule) },
  { path: 'danhmuc', loadChildren: () => import('./pages/danhmuc/danhmuc.module').then(m => m.DanhmucModule) },
  { path: 'invoice', loadChildren: () => import('./pages/invoice01/invoice01.module').then(m => m.Invoice01Module) },
];
// { path: 'invoice', loadChildren: () => import('./pages/danhmuc/danhmuc.module').then(m => m.DanhmucModule) }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
