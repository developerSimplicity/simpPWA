import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoseligenComponent } from './noseligen.component';

const routes: Routes = [{ path: '', component: NoseligenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoseligenRoutingModule { }
