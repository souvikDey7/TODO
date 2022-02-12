import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  data=0;
  send(user:any)
  {
    console.log("in post");
     //this.http.post("/h",user).subscribe(data=>data=this.data);
     return this.data;
  }
  get(user:any)
  {
    console.log("in post");
     //this.http.post("/h",user).subscribe(data=>data=this.data);
     return this.data;
  }
}
