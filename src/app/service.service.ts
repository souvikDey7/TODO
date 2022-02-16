import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  data:any;
  send(user:any)
  {
    return this.http.post("https://todobackend11.herokuapp.com/get",user);
  }
  get(user:any)
  {
   return this.http.post("https://todobackend11.herokuapp.com/sign",user);
  }
}
