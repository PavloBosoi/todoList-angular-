import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../shared/services/firebase/firebase.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

    tasks: any = [];

    constructor(
        private firebaseService: FirebaseService
    ) { }

  ngOnInit() {
      this.getTasks();
  }

  //get tasks from firebase
  getTasks() {
      this.firebaseService.getTask()
          .subscribe((data) => {
              this.tasks = data;
          });
  }

}
