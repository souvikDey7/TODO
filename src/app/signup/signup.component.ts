import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private a:ServiceService) { }
  user=new FormGroup(    {
    name:new FormControl(),
    password:new FormControl(),
    Rpassword:new FormControl()
  }
)
  ngOnInit(): void {
  }
  status=0;
  dis="";
  get()
  {
    if(this.user.controls["name"].value==null)
    {
      this.dis="Enter username";
    }
    else if(this.user.controls["password"].value==null)
    {
      this.dis="Enter password";
    }
    else if(this.user.controls["password"].value!=this.user.controls["Rpassword"].value)
    {
      this.dis="Reentered password is wrong";
    }
    else
    this.status=this.a.get(this.user);
  }
}
