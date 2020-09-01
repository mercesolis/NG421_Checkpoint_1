import { Component,OnInit } from '@angular/core';
import {ITodo} from './interfaces/itodo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Todos";
  ngOnInit() {

  }
}
