import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SprintuploadService } from '../services/sprintupload.service'
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';
import { MatDialog } from '@angular/material';
import { AddArtifactComponent } from '../add-artifact/add-artifact.component';
import { AddSprintComponent } from '../add-sprint/add-sprint.component';
import { Sprint } from '../services/tasks';
import { ProductBacklog } from '../services/backlog';

@Component({
  selector: 'app-sprintupload',
  templateUrl: './sprintupload.component.html',
  styleUrls: ['./sprintupload.component.css']
})
export class SprintuploadComponent implements OnInit {
  projectname: String = localStorage.getItem('projectname');
  description: String = localStorage.getItem('projectdesc');
  show = 2;
  show1=2;
  show2=2;


  fileToBeUpload: File

  private load = false;
  private loadartifact = false;
  private owner = JSON.parse(localStorage.getItem('members'))
  private ownername = this.owner[0].username;
  private showArt = false;
  private showSp = false;
  private showEmpty = true;
  private sprintname: String;
  private len : number;
  private len1 : number;
  private len2 : number;
  private artifactname: String;
  private productBacklog = JSON.parse(localStorage.getItem('productbacklog'));
 





  constructor(private sprint: SprintuploadService, private formBuilder: FormBuilder, private router: Router, public nav: NavbarService,
    public dialog: MatDialog) { }

  ngOnInit() {

    if(localStorage.getItem('userName')==null){
      this.router.navigate(['/']);
    }else{
      var projectId = localStorage.getItem('projectid');
      this.nav.show();
      this.sprint.fetchProjectByID({ projectId }).subscribe((res) => {
        console.log(res);
        localStorage.setItem('artifactsname', JSON.stringify(res.sprint.artifacts))
        localStorage.setItem('sprints', JSON.stringify(res.sprint.sprints))
        localStorage.setItem('backlogitem',JSON.stringify(res.sprint.productBacklog))
        this.artifactname = JSON.parse(localStorage.getItem('artifactsname'));
        this.sprintname = JSON.parse(localStorage.getItem('sprints'));
        this.productBacklog= JSON.parse(localStorage.getItem('backlogitem'));
        this.len1 = this.artifactname.length;
        this.len = this.sprintname.length;
        this.len2 = this.productBacklog.length;
      })
    }
    

  }


  downloadArtifacts(fileid) {
    console.log(fileid);
    console.log(localStorage.getItem('projectid'));
    const formData = new FormData();
    formData.append('artifactID', fileid);
    formData.append('projectID', localStorage.getItem('projectid'))
    var request = {
      "artifactID": fileid,
      "projectID": localStorage.getItem('projectid')
    }

    this.sprint.downLoadArtifactsFile(request).subscribe(data => this.displayDownloadedFile(data, request.artifactID)),
      error => console.log('Error downloading the file.'),
      () => console.info('OK');
  }



  displayDownloadedFile(data: Blob, name: string) {

    console.log(name);
    console.log(name.split('-'));

    var newName = name.split('-')[0];
    console.log(newName);

    const blob = new Blob([data]);
    const url = window.URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = url;
    a.download = newName;//this.substring(name);
    a.click();

    //window.open(url);
  }
  substring(name: string): string {
    var temp = name.split("-");
    return temp[temp.length - 1];
  }

  extractSprint(sprintId) {
    localStorage.setItem('currentSprint',sprintId);
    console.log(sprintId);
    this.sprint.getSprint({ sprintId });
    // this.sprint.getSprint({ sprintId }).subscribe((res) => {
    //   console.log(res.sprint);
    //   localStorage.setItem('response', JSON.stringify(res.sprint));
    //   let sprint = new Sprint(res.sprint);
    //   console.log(sprint);
    //   console.log(res);
    //   if(res['status']){
    //     this.router.navigate(['/kanban']);
       
    //   }
    // });
  }

  extractProduct(productbacklogid){

      var productBacklogId = {
        "productBacklogId" : productbacklogid
      }
      this.sprint.getBacklog(productBacklogId).subscribe((res)=>{
        console.log(res);
        localStorage.setItem('responsebacklog',JSON.stringify(res.productbacklog));

        let backlog = new ProductBacklog(JSON.parse(localStorage.getItem('responsebacklog')));
        localStorage.setItem('backlogname',backlog.pbName);
        if(res['status']){
          this.router.navigate(['/backlog']);
        }
      })
  }

  // sprintdisplay(){

  //   if(this.load==true){
  //     this.load=false;
  //     console.log('false')
  //   }else{
  //     this.load=true;
  //   }

  // }

  // artifactdisplay(){
  //   if(this.loadartifact==true){
  //     this.loadartifact=false; 
  //   }else{
  //     this.loadartifact=true;
  //   }
  // }

  addArtifact() {
    const dialogRef = this.dialog.open(AddArtifactComponent, {
      width: '280px',
      height: '280px'
    })

  }

  addSprint() {
    const dialogRef = this.dialog.open(AddSprintComponent, {
      height: '500px',
      width: '400px',
    })
  }

  showArtifact() {
    var projectId = localStorage.getItem('projectid');
    console.log(projectId);
    this.sprint.fetchProjectByID({ projectId }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('artifactsname', JSON.stringify(res.sprint.artifacts))
      this.artifactname = JSON.parse(localStorage.getItem('artifactsname'));
      this.len1 = this.artifactname.length;
      console.log(this.artifactname);
    })

    if (this.showArt == false) {
      this.showArt = true;
      this.showSp = false;
      this.showEmpty = false;
    }
  }

  showSprint() {
    if (this.showSp == false) {
      this.showSp = true;
      this.showArt = false;
      this.showEmpty = false;
      this.sprintname = JSON.parse(localStorage.getItem('sprints'));
      this.len = this.sprintname.length;
      console.log(this.sprintname);
    }
  }
}



