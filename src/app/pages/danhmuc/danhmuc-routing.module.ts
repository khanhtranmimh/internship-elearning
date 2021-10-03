import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanhmucComponent } from './danhmuc.component';
import { KhachhangComponent } from './khachhang/khachhang.component';

const routes: Routes = [
  { path: '', component: DanhmucComponent },
  { path: 'khachhang', component: KhachhangComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhmucRoutingModule { }
