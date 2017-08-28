import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace.component';
import { WorkplaceRoutingModule } from './workplace-routing.module';
import { DisOverviewModule } from './dis-overview/dis-overview.module';
@NgModule({
  imports: [
    CommonModule,DisOverviewModule,
    WorkplaceRoutingModule
  ],
  declarations: [WorkplaceComponent]
})
export class WorkplaceModule { }
