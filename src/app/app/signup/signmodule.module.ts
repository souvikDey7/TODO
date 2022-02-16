import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignmoduleRoutingModule } from './signmodule-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {SignupComponent} from './signup.component';
@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignmoduleRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignmoduleModule { }
