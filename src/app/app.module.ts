import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { LayoutModule } from './layout/layout.module';

import { NgxBootstrapIconsModule, alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';


const icons = {
  alarm,
  alarmFill,
  alignBottom
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    NgbTypeaheadModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
