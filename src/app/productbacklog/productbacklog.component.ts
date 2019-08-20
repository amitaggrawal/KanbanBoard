import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductBacklog, Features, Story } from '../services/backlog';
import { BacklogService } from '../services/backlog.service'
import { NavbarService } from '../services/navbar.service';
import { MatDialog } from '@angular/material';
import { TodopopupComponent } from '../todopopup/todopopup.component';
import { TasksService } from '../services/tasks.service';
import { Task } from '../services/tasks';


@Component({
  selector: 'app-productbacklog',
  templateUrl: './productbacklog.component.html',
  styleUrls: ['./productbacklog.component.css']
})
export class ProductbacklogComponent implements OnInit {


  constructor(private _features: BacklogService, public nav: NavbarService, public dialog: MatDialog, private _taskService: TasksService) { }
  featureList: Features[];
  storyList: Story[];
  showDivision;
  storyFeature: string;
  story_number: string;
  description: string;
  backlogname  = localStorage.getItem('backlogname');
  show = false;

  tasksPB = [];

  ngOnInit() {
    this.featureList = this._features.getBacklog();

    // this._taskService.newTaskAdded.subscribe((result) => {
    //   this.tasksPB = result;
    //   console.log('this is updating on new values' + this.tasksPB);
    // })
    console.log(this.featureList);
    this.nav.show();
    this.showDivision = false;

  }

  change(stories: any, features: string) {
    localStorage.setItem('story_number', stories.story_number);
    console.log(localStorage.getItem('story_number'));
    this.showDivision = true;
    console.log(stories, features);
    this.storyFeature = features;
    this.story_number = stories.story_number;
    this.description = stories.description;
  }

  todoPopup() {
    const dialogRef = this.dialog.open(TodopopupComponent, {
      height: '500px',
      width: '400px'

    })

    dialogRef.afterClosed().subscribe(() => {
      this.tasksPB = this._taskService.getTodo();
      this.show = true;
    })

    
  }

  save(){
    this.show=false;
  }

}
