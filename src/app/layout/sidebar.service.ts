import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  selectMain = new BehaviorSubject<number>(0);
  constructor() { }
  setSelectMain(main:number) {
    this.selectMain.next(main);
  }
}
