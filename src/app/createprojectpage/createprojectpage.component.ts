import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SprintuploadService } from '../services/sprintupload.service';
import { Sprint } from '../services/tasks';
import { NavbarService } from '../services/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateprojectComponent } from '../createproject/createproject.component';
import { LoginService } from '../services/login.service';
import { User } from '../Authentication/user.model';
import { LocalStorageKey } from '../constants/constants'
import GetProject from './get-project.service';
import { HelperUtil } from '../shared/helper.util';
import { Project } from '../Authentication/project.model';
import { stat } from 'fs';
import { Subscription } from 'rxjs';
import GetProjectById from './get-project-by-id.service';
import GetProjectService from './get-project.service';
import GetProjectByIdService from './get-project-by-id.service';


@Component({
  selector: 'app-createprojectpage',
  templateUrl: './createprojectpage.component.html',
  styleUrls: ['./createprojectpage.component.css']
})
export class CreateprojectpageComponent implements OnInit, OnDestroy {

  user: User = JSON.parse(localStorage.getItem(LocalStorageKey.user));
  private project: Project = this.user.projects;

  private projectAvailableSubscription$ = new Subscription();

  constructor(private router: Router, private uploadService: SprintuploadService,
    private dialog: MatDialog, private logService: LoginService, private _getProjectService: GetProjectService, 
    private _getProjectDetailService: GetProjectByIdService) {

  }
  ngOnInit() {

    if (this.project == undefined || this.project == null) {
      //@amitaggrawal: Show progress bar here. Handle from service.
      this._getProjectService.getProjects(this.user.username);
    }

    this.projectAvailableSubscription$ = this._getProjectService.projectsAvailable$.subscribe(status => {
      if (status) {
        //stop progress bar here.
        this.project = JSON.parse(HelperUtil.getFromLocalStorage(LocalStorageKey.projects));
      }
    });
  }

  ngOnDestroy() {
    if (this.projectAvailableSubscription$ != null) {
      this.projectAvailableSubscription$.unsubscribe();
    }
  }

  private loadComponent = false;

  viewForms() {
    if (this.loadComponent == true) {
      this.loadComponent = false;
    }
    this.loadComponent = true;
  }

  fetchproject(projectId) {
    this._getProjectDetailService.getProjectDetails(projectId);
  }

  loadForm() {
    const dialogRef = this.dialog.open(CreateprojectComponent, {
      width: '400px',
      height: '400px'
    });
  }

}
