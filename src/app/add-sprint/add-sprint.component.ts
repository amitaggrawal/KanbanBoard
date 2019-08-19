import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SprintuploadService } from '../services/sprintupload.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Sprint } from '../sprintupload/sprint.module';
import { UploadedComponent } from '../uploaded/uploaded.component';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.css']
})
export class AddSprintComponent implements OnInit {
  sprintUpload : FormGroup;
  fileToBeUpload : File;
  constructor(private formBuilder: FormBuilder,public matdialog: MatDialog , private sprint : SprintuploadService, public dialogRef : MatDialogRef<AddSprintComponent>) { }
  user : Sprint = new Sprint();
  ngOnInit() {
    this.sprintUpload = this.formBuilder.group({
      'sprintName' : [this.user.sprintname,Validators.required],
      'sprintDescription' : [this.user.sprintdesc, Validators.required],
      'noOfDays': [this.user.noOfDays,Validators.required],
      'type' :[this.user.type,Validators.required],
      'fileUpload' : [],
      'projectID' : localStorage.getItem('projectid')
    
    })
  }

  onSubmit(){
    console.log(this.sprintUpload.value);
    console.log(this.sprintUpload.value['sprintName']);
    const formData = new FormData();
    formData.append('file', this.fileToBeUpload);
    formData.append('name', this.sprintUpload.value['sprintName'])
    formData.append('description', this.sprintUpload.value['sprintDescription'])
    formData.append('noOfDays',this.sprintUpload.value['noOfDays'])
    formData.append('type',this.sprintUpload.value['type'])
    formData.append('projectID', localStorage.getItem('projectid'))

    this.sprint.uploadSprintfile(formData).subscribe((res)=>{
      console.log(res);
      var sprintid = res.sprint_id;
      localStorage.setItem('sprintID',sprintid);
      if(res['status']){
        this.matdialog.open(UploadedComponent,{
          width:'300px',
          height:'100px'
        })
      }
   })
  }

  onChange(event){
    if(event.target.files.length > 0){
      this.fileToBeUpload = event.target.files[0];
    }
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
