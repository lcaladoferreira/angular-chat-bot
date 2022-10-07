import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AppComponent, OnInit {

  constructor() { }
  links = [
    {path:'/main',label:'home',active:'button-active'},
    {path:'/chat',label:'iniciar chat',active:'button-active'}
  ];

  ngOnInit() {
  }

}