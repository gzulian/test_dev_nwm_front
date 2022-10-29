import { Component } from '@angular/core';
import { ApiTefService } from './services/api-tef.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test_dev_nwm_front';
  constructor(private apiTefService:ApiTefService,  private storageService:StorageService) {

  }

  ngOnInit():void{
    
  }
}
