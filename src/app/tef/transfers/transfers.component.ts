import { Component, OnInit } from '@angular/core';
import { ApiTefService } from 'src/app/services/api-tef.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({

  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
  
})
export class TransfersComponent implements OnInit {

  constructor(private apiService:ApiTefService, private storageService:StorageService) { }
  userData:any;
  ngOnInit(): void {
    this.userData = JSON.parse(this.storageService.getUserData());
  }
  ngAfterContentInit():void{
  }
  newAdd:boolean = false;
  newTransfer(show:boolean):void{
    this.newAdd  = show;
  }

}
