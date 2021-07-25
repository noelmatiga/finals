import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookedflightPage } from './bookedflight.page';

const routes: Routes = [
  {
    path: '',
    component: BookedflightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookedflightPageRoutingModule {}
