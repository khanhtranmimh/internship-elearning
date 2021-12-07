import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceGTKTComponent } from './invoice-gtkt/invoice-gtkt.component';
import { InvoiceGTKTFormComponent } from './invoice-gtkt/invoice-gtktform/invoice-gtktform.component';
import { Invoice01Component } from './invoice01.component';

const routes: Routes = [
  { path: '', component: Invoice01Component },
  { path: 'invoiceGTKT', component: InvoiceGTKTComponent },
  { path: 'invoiceGTKT/form-invoice/:id', component: InvoiceGTKTFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Invoice01RoutingModule { }
