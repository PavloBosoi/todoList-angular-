import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  //get task data from parent
  @Input() taskInput: any;

  constructor() { }

  ngOnInit() {
  }

}
