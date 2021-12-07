import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanhmucComponent } from './danhmuc.component';
import { CustomerFormComponent } from './khachhang/customer-form/customer-form.component';
import { KhachhangComponent } from './khachhang/khachhang.component';

const routes: Routes = [
  { path: '', component: DanhmucComponent },
  { path: 'khachhang/customer-form/:id', component:  CustomerFormComponent},
  { path: 'khachhang', component: KhachhangComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhmucRoutingModule { }
