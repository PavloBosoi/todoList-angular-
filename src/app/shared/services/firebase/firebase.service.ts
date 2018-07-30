import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


    taskList: AngularFireList<any>;

    constructor(
        private firebaseSerice: AngularFireDatabase
    ) {
        //get table list tasks
        this.taskList = firebaseSerice.list('tasks');
    }

    addTask(taskData) {
        this.taskList.push(taskData);
    }

    getTasks() {
        return this.taskList.snapshotChanges().pipe(
            map((data) => {
                return data.map((obj) => {
                    return {key: obj.payload.key, ...obj.payload.val()}
                });
            }));

    }

    deleteTask(key: string) {
        this.taskList.remove(key);
    }

    updateTimeTask(key: string, time: number) {
        console.log(time);
        this.taskList.update(key, { timeCurrent: time });
    }

}
