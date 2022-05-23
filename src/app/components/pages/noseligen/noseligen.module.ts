import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoseligenRoutingModule } from './noseligen-routing.module';
import { NoseligenComponent } from './noseligen.component';
import { HeaderModule } from '@shared/components/header/header.module';

@NgModule({
  declarations: [
    NoseligenComponent
  ],
  imports: [
HeaderModule,
    CommonModule,
    NoseligenRoutingModule
  ]
})
export class NoseligenModule { }
