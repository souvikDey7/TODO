import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private a:ServiceService) { 
  }
  user=new FormGroup(    {
      username:new FormControl(),
      password:new FormControl()
    }
  );
  ngOnInit(): void {
  }
  dis="";
  status:any;
  send()
  {
    this.a.send(this.user.value).subscribe(d=>this.status=d);
    console.log(this.status);
    if(this.status==0)
    {
      this.dis="username doesn't exist"
    }
    else if(this.status==2)
    {
      this.dis="password is wrong"
    }
    else if(this.status==1)
    this.dis="Successfully login";
  }
}
