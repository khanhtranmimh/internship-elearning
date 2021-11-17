import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchFormComponent } from './chinhanh/branch-form/branch-form.component';
import { ChinhanhComponent } from './chinhanh/chinhanh.component';
import { HethongComponent } from './hethong.component';
import { FormPermissionComponent } from './quyen/form-permission/form-permission.component';
import { QuyenComponent } from './quyen/quyen.component';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';

const routes: Routes = [
  { path: '', component: HethongComponent },
  { path: 'chinhanh', component: ChinhanhComponent}, 
  { path: 'quyen', component: QuyenComponent },
  { path: 'quyen/form-permission/:id', component: FormPermissionComponent},
  { path: 'chinhanh/branch-form/:id', component: BranchFormComponent },
  { path: 'taikhoan', component: TaikhoanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HethongRoutingModule { }
