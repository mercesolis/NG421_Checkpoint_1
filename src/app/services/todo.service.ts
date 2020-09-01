import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import {TODO_DATA} from '../data/todo-data';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items: ITodo[] = [];
  todoId: number = 0;
  todoList: ITodo [] = [
    // example of how to make an item in todo list
    { title: 'Install Angular CLI', id: this.todoId, status: 'Todo', createdAt: new Date()  },
  
  ]
  
  statuses: string[] = ['Todo', 'Doing', 'Done'];
  constructor() { 
    this.items = TODO_DATA;
  }
  getTodos(status: string ): ITodo[] {

    if (!status) {
    return this.todoList;
    }

    return this.todoList.filter(t => t.status === status);
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo):void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }

  getStatuses(): string [] {
    return this.statuses;
  }

  getItems(): ITodo[] {
    return this.items;
  }
}
