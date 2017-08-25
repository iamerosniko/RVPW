import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps/apps.component';
import { ServicesComponent } from './services/services.component';
import { OrgComponent } from './org/org.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppsComponent, ServicesComponent, OrgComponent]
})
export class TeamOverviewModule { }
