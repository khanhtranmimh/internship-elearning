import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dasboard' },
  { path: '', loadChildren: () => import('./pages/dasboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
