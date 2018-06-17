import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../vendors/material/material.module';

import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [
    CommonModule,
      MaterialModule
  ],
  exports: [
      TasksComponent
  ],
  declarations: [
      TasksComponent,
      TaskComponent
  ]
})
export class TasksModule { }
