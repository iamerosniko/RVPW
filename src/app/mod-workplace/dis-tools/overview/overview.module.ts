import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { FunctionalTowersComponent } from './functional-towers/functional-towers.component';
import { StrategiesComponent } from './strategies/strategies.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OverviewComponent, MissionVisionComponent, OrgChartComponent, FunctionalTowersComponent, StrategiesComponent]
})
export class OverviewModule { }
