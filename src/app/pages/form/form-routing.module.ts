import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import {BasicFormComponent} from './basic-form/basic-form.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'basic-form', component: BasicFormComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
