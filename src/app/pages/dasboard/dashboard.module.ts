import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MonitorComponent } from './monitor/monitor.component';


@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [DashboardComponent, WelcomeComponent, MonitorComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
