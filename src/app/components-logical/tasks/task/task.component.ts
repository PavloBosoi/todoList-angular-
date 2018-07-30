import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FirebaseService } from '../../../shared/services/firebase/firebase.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  //get task data from parent
  @Input() taskInput: any;

  //form
  updateTaskForm: FormGroup;

  constructor(
      private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.updateTaskForm = new FormGroup({
      'timeInput': new FormControl({value: '', disabled: false}, [])
    });
  }

  //delete task from firebase by key
  deleteTask(key: string) {
    this.firebaseService.deleteTask(key);
  }

  updateTimeTask(key: string, currentTime: string, action: string) {
    //get time from spend time input
    let time = parseInt(this.updateTaskForm.get('timeInput').value);

    switch (action) {
      case 'add':
        time = parseInt(currentTime) + time;
            break;
      case 'delete':
        time = parseInt(currentTime) - time;
            break;
    }

    //update spend time in firebase
    this.firebaseService.updateTimeTask(key, time);
  }

}
