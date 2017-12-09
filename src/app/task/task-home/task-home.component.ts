import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {NewTaskComponent} from "../new-task/new-task.component";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  "taskLists": Array<Object> = [
    {
      "name": "待办",
      "projectId": "Sk2HaTagb",
      "order": 1,
      "id": "BkenST66lb",
      "tasks": [
        {
          "desc": "吃晚餐",
          "taskListId": "BkenST66lb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": true,
          "participantIds": [
            "BkkDvwee-",
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": null,
          "reminder": null,
          "createDate": "2017-05-17T14:10:01.159Z",
          "priority": 3,
          "order": 1,
          "remark": "",
          "id": 1
        },
        {
          "id": 2,
          "desc": "赶快出发去万达",
          "taskListId": "SkG3Ba6Tgb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": false,
          "participantIds": [
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": "2017-06-12T16:00:00.000Z",
          "reminder": "2017-07-18T16:00:00.000Z",
          "createDate": "2017-05-19T10:03:58.794Z",
          "priority": 2,
          "order": 2,
          "remark": "something"
        }]
    },
    {
      "name": "已完成",
      "projectId": "Sk2HaTagb",
      "order": 3,
      "id": "SkG3Ba6Tgb",
      "tasks": [
        {
          "desc": "吃晚餐",
          "taskListId": "BkenST66lb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": true,
          "participantIds": [
            "BkkDvwee-",
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": null,
          "reminder": null,
          "createDate": "2017-05-17T14:10:01.159Z",
          "priority": 3,
          "order": 1,
          "remark": "",
          "id": 1
        },
        {
          "id": 2,
          "desc": "赶快出发去万达",
          "taskListId": "SkG3Ba6Tgb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": false,
          "participantIds": [
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": "2017-06-12T16:00:00.000Z",
          "reminder": "2017-07-18T16:00:00.000Z",
          "createDate": "2017-05-19T10:03:58.794Z",
          "priority": 2,
          "order": 2,
          "remark": "something"
        }, {
          "id": 2,
          "desc": "赶快出发去万达",
          "taskListId": "SkG3Ba6Tgb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": false,
          "participantIds": [
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": "2017-06-12T16:00:00.000Z",
          "reminder": "2017-07-18T16:00:00.000Z",
          "createDate": "2017-05-19T10:03:58.794Z",
          "priority": 2,
          "order": 2,
          "remark": "something"
        }, {
          "id": 2,
          "desc": "赶快出发去万达",
          "taskListId": "SkG3Ba6Tgb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": false,
          "participantIds": [
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": "2017-06-12T16:00:00.000Z",
          "reminder": "2017-07-18T16:00:00.000Z",
          "createDate": "2017-05-19T10:03:58.794Z",
          "priority": 2,
          "order": 2,
          "remark": "something"
        }, {
          "id": 2,
          "desc": "赶快出发去万达",
          "taskListId": "SkG3Ba6Tgb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": false,
          "participantIds": [
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": "2017-06-12T16:00:00.000Z",
          "reminder": "2017-07-18T16:00:00.000Z",
          "createDate": "2017-05-19T10:03:58.794Z",
          "priority": 2,
          "order": 2,
          "remark": "something"
        }, {
          "id": 2,
          "desc": "赶快出发去万达",
          "taskListId": "SkG3Ba6Tgb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": false,
          "participantIds": [
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": "2017-06-12T16:00:00.000Z",
          "reminder": "2017-07-18T16:00:00.000Z",
          "createDate": "2017-05-19T10:03:58.794Z",
          "priority": 2,
          "order": 2,
          "remark": "something"
        }, {
          "id": 2,
          "desc": "赶快出发去万达",
          "taskListId": "SkG3Ba6Tgb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": false,
          "participantIds": [
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": "2017-06-12T16:00:00.000Z",
          "reminder": "2017-07-18T16:00:00.000Z",
          "createDate": "2017-05-19T10:03:58.794Z",
          "priority": 2,
          "order": 2,
          "remark": "something"
        }, {
          "id": 2,
          "desc": "赶快出发去万达",
          "taskListId": "SkG3Ba6Tgb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": false,
          "participantIds": [
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": "2017-06-12T16:00:00.000Z",
          "reminder": "2017-07-18T16:00:00.000Z",
          "createDate": "2017-05-19T10:03:58.794Z",
          "priority": 2,
          "order": 2,
          "remark": "something"
        }, {
          "id": 2,
          "desc": "赶快出发去万达",
          "taskListId": "SkG3Ba6Tgb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": false,
          "participantIds": [
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": "2017-06-12T16:00:00.000Z",
          "reminder": "2017-07-18T16:00:00.000Z",
          "createDate": "2017-05-19T10:03:58.794Z",
          "priority": 2,
          "order": 2,
          "remark": "something"
        }]
    },
    {
      "name": "进行中",
      "projectId": "Hya1moGb-",
      "order": 2,
      "id": "BkWpk7jGZb",
      "tasks": [
        {
          "desc": "吃晚餐",
          "taskListId": "BkenST66lb",
          "ownerId": "37489e0c-df34-c261-71c4-ce75357e3035",
          "completed": true,
          "participantIds": [
            "BkkDvwee-",
            "37489e0c-df34-c261-71c4-ce75357e3035"
          ],
          "dueDate": null,
          "reminder": null,
          "createDate": "2017-05-17T14:10:01.159Z",
          "priority": 3,
          "order": 1,
          "remark": "",
          "id": 1
        },
        {
          "id": 3,
          "desc": "什么情况啊",
          "taskListId": "BkenST66lb",
          "ownerId": "BkkDvwee-",
          "completed": false,
          "participantIds": [],
          "dueDate": "2017-06-15T16:00:00.000Z",
          "reminder": "2017-06-21T16:00:00.000Z",
          "createDate": "2017-05-23T08:21:04.445Z",
          "priority": 1,
          "remark": ""
        },
        {
          "taskListId": "BylTyXiM-b",
          "desc": "登录鉴权过程中需携带 token 访问 API",
          "completed": false,
          "ownerId": "BkkDvwee-",
          "participantIds": [],
          "dueDate": "2017-07-03T16:00:00.000Z",
          "priority": 2,
          "remark": "",
          "reminder": "2017-06-27T16:00:00.000Z",
          "createDate": "2017-05-24T06:11:05.625Z",
          "id": 4
        },
        {
          "id": 3,
          "desc": "什么情况啊",
          "taskListId": "BkenST66lb",
          "ownerId": "BkkDvwee-",
          "completed": false,
          "participantIds": [],
          "dueDate": "2017-06-15T16:00:00.000Z",
          "reminder": "2017-06-21T16:00:00.000Z",
          "createDate": "2017-05-23T08:21:04.445Z",
          "priority": 1,
          "remark": ""
        }]
    }
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }
}
