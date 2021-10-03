import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhmucRoutingModule } from './danhmuc-routing.module';
import { DanhmucComponent } from './danhmuc.component';
import { KhachhangComponent } from './khachhang/khachhang.component';


@NgModule({
  declarations: [
    DanhmucComponent,
    KhachhangComponent
  ],
  imports: [
    CommonModule,
    DanhmucRoutingModule
  ]
})
export class DanhmucModule { }
