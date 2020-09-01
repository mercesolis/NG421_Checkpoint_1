import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { MatTableModule } from '@angular/material/table';
import { TodoService } from './services/todo.service';


const routes: Routes = [
{path: 'table', component: TodoTableComponent},
{path: 'board', component: BoardComponent},
{path: "", redirectTo: "/board", pathMatch: "full"}
];



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    CreateTodoComponent,
    ConfirmationModalComponent,
    BoardComponent,
    TodoEditComponent,
    TodoTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule.forRoot(routes),
    
    
  ],
  exports: [
    RouterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationModalComponent, TodoEditComponent]
})
export class AppModule { }
