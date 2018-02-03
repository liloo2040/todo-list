import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <p>
      input works!
    </p>
    <input>
    <button>Save</button>
    <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = 'my title';
  constructor() {
    this.title = 'Hello World!';
   }

  ngOnInit() {
  }

}
