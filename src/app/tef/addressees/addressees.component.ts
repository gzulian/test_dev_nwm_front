import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiTefService } from 'src/app/services/api-tef.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-addressees',
  templateUrl: './addressees.component.html',
  styleUrls: ['./addressees.component.scss']
})
export class AddresseesComponent implements OnInit {
  newAdd = false;
  
  constructor(private apiService:ApiTefService,private storageService:StorageService,private formBuilder: FormBuilder, private router:Router) { }
  userData:any;
  ngOnInit(): void {
    this.userData = JSON.parse(this.storageService.getUserData());

  }

  newAddressee(show:boolean):void{
    this.newAdd  = show;
  }

}
