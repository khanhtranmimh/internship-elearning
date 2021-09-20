import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {MonitorComponent} from './monitor/monitor.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'monitor', component: MonitorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
