import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{ todoItem.title }}
    </p>
    <button class="btn btn-red" (click)="removeItem()">X</button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  
  constructor() { }

  ngOnInit() {
  }

}
