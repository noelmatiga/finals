import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateflightPageRoutingModule } from './updateflight-routing.module';

import { UpdateflightPage } from './updateflight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateflightPageRoutingModule
  ],
  declarations: [UpdateflightPage]
})
export class UpdateflightPageModule {}
