import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HethongRoutingModule } from './hethong-routing.module';
import { HethongComponent } from './hethong.component';
import { ChinhanhComponent } from './chinhanh/chinhanh.component';
import { QuyenComponent } from './quyen/quyen.component';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';
import { BranchFormComponent } from './chinhanh/branch-form/branch-form.component';
import { ListBranchComponent } from './chinhanh/list-branch/list-branch.component';

import { AntDesignModule } from 'src/app/share/ant-design.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPermissionComponent } from './quyen/list-permission/list-permission.component';
import { FormPermissionComponent } from './quyen/form-permission/form-permission.component';
import { ListAccComponent } from './taikhoan/list-acc/list-acc.component';
import { FormAccComponent } from './taikhoan/form-acc/form-acc.component';

@NgModule({
  declarations: [
    HethongComponent,
    ChinhanhComponent,
    QuyenComponent,
    TaikhoanComponent,
    BranchFormComponent,
    ListBranchComponent,
    ListPermissionComponent,
    FormPermissionComponent,
    ListAccComponent,
    FormAccComponent
  ],
  imports: [
    CommonModule,
    HethongRoutingModule,
    AntDesignModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HethongModule { }
