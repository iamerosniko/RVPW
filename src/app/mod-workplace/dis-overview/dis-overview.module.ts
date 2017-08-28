import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { FunctionalTowersComponent } from './functional-towers/functional-towers.component';
import { StrategiesComponent } from './strategies/strategies.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrgChartComponent, MissionVisionComponent, FunctionalTowersComponent, StrategiesComponent]
})
export class DisOverviewModule { }
