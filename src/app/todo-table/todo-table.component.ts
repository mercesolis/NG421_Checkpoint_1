import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import { ITodo } from '../interfaces/itodo';
import { Router } from '@angular/router';
import { TodoService } from  '../services/todo.service';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title','description', 'createdAt', 'status'];
  dataSource: MatTableDataSource<ITodo>;

  constructor(private todoService: TodoService, private router: Router){}

  table() {
    console.log('table');
    this.router.navigate(['/table']);
  }

  

  ngOnInit(): void{
    this.dataSource = new MatTableDataSource(this.todoService.getItems());
  }

}
