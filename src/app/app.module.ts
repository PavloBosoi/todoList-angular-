import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//vendor modules
import { MaterialModule } from './vendors/material/material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

//custom modules
import { AddTaskModule } from './components-logical/add-task/add-task.module';
import { TasksModule } from './components-logical/tasks/tasks.module';

//containers
import { MainLayoutComponent } from './containers/main-layout/main-layout.component';

//routing module
import { AppRoutingModule } from './app.routing';

//components
import { HeaderComponent } from './components/header/header.component';


import { environment } from '../environments/environment';

const APP_COMPONENTS = [
    HeaderComponent
];

const APP_MODULES = [
    AddTaskModule,
    TasksModule,
    AngularFireModule.initializeApp(environment.firebase),
];

@NgModule({
  declarations: [
    AppComponent,
      MainLayoutComponent,
      ...APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      AppRoutingModule,
      MaterialModule,
      ...APP_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
