import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace.component';
import { WorkplaceRoutingModule } from './workplace-routing.module';
import { DisOverviewModule } from './dis-overview/dis-overview.module';
import { DisToolsModule } from './dis-tools/dis-tools.module';
@NgModule({
  imports: [
    CommonModule,
    DisOverviewModule,
    DisToolsModule,
    WorkplaceRoutingModule
  ],
  declarations: [WorkplaceComponent]
})
export class WorkplaceModule { }
