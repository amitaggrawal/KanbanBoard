import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SprintuploadService } from '../services/sprintupload.service';
import { Sprint } from '../services/tasks';
import{ NavbarService } from '../services/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CreateprojectComponent} from '../createproject/createproject.component';
import { LoginService } from '../services/login.service';
import { User } from '../Authentication/user.model';


@Component({
  selector: 'app-createprojectpage',
  templateUrl: './createprojectpage.component.html',
  styleUrls: ['./createprojectpage.component.css']
})
export class CreateprojectpageComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('user'));

  username: String = localStorage.getItem('userName');
  private ownername;
  private project =  this.user.projects;//JSON.parse(localStorage.getItem('projects'));

  constructor(private router: Router, private uploadService : SprintuploadService, public nav : NavbarService,
    private dialog: MatDialog, private logService : LoginService ) {

  }
  ngOnInit() {

    if(localStorage.getItem('user')==null){
      this.router.navigate(['/'])
    }else{

      this.nav.show();
    //console.log(this.project)
    var user = {
      "username" : this.username
    }
    this.logService.fetchProjects(user).subscribe((res)=>{
      console.log(res.projects);
      localStorage.setItem('projects',JSON.stringify(res.projects));
      this.project = JSON.parse(localStorage.getItem('projects'));
      console.log(res);
    })

    }
    
  }

 
  //owner = this.project[0]['projectName'];  
  private loadComponent = false;

 

  viewForms() {
    if (this.loadComponent == true) {
      this.loadComponent = false;
    }
    this.loadComponent = true;
  }
  fetchproject(projectId){
    console.log(projectId)
    // const data = {
    //   "projectId" : id
    // }
    this.uploadService.fetchProjectByID({projectId}).subscribe((res)=>{
      console.log(res)
      console.log(res.sprint.projectDescription)
      localStorage.setItem('projectdesc',res.sprint.projectDescription)
      console.log(res.sprint.projectName)
      localStorage.setItem('projectname',res.sprint.projectName)
      console.log(res.sprint.members)
      console.log(res.sprint.members[0].username)
      localStorage.setItem('members',JSON.stringify(res.sprint.members))
      console.log(res.sprint.artifacts)
      localStorage.setItem('artifacts',JSON.stringify(res.sprint.artifacts));
      console.log(res.sprint.sprints)
      localStorage.setItem('sprints',JSON.stringify(res.sprint.sprints));
      console.log(res.sprint['_id']);
      localStorage.setItem('projectid',res.sprint['_id'])
      localStorage.setItem('productbacklog',JSON.stringify(res.sprint.productBacklog))

      if (res['status']) {
        this.router.navigate(['/upload']);
      } else {
        this.router.navigate(['/welcome']);
      }




    })

  }

loadForm(){
    const dialogRef = this.dialog.open(CreateprojectComponent,{
      width:'400px',
      height:'400px'
    });
}

}
