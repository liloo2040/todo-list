import { Injectable } from '@angular/core';



const storageName = 'aah_todo_list';
@Injectable()
export class TodoListStorageService {
  private todoList;

  constructor() { 
    this.todoList = JSON.parse(localStorage.getItem(storageName));
  }

/**
    * get items
    * @returns {any[]}
    */
  get() { 
    return [...this.todoList];
  }

/**
    * Add a new todo item
    * @param item
    * @returns {any[]}
    */
  post(item) { 
    this.todoList.push(item);
    return this.update();
  }
/**
    * Syncronize the local storage with the current list
    * @returns {any[]}
    */
  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }
/**
    * find the index of an item in the array
    * @param item
    * @returns {number}
  */ 
  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }

// update an item
  put(item, changes) { }

  // remove an item
  destroy(item) { }
}
