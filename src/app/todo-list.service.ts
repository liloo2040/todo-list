import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  private todoList =[
    { title: 'install Node JS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  constructor() { }

  getTodoList() {
    return this.todoList;
  }

  addItem(item): void {
    this.todoList.push(item);
  }

}
