import { Component, OnInit,OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiTefService } from 'src/app/services/api-tef.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Route, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public api:ApiTefService, private formBuilder: FormBuilder,private router:Router,private storageService:StorageService) { }
  userForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl('')
  });
  submitted = false;
  ngOnInit(): void {

    if (this.storageService.isLoggedIn()) {
      this.router.navigate(['/', 'tef']);
    }
    this.userForm = this.formBuilder.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(40)
          ]
        ]
      }
    );
  }
  destroy$: Subject<boolean> = new Subject<boolean>();
  onSubmit():void{
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.api.login(this.userForm.controls.email.value,this.userForm.controls.password.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.storageService.saveUser(data.data.token);
      
      this.api.getUser(data.data.token).subscribe( (data) => {
        this.storageService.saveUserData(data.data);
      });
      this.router.navigate(['/', 'tef']).then(() => {
        window.location.reload();
      });;
      this.userForm.reset();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

 

  onReset(): void {
    this.submitted = false;
    this.userForm.reset();
  }
}
