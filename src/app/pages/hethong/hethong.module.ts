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

@NgModule({
  declarations: [
    HethongComponent,
    ChinhanhComponent,
    QuyenComponent,
    TaikhoanComponent,
    BranchFormComponent,
    ListBranchComponent
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
