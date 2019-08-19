import { Component, OnInit } from '@angular/core';
import { SprintuploadService } from '../services/sprintupload.service';
import {FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router } from '@angular/router'
import { UploadedComponent } from '../uploaded/uploaded.component';

@Component({
  selector: 'app-add-artifact',
  templateUrl: './add-artifact.component.html',
  styleUrls: ['./add-artifact.component.css']
})
export class AddArtifactComponent implements OnInit {
  artifactToBeUpload : File;
  artifactUpload : FormGroup;
  constructor(private sprint : SprintuploadService,public matdialog: MatDialog ,public router:Router, private formBuilder : FormBuilder, public dialogRef: MatDialogRef<AddArtifactComponent>) { }

  ngOnInit() {
    this.artifactUpload = this.formBuilder.group({
      'artifactUpload' : [],
    })
  }
  onUpload(){
    console.log(this.artifactUpload.value)
    const formContent = new FormData();
    formContent.append('file', this.artifactToBeUpload);
    formContent.append('projectID',localStorage.getItem('projectid'))

    this.sprint.uploadArtifactsFile(formContent).subscribe((res)=>{
      console.log(res);
      if(res['status']){
        this.matdialog.open(UploadedComponent,{
          width:'300px',
          height:'100px'
        })
      }
      
    })

    

  }
    onChanges(event){
      if(event.target.files.length>0){
        this.artifactToBeUpload = event.target.files[0];
      }
    }

  onNoClick(){
    this.dialogRef.close();
  }
 

}
