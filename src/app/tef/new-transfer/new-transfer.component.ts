import { Component, OnInit } from '@angular/core';
import { Addressee } from 'src/app/models/addressee';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  // steps 0 = addressess select , 1 =  trans , 2 = view detail
  public steps = [true,false,false]
  constructor() { }

  ngOnInit(): void {
  }

  selectAddressee(idx:string):void{
    //call service for search   addressee
    const addressee = new Addressee("1-9","TEST 1","TEST@TEST.CL","1233","ESTADO","12121212-12121")
    this.steps[1] = true;
    this.steps[0] = false;
  }

  doTransfer():void{
    this.steps[2] = true;
    this.steps[1] = false;
  }
}
