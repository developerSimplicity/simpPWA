import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstohacemosRoutingModule } from './estohacemos-routing.module';
import { EstohacemosComponent } from './estohacemos.component';


@NgModule({
  declarations: [
    EstohacemosComponent
  ],
  imports: [
    CommonModule,
    EstohacemosRoutingModule
  ]
})
export class EstohacemosModule { }
