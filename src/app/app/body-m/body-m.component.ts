import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-body-m',
  templateUrl: './body-m.component.html',
  styleUrls: ['./body-m.component.css']
})
export class BodyMComponent implements OnInit {
  
  constructor(private service:ServiceService) { }
  ngOnInit(): void {

    this.bodyM.controls["username"].setValue(this.b);
    this.service.show({"username":this.b}).subscribe(data=>this.file=data);
    this.reset();  //repeat every 10s.
    setInterval(() => {
      this.reset(); 
    },10000);
  }
  reset()
  {
    this.dis="";
    this.end="";
  }
  bodyM=new FormGroup(
    {
      text:new FormControl(),
      username:new FormControl()
    }
  )
  dis="";
  file:any;
  @Input() b:any; //taking value from LoginComponent
  status:any;
  send()
  {
    if(this.bodyM.controls["text"].value==null)
    this.dis="text part is blank"
    else{
    this.service.sendB(this.bodyM.value).subscribe(da=>this.status=da);
    this.dis="sending.."
    }
    if(this.status==2)
    {
        this.dis="text part is blank..."
    }
    else if(this.status==1)
    {
      this.dis="created.."
      this.service.show({
        "username":this.b
      }).subscribe(data=>this.file=data);
      this.bodyM.controls["text"].setValue("");
    }
    else if(this.status==0)
    {
      this.dis="error in serverside..."
    }
    else{
      this.dis="sending..."
    }
      this.service.show({
        "username":this.b
      }).subscribe(data=>this.file=data);
      this.dis="created...";
  }
  end=""
  upadte(tem:any)
  { 

    this.bodyM.controls["text"].setValue(tem.text);
    this.delete(tem.id);
    this.end="update the content..."
   // this.service.update(this.bodyM,tem).subscribe(data=>this.status=data);
   // this.service.show({"username":this.b}).subscribe(data=>this.file=data);
  }
  delete(tem:any)
  {
    this.service.delete(tem).subscribe(data=>this.status=data);
    if(this.status==1)
      this.end="deleted successfully..."
    else if(this.status==0)
        this.end="error in server side :("
   this.service.show({
        "username":this.b
      }).subscribe(data=>this.file=data);
  }
}
