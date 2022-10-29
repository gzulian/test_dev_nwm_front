import { Component, OnInit,OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiTefService } from 'src/app/services/api-tef.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Route, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-create-addressee',
  templateUrl: './create-addressee.component.html',
  styleUrls: ['./create-addressee.component.scss']
})
export class CreateAddresseeComponent implements OnInit {


  constructor(public api:ApiTefService, private formBuilder: FormBuilder,private router:Router,private storageService:StorageService) { }
  addresseeForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    rut: new FormControl(''),
    bank: new FormControl(''),
    account: new FormControl(''),
    phone: new FormControl(''),
  });
  submitted = false;
  ngOnInit(): void {
  }
  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit():void{
    this.submitted = true;
    if (this.addresseeForm.invalid) {
      return;
    }

    let addressee = {
      "account":this.addresseeForm.controls.account.value,
      "bank":this.addresseeForm.controls.bank.value,
      "rut":this.addresseeForm.controls.rut.value,
      "name":this.addresseeForm.controls.name.value,
      "phone":this.addresseeForm.controls.name.value,
      "email":this.addresseeForm.controls.email.value,
    }
    this.api.createAddressee(addressee,this.storageService.getUser()).pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.api.getUser(this.storageService.getUser()).subscribe( (data) => {
        this.storageService.saveUserData(data.data);
      });
      this.router.navigate(['/', 'tef']).then(() => {
        window.location.reload();
      });
      this.addresseeForm.reset();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addresseeForm.controls;
  }

 

  onReset(): void {
    this.submitted = false;
    this.addresseeForm.reset();
  }
}
