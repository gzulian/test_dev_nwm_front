import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarService } from './sidebar.service';
import { NgbNav, NgbNavItem, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavHorizontalComponent } from './nav-horizontal/nav-horizontal.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    NavHorizontalComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent
  ],
  providers:[
    SidebarService
  ]
})
export class LayoutModule { }
