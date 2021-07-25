import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookedflightPageRoutingModule } from './bookedflight-routing.module';

import { BookedflightPage } from './bookedflight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookedflightPageRoutingModule
  ],
  declarations: [BookedflightPage]
})
export class BookedflightPageModule {}
