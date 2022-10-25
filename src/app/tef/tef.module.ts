import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TefRoutingModule } from './tef-routing.module';
import { CreateAddresseeComponent } from './create-addressee/create-addressee.component';
import { TransferComponent } from './transfer/transfer.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { TransfersComponent } from './transfers/transfers.component';


@NgModule({
  declarations: [
    CreateAddresseeComponent,
    TransferComponent,
    NewTransferComponent,
    TransfersComponent
  ],
  imports: [
    CommonModule,
    TefRoutingModule
  ]
})
export class TefModule { }
