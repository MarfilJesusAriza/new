import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingUpRoutingModule } from './sing-up-routing.module';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SingUpComponent
  ],
  imports: [
    CommonModule,
    SingUpRoutingModule,
    MaterialModule
  ]
})
export class SingUpModule { }
