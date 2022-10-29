import { Component, OnInit } from '@angular/core';
import { ApiTefService } from 'src/app/services/api-tef.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tef',
  templateUrl: './tef.component.html',
  styleUrls: ['./tef.component.scss'],
})
export class TefComponent implements OnInit {

  constructor(private storageService: StorageService,private apiTefService:ApiTefService) { }
  currentUser:any;
  userData:any;
  ngOnInit(): void {

  }

}
