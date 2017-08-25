import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptComponent } from './opt/opt.component';
import { KhronosComponent } from './khronos/khronos.component';
import { ContactNumbersComponent } from './contact-numbers/contact-numbers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OptComponent, KhronosComponent, ContactNumbersComponent]
})
export class DisToolsModule { }
