import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FirebaseService } from '../../shared/services/firebase/firebase.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

    periods = [
        {value: '24', viewValue: 'Day'},
        {value: '168', viewValue: 'Weak'},
        {value: '720', viewValue: 'Month'}
    ];

    //form
    addTaskForm: FormGroup;

  constructor(
      private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
      this.addTaskForm = new FormGroup({
          'task': new FormControl({value: '', disabled: false}, []),
          'time': new FormControl({value: '', disabled: false}, []),
          'period': new FormControl({value: '', disabled: false}, [])
      });
  }

    submitForm(event) {

        event.preventDefault();
      console.log(event);
      console.log(this.addTaskForm.get('period'), new Date());

      let taskData = {
          task: this.addTaskForm.get('task').value,
          time: parseInt(this.addTaskForm.get('time').value),
          timeCurrent: 0,
          period: this.addTaskForm.get('period').value
      };

      this.firebaseService.addTask(taskData);

    }

}
