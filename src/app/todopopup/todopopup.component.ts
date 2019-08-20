import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from './todo.module';
import { Task } from '../services/tasks';
import { DialogData } from '../kanban/kanban.component';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todopopup',
  templateUrl: './todopopup.component.html',
  styleUrls: ['./todopopup.component.css']
})
export class TodopopupComponent implements OnInit {
  addTodoTask: FormGroup;
  user: Todo = new Todo();
  todotasklist: Task[] = [];
  todo: Task;

  constructor(public dialogRef: MatDialogRef<TodopopupComponent>, private formbuilder: FormBuilder,
     private _taskService: TasksService, private router : Router) {

  }

  ngOnInit() {
    this.addTodoTask = this.formbuilder.group({
      'taskID': [this.user.taskID, Validators.required],
      'taskDetails': [this.user.taskdetails, Validators.required],
      'volunteer': [this.user.volunteer, Validators.required],
      'effortEstimate': [this.user.effortestimate, Validators.required],
      'modifiedBy': "",
      'modifiedAt': "",
      'story_number': localStorage.getItem('story_number'),
      'stat': "to-do",
      'effortsRemaining': " "
    })


  }
  onNoClick() {
    this.dialogRef.close();
  }

  addTodo() {
    const formData = new Task();
    console.log(this.addTodoTask);
    formData.user_story_id = this.addTodoTask.value['story_number'],
      formData.task_id = this.addTodoTask.value['taskID'],
      formData.task_details = this.addTodoTask.value['taskDetails'],
      formData.volunteer = this.addTodoTask.value['volunteer'],
      formData.stat = this.addTodoTask.value['stat'],
      formData.initial_effort_estimate = this.addTodoTask.value['effortEstimate'],
      formData.efforts_remaining = this.addTodoTask.value['effortsRemaining'],
      formData.modifiedAt = this.addTodoTask.value['modifiedAt'],
      formData.modifiedBy = this.addTodoTask.value['modifiedBy']
    console.log(formData);
    this._taskService.addToDo(formData);
    this._taskService.getTodo();
    this.dialogRef.close();

  }

  getTodo(): Task[] {
    return this.todotasklist;
  }



}
