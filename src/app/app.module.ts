import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { RouteRoutingModuleMain} from './route-routing.module';
import { ServiceService } from './service.service';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteRoutingModuleMain,CommonModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
