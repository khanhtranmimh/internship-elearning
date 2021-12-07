import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhmucRoutingModule } from './danhmuc-routing.module';
import { DanhmucComponent } from './danhmuc.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { ListCustomerComponent } from './khachhang/list-customer/list-customer.component';
import { CustomerFormComponent } from './khachhang/customer-form/customer-form.component';

import { AntDesignModule } from 'src/app/share/ant-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DanhmucComponent,
    KhachhangComponent,
    ListCustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    DanhmucRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DanhmucModule { }
