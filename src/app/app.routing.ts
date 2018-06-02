import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

//containers
import { MainLayoutComponent } from './containers/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            /*{
                path: 'tasks',
                loadChildren: './components-logical/add-task/add-task.module#AddTaskModule'
            }*/
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
    exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
