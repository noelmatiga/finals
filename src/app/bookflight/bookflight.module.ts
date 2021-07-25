import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookflightPageRoutingModule } from './bookflight-routing.module';

import { BookflightPage } from './bookflight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookflightPageRoutingModule
  ],
  declarations: [BookflightPage]
})
export class BookflightPageModule {}
