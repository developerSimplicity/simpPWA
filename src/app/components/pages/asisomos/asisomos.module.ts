import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsisomosRoutingModule } from './asisomos-routing.module';
import { AsisomosComponent } from './asisomos.component';

import { HeaderModule } from '@shared/components/header/header.module';

@NgModule({
  declarations: [
    AsisomosComponent
  ],
  imports: [
HeaderModule,
    CommonModule,
    AsisomosRoutingModule
  ]
})
export class AsisomosModule { }
