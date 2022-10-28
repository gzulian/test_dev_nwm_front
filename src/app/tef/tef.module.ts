import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TefRoutingModule } from './tef-routing.module';
import { CreateAddresseeComponent } from './create-addressee/create-addressee.component';
import { TransferComponent } from './transfer/transfer.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { TransfersComponent } from './transfers/transfers.component';
import { TefComponent } from './tef/tef.component';
import { LayoutModule } from '../layout/layout.module';
import { NgbNavModule, NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeaheadBasicComponent } from './typeahead-basic/typeahead-basic.component';
import { FormsModule } from '@angular/forms';
import { AddresseesComponent } from './addressees/addressees.component';


@NgModule({
  declarations: [
    CreateAddresseeComponent,
    TransferComponent,
    NewTransferComponent,
    TransfersComponent,
    TefComponent,
    TypeaheadBasicComponent,
    AddresseesComponent
  ],
  imports: [
    CommonModule,
    TefRoutingModule,
    LayoutModule,
    NgbNavModule,
    FormsModule,
    NgbTypeaheadModule
   
  ]
})
export class TefModule { }
