import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../vendors/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AddTaskComponent} from './add-task.component';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule
  ],
    exports: [
        AddTaskComponent
    ],
  declarations: [
      AddTaskComponent
  ]
})
export class AddTaskModule { }
