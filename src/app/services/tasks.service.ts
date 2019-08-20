import { Injectable } from '@angular/core';
import { Task, Sprint } from '../services/tasks'
import { KanbanComponent } from '../kanban/kanban.component';
import { Subject } from 'rxjs';
import { SprintuploadService } from './sprintupload.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  sprintData;
  
  constructor(private sprintUpload: SprintuploadService) {
    console.log('this is service constructor');
    this.getTasksFromServer();
  }

  stories;

  todotasklist: Task[] = [];
  todouserlist: Task[] = [];

  inprogresstasklist: Task[] = [];
  inprogressuserlist: Task[] = [];

  completedtasklist: Task[] = [];
  completeduserlist: Task[] = [];

  todotask: Task[] = [];


  getTasksFromServer() {
    this.sprintData = localStorage.getItem('response');
    this.stories = new Sprint(JSON.parse(this.sprintData)).stories

    this.sprintUpload.newSprintDataAvailable.subscribe(() => {
      this.sprintData = localStorage.getItem('response');
      this.stories = new Sprint(JSON.parse(this.sprintData)).stories
    })

    //console.log(JSON.parse(this.sprintData));
    
   
  }
  getToDoTasks(): Task[] {

    const storylist: Task[] = this.stories; //replace at backend
    this.todotasklist = [];
    this.todouserlist = []
    for (let a = 0; a < storylist.length; a++) {
      if (storylist[a].stat === 'to-do') {
        this.todotasklist.push(storylist[a]);
      }
    }
    // userstory.user_story_id = storylist[a].user_story_id;
    // userstory.task = this.todotasklist;
    // this.todouserlist.push(userstory);

    return this.todotasklist;
  }

  getInprogressTasks(): Task[] {
    const stories: Task[] = this.stories; //replace at backend

    this.inprogressuserlist = [];
    this.inprogresstasklist = [];
    for (let a = 0; a < stories.length; a++) {
      if (stories[a].stat === 'in-progress') {
        this.inprogresstasklist.push(stories[a]);
      }
    }
    // userstory.user_story_id = stories[a].user_story_id;
    // userstory.task = this.inprogresstasklist;
    // this.inprogressuserlist.push(userstory);
    return this.inprogresstasklist;
  }

  getCompletedTasks(): Task[] {
    const stories: Task[] = this.stories; //replace at backend

    this.completeduserlist = [];
    this.completedtasklist = [];
    for (let a = 0; a < stories.length; a++) {
      if (stories[a].stat === 'completed') {
        this.completedtasklist.push(stories[a]);
      }
    }

    return this.completedtasklist;
  }

  logeffort(effort: number, task_id: string, user_story_id: string, remainingEffort: number) {
    const stories: Task[] = this.stories;

    for (let a = 0; a < stories.length; a++) {
      if (stories[a].task_id === task_id && stories[a].user_story_id === user_story_id) {
        var r = remainingEffort;
        stories[a].efforts_remaining = +r;
        if (stories[a].efforts_remaining === 0) {
          console.log(stories[a].efforts_remaining);
          stories[a].stat = 'completed';
          console.log('Printing after pushing in array: ', this.completedtasklist);

        } else if (stories[a].efforts_remaining > 0 && stories[a].efforts_remaining < stories[a].initial_effort_estimate) {
          stories[a].stat = 'in-progress';
        } else if (stories[a].efforts_remaining === stories[a].initial_effort_estimate) {
          stories[a].stat = 'to-do';
        } else {
          console.log('invalid input');
        }

      }

    }

    // for (let a = 0; a < stories.length; a++) {
    //   if (stories[a].efforts_remaining === 0) {
    //     console.log(stories[a].efforts_remaining);
    //     stories[a].stat = 'completed';
    //     this.completedtasklist.push(stories[a]);

    //     console.log('Printing after pushing in array: ', this.completedtasklist);

    //   } else if (stories[a].efforts_remaining > 0 && stories[a].efforts_remaining < stories[a].initial_effort_estimate) {
    //     stories[a].stat = 'in-progress';
    //     console.log(stories[a].efforts_remaining);
    //   }
    //   else if (stories[a].efforts_remaining === stories[a].initial_effort_estimate) {
    //     stories[a].stat = 'to-do';
    //     console.log(stories[a].efforts_remaining);
    //   } else {
    //     console.log(stories[a].efforts_remaining);
    //   }
    //   // console.log(stories[a].efforts_remaining);
    //   console.log(stories[a].user_story_id + " : " + stories[a].task_id + " : " + stories[a].initial_effort_estimate + " : " + stories[a].efforts_remaining + " : " + stories[a].stat)
    // }
    // console.log(this.getCompletedTasks())
    // this.getCompletedTasks();
    // this.getInprogressTasks();
    // this.getToDoTasks();
  }

  newTaskAdded = new Subject();

  addToDo(task: Task){
    this.todotask.push(task);
    // this.newTaskAdded.next(this.todotask);
  }

  getTodo(){
    console.log(this.todotask)
    return this.todotask;

  }
}
