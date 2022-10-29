import { Component, OnInit , OnDestroy} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Addressee } from 'src/app/models/addressee';
import { ApiTefService } from 'src/app/services/api-tef.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {
  public steps = [true,false,false]
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private apiService:ApiTefService,private storageService:StorageService,private formBuilder: FormBuilder, private router:Router) { }
  userData:any;
  current_balance = 0;
  addressee_selected:any;

  transferForm = new FormGroup({
    amount: new FormControl('')
  });
  submitted = false;

  ngOnInit(): void {
    this.userData = JSON.parse(this.storageService.getUserData());
    this.current_balance = this.userData.transfers[this.userData.transfers.length - 1 ].new_balance

    this.transferForm = this.formBuilder.group(
      {
        amount: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(6)
          ]
        ]
      }
    );
    console.log(this.userData);
  }

  ngAfterContentChecked():void{
    
  }
  selectAddressee(idx:string):void{
    //call service for search   addressee
    this.addressee_selected = this.userData.addressees.find( (add:any) => add.rut == idx  );
    this.steps[1] = true;
    this.steps[0] = false;
  }

  doTransfer():void{
    this.steps[2] = true;
    this.steps[1] = false;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.transferForm.controls;
  }

  onSubmit():void{
    this.submitted = true;
    if (this.transferForm.invalid) {
      return;
    }
    let new_amount = Number(this.transferForm.controls.amount.value);
    if( new_amount <= this.current_balance )
      this.apiService.transfer(new_amount, this.addressee_selected,  this.storageService.getUser()).subscribe( (data) => {
          console.log(data)
          if (typeof data.data.id !== 'undefined'){
            this.apiService.getUser(this.storageService.getUser()).subscribe((user) =>{
              this.storageService.saveUserData(user.data);
              this.router.navigate(['/', 'tef']).then(() => {
                window.location.reload();
              });
            });
          }

       
      });

      //this.router.navigate(['/', 'tef']);
      //this.transferForm.reset();
   
  }
}
