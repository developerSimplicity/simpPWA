import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsisomosComponent } from './asisomos.component';

const routes: Routes = [{ path: '', component: AsisomosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsisomosRoutingModule { }
