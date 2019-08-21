import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task, Sprint } from '../services/tasks';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PopupComponent } from 'src/app/popup/popup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { NavbarService } from '../services/navbar.service';
import { SprintuploadService } from '../services/sprintupload.service';
import { Router } from '@angular/router';
import { BoardComponent } from '../board/board.component';


export interface DialogData {
  remainingEffort: number;
  task_id: string;
  user_story_id: string;
  initialEffort: number;
}

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  entryComponents: [PopupComponent]

})


export class KanbanComponent implements OnInit {

  constructor(private _taskService: TasksService, public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
    , public nav: NavbarService, private updateSprint: SprintuploadService, private router: Router) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/edit-icon.svg'));
  }


  todosprints: Task[];
  inprogresssprints: Task[];
  completedsprints: Task[];
  //task: Task;
  flag: boolean = false;
  loggedEffort1: number;
  remainingEffort1: number;
  finalSprint = [];
  saveshow = false;
  private sprintId;

  ngOnInit() {

    if(localStorage.getItem('userName')==null){
      this.router.navigate(['/']);
    }else{
      this.todosprints = this._taskService.getToDoTasks();
      this.inprogresssprints = this._taskService.getInprogressTasks();
      this.completedsprints = this._taskService.getCompletedTasks();
      console.log(this.inprogresssprints);
      this.flag = true;
      this.nav.show();
      console.log('to-do')
      console.log(this.todosprints);
      console.log('in-progress');
      console.log(this.inprogresssprints);
      console.log('completed')
      console.log(this.completedsprints);
  
  }

   



  }

  openDialog(remainingEffort: number, task_id: string, user_story_id: string, initialEffort: number): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '300px',
      data: { remainingEffort: remainingEffort, task_id: task_id, user_story_id: user_story_id, initialEffort: initialEffort }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result != null) {
        console.log(result);
        this._taskService.logeffort(result.initialEffort, result.task_id, result.user_story_id, result.remainingEffort);
      }

      this.todosprints = this._taskService.getToDoTasks();
      this.inprogresssprints = this._taskService.getInprogressTasks();
      this.completedsprints = this._taskService.getCompletedTasks();
    });
  }

  reload() {
    window.location.reload();
  }
  drop(event: CdkDragDrop<string[]>, user_story: string) {
    // console.log(event)
    // console.log(user_story)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // console.log('in if')
      // console.log(event.container.data[event.currentIndex]);
    } else {
      // console.log('transferred')
      // console.log(event.previousContainer);
      // console.log(event.container);
      // console.log(this.todosprints);
      // console.log(this.inprogresssprints);
      // console.log(this.completedsprints);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(event.container.data)
      console.log(event.container.data[event.currentIndex]);
      var currentdate = new Date();
      var lasttime = + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
      event.container.data[event.currentIndex]['modifiedAt'] = lasttime;
      event.container.data[event.currentIndex]['modifiedBy'] = localStorage.getItem('userName');
      for (let i = 0; i < this.todosprints.length; i++) {
        this.todosprints[i].stat = "to-do";
      }
      for (let i = 0; i < this.inprogresssprints.length; i++) {
        this.inprogresssprints[i].stat = "in-progress";
      }
      for (let i = 0; i < this.completedsprints.length; i++) {
        this.completedsprints[i].stat = "completed"
      }
    }
    console.log(this.todosprints);
    console.log(this.inprogresssprints);
    console.log(this.completedsprints);
    this.saveshow = true;
  }

  saveBoard() {
    this.finalSprint = [];
    this.todosprints.forEach(element => {
      this.finalSprint.push(element);
    });

    this.inprogresssprints.forEach(element => {
      this.finalSprint.push(element);
    });
    this.completedsprints.forEach(element => {
      this.finalSprint.push(element);
    });
    // this.finalSprint.push(this.todosprints);
    // this.finalSprint.push(this.inprogresssprints);
    // this.finalSprint.push(this.completedsprints);
    console.log(this.finalSprint);
    var updatedSprint = {
      "sprintId": localStorage.getItem("currentSprint"),
      "sprintData": this.finalSprint
    }
    this.updateSprint.updateSprint(updatedSprint).subscribe(res => {
      console.log(res);
    })
    this.router.navigate(['/upload']);
    const dialogRef = this.dialog.open(BoardComponent);


  }

}
