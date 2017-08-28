import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireComponent } from './aspire/aspire.component';
import { CaresComponent } from './cares/cares.component';
import { CareersComponent } from './careers/careers.component';
import { MotivateComponent } from './motivate/motivate.component';
import { DigeratiComponent } from './digerati/digerati.component';
import { ModCommonModule } from '../../../mod-common/mod-common.module';
import { ProgramsRouting } from './programs-routing';
@NgModule({
  imports: [
    CommonModule,ProgramsRouting,ModCommonModule
  ],
  declarations: [AspireComponent, CaresComponent, CareersComponent, MotivateComponent, DigeratiComponent]
})
export class ProgramsModule { }
