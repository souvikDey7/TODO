import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  isButtonVisible = true;
  login=false;
  signup=false;
  back()
  {
      this.isButtonVisible = true;
  this.login=false;
  this.signup=false;
    window.location.reload();
  }
}
