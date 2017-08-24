import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy/privacy.component';
import { InfoSecComponent } from './info-sec/info-sec.component';
import { HouseRulesComponent } from './house-rules/house-rules.component';
import { VacationLeaveComponent } from './vacation-leave/vacation-leave.component';
import { BereavementComponent } from './bereavement/bereavement.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrivacyComponent, InfoSecComponent, HouseRulesComponent, VacationLeaveComponent, BereavementComponent]
})
export class PoliciesModule { }
