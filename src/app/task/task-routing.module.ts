/**
 * Created by Administrator on 2017/12/5 0005.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskHomeComponent} from "./task-home/task-home.component";

const routes: Routes = [
  { path: 'task', component: TaskHomeComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
