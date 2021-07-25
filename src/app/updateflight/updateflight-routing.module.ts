import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateflightPage } from './updateflight.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateflightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateflightPageRoutingModule {}
