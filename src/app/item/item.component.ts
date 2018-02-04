import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{ todoItem.title }}
    </p>
    <button class="btn btn-red" (click)="removeItem()">remove</button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 
  @Output() remove:EventEmitter<any> = new EventEmitter();

  @Input() todoItem: any;
  removeItem() {
    this.remove.emit(this.todoItem);
  }
  constructor() { }

  ngOnInit() {
  }
  

}
