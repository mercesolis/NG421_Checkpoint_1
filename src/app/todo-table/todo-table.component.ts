import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title','description', 'createdAt', 'status'];
  dataSource: MatTableDataSource<ITodo>;

  constructor(private todoService: TodoService){}

  

  ngOnInit(): void  {
    this.dataSource = new MatTableDataSource(this.todoService.getItems());
  }

}
