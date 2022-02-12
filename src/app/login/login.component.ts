import { ThisReceiver } from '@angular/compiler';
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
      name:new FormControl(),
      password:new FormControl()
    }
  )
  ngOnInit(): void {
  }
  status=0;
  dis="";
  send()
  {
    if(this.user.controls["name"].value==null)
    {
      this.dis="Enter username";
    }
    else if(this.user.controls["password"].value==null)
    {
      this.dis="Enter password";
    }
    else
    this.status=this.a.send(this.user);
  }
}
