import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransfersComponent } from './transfers/transfers.component';

const routes: Routes = [
  {
    path:'transfer',
    component:TransferComponent,
  },
  {
    path:'new-transfer',
    component:NewTransferComponent
  },
  {
    path:'transfers',
    component:TransfersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TefRoutingModule { }
