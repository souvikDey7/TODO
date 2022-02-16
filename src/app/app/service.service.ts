import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  data:any;
  send(user:any)
  {
    return this.http.post("https://todobackend11.herokuapp.com/get",user);
    //return this.http.post("http://localhost:9090/get",user);
  }
  get(user:any)
  {
   return this.http.post("https://todobackend11.herokuapp.com/sign",user);
   //return this.http.post("http://localhost:9090/sign",user);
  }
  sendB(bodyM:any)
  {
      return this.http.post("https://todobackend11.herokuapp.com/enter",bodyM);
  }
  show(b:any)
  {
    return this.http.post("https://todobackend11.herokuapp.com/show",b);
  }
  update(body:any,id:any)
  {
    return this.http.put("https://todobackend11.herokuapp.com/update/"+id,body);
  }
  delete(body:any)
  {
    return this.http.delete("https://todobackend11.herokuapp.com/delete/"+body);
  }
}
