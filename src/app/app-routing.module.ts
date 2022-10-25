import { pathFormat } from '@angular-devkit/schematics/src/formats';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TefComponent } from './tef/tef/tef.component';

const routes: Routes = [
  {
    path:'tef',
    component:TefComponent,
    loadChildren: ()=>import('./tef/tef.module').then(m=>m.TefModule)
  },
  {
    path:'login',
    component:LoginComponent
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
