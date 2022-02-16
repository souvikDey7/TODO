import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModuleRoutingModule } from './login-module-routing.module';
import { ServiceService } from 'src/app/service.service';
import { BodyMComponent } from '../body-m/body-m.component';

@NgModule({
  declarations: [LoginComponent,BodyMComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,LoginModuleRoutingModule
  ],
  providers: [ServiceService]
})
export class LoginModuleModule { 
}
