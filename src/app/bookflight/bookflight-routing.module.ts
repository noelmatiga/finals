import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookflightPage } from './bookflight.page';

const routes: Routes = [
  {
    path: '',
    component: BookflightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookflightPageRoutingModule {}
