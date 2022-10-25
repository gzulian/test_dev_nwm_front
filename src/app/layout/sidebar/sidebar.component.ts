import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private mainactive_tab = 0;
  private sidebarService:SidebarService;
  constructor(sidebarService:SidebarService ) {
    this.sidebarService = sidebarService;
  }
    
  ngOnInit(): void {
    this.sidebarService.setSelectMain(1);
  }

  changemain(mainactive:number):boolean{
    this.sidebarService.setSelectMain(mainactive);
    return false;
  }

}
