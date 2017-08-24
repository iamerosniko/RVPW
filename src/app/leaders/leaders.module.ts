import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { FunctionHeadComponent } from './function-head/function-head.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeamLeaderComponent, FunctionHeadComponent, ManagerComponent]
})
export class LeadersModule { }
