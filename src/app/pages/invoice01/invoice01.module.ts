import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntDesignModule } from 'src/app/share/ant-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Invoice01RoutingModule } from './invoice01-routing.module';
import { Invoice01Component } from './invoice01.component';
import { InvoiceGTKTComponent } from './invoice-gtkt/invoice-gtkt.component';
import { ListInvoiceGTKTComponent } from './invoice-gtkt/list-invoice-gtkt/list-invoice-gtkt.component';
import { InvoiceGTKTFormComponent } from './invoice-gtkt/invoice-gtktform/invoice-gtktform.component';


@NgModule({
  declarations: [
    Invoice01Component,
    InvoiceGTKTComponent,
    ListInvoiceGTKTComponent,
    InvoiceGTKTFormComponent
  ],
  imports: [
    CommonModule,
    Invoice01RoutingModule,
    AntDesignModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Invoice01Module { }
