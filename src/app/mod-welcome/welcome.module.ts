import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
@NgModule({
  imports: [BrowserModule,FormsModule,
    CommonModule,WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
