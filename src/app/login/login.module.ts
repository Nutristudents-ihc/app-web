import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material/material.module';
import { FormsComponent } from './forms/forms.component';
import { RouterModule } from '@angular/router';
import { PassRecoverComponent } from './pass-recover/pass-recover.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,


  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FormsComponent,
    RouterModule,
    PassRecoverComponent,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
