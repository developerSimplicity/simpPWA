import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { HeaderModule } from '@shared/components/header/header.module';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
  HeaderModule,
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
