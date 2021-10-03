import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hethong' },
  { path: 'hethong', loadChildren: () => import('./pages/hethong/hethong.module').then(m => m.HethongModule) },
  { path: 'danhmuc', loadChildren: () => import('./pages/danhmuc/danhmuc.module').then(m => m.DanhmucModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
