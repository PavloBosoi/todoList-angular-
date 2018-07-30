import {Component, Input, OnInit} from '@angular/core';

import { FirebaseService } from '../../../shared/services/firebase/firebase.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  //get task data from parent
  @Input() taskInput: any;

  constructor(
      private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  //delete task from firebase by key
  deleteTask(key: string) {
    this.firebaseService.deleteTask(key);
  }

}
