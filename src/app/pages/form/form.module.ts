import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';


@NgModule({
  declarations: [
    FormComponent,
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
