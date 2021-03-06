import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstohacemosRoutingModule } from './estohacemos-routing.module';
import { EstohacemosComponent } from './estohacemos.component';
import { HeaderModule } from '@shared/components/header/header.module';

@NgModule({
  declarations: [
    EstohacemosComponent
  ],
  imports: [
HeaderModule,
    CommonModule,
    EstohacemosRoutingModule
  ]
})
export class EstohacemosModule { }
