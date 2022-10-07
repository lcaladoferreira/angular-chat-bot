import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  links = [
    {path:'/main',label:'home',active:'button-active'},
    {path:'/chat',label:'iniciar chat',active:'button-active'}
  ]
}
