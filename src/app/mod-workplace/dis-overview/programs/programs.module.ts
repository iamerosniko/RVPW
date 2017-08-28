import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireComponent } from './aspire/aspire.component';
import { CaresComponent } from './cares/cares.component';
import { CareersComponent } from './careers/careers.component';
import { MotivateComponent } from './motivate/motivate.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AspireComponent, CaresComponent, CareersComponent, MotivateComponent]
})
export class ProgramsModule { }
