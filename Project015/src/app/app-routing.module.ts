import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Angular Components
 */
import {ListUserComponent} from "./list-user/list-user.component";
import { RegisterUserComponent } from "./register-user/register-user.component";

import { AppComponent } from './app.component';

//const routes: Routes = [];

/**
 * Angular Routing
 */
const routes: Routes = [

  { path: '', component: ListUserComponent },  

  { path: 'register-user', component: RegisterUserComponent },
  
  { path: 'list-user', component: ListUserComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
