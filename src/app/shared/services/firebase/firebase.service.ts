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
    ) { }

    addTask(taskData) {
        this.firebaseSerice.list('tasks').push(taskData);
    }

    getTask() {
        console.log(this.firebaseSerice.list('tasks').snapshotChanges());
        return this.firebaseSerice.list('tasks').snapshotChanges().pipe(
            map((data) => {
                return data.map((obj) => {
                    return {key: obj.payload.key, ...obj.payload.val()}
                });
            }));

    }

}
