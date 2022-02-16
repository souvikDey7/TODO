import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private a:ServiceService) { }
  user=new FormGroup(    {
    username:new FormControl(),
    password:new FormControl(),
    Rpassword:new FormControl()
  }
)
  ngOnInit(): void {
  }
  status:any;
  dis="";
  show=0;
  get()
  {
    if(this.user.controls["password"].value!=this.user.controls["Rpassword"].value)
    {
      this.dis="Re-entered password is wrong";
    }
    else
    {
      this.a.get(this.user.value).subscribe(d=>this.status=d);
      if(this.status==0)
      this.dis="User already exist";
      else if(this.status==1){
      this.dis="Account successfully created";
      this.show=1;
      }else{
        this.dis="sending...";
      }
    }
  }
}