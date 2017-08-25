import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace.component';
import { WorkplaceRoutingModule } from './workplace-routing.module';

@NgModule({
  imports: [
    CommonModule,WorkplaceRoutingModule
  ],
  declarations: [WorkplaceComponent]
})
export class WorkplaceModule { }
