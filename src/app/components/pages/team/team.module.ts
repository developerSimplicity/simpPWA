import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { HeaderModule } from '@shared/components/header/header.module';

@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
  HeaderModule,
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
