import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstohacemosComponent } from './estohacemos.component';

const routes: Routes = [{ path: '', component: EstohacemosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstohacemosRoutingModule { }
