import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { FunctionalTowersComponent } from './functional-towers/functional-towers.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { DisOverviewRouting } from './dis-overview-routing';

import { ModCommonModule } from '../../mod-common/mod-common.module';
@NgModule({
  imports: [
    CommonModule,ModCommonModule,DisOverviewRouting
  ],
  declarations: [OrgChartComponent, MissionVisionComponent, FunctionalTowersComponent, StrategiesComponent],
})
export class DisOverviewModule { }
