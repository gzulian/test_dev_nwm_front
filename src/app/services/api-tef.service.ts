import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiTefService {

  constructor(private http: HttpClient) { }
  public userData = new BehaviorSubject<any>(0);
  rootURL = environment.apitef+'/api';
  reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  setUserData(userData:any) {
    console.log(userData);
    this.userData.next(userData);
  }
  login(email:any,password:any) : Observable<any> {
    const body=JSON.stringify({"email":email,"password":password});
    return this.http.post(this.rootURL + '/v1/login', body,{'headers':this.reqHeaders});
  }

  transfer(amount:Number,addressee:any,userToken:any) : Observable<any> {
    const body=JSON.stringify({
      "amount":amount,
      "addressee_account":addressee.account,
      "addressee_bank":addressee.bank,
      "addressee_rut":addressee.rut,
      "addressee_name":addressee.name,
    });
    userToken = userToken.replace('"','');
    userToken = userToken.replace('"','');
    return this.http.post(this.rootURL + '/v1/users/transfer', body,
      { 
        headers:  new HttpHeaders().
          set('Authorization',`Bearer ${userToken}`).
          set('Content-Type', 'application/json')
      });
  }

  createAddressee(addressee:any,userToken:any) : Observable<any> {
    const body=JSON.stringify({"addressees":addressee});
    userToken = userToken.replace('"','');
    userToken = userToken.replace('"','');
    return this.http.patch(this.rootURL + '/v1/users/addressees', body,
      { 
        headers:  new HttpHeaders().
          set('Authorization',`Bearer ${userToken}`).
          set('Content-Type', 'application/json')
      });
  }

  getUser(userToken:any):Observable<any>{
    userToken = userToken.replace('"','');
    userToken = userToken.replace('"','');
    return this.http.get(this.rootURL + '/v1/users', { headers:  new HttpHeaders().set('Authorization',`Bearer ${userToken}`)}).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );

  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}

