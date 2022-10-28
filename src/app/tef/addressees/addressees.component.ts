import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addressees',
  templateUrl: './addressees.component.html',
  styleUrls: ['./addressees.component.scss']
})
export class AddresseesComponent implements OnInit {
  newAdd = false;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  newAddressee(show:boolean):void{
    this.newAdd  = show;
  }

}
