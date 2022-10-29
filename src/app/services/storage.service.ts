import { Component, Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const USER_DATA_KEY = 'auth-user-data';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public saveUserData(user: any): void {
    window.sessionStorage.removeItem(USER_DATA_KEY);
    window.sessionStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return user;
    }

    return {};
  }

  public getUserData(): any {
    const user = window.sessionStorage.getItem(USER_DATA_KEY);
    if (user) {
      return user;
    }

    return {};
  }
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}