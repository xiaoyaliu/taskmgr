import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskItemComponent } from './task-item/task-item.component';
import {TaskRoutingModule} from "./task-routing.module";
import {SharedModule} from "../shared/shared.module";
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [TaskListComponent, TaskHomeComponent, TaskHeaderComponent, TaskItemComponent, NewTaskComponent],
  entryComponents: [NewTaskComponent]
})
export class TaskModule { }
