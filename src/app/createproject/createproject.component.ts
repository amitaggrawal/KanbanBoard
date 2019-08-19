import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterModule } from '../Authentication/Registration/register/register.module';
import { CreateModule } from './create.module';
import { CreateService } from '../services/create.service';
import { Router} from  '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CreatedComponent } from '../created/created.component';


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  projectForm :FormGroup;
  user : CreateModule = new CreateModule;
  error_msg: string;
  constructor(private create : CreateService, private formbuilder : FormBuilder, public router : Router, private dialog: MatDialog, public dialogRef: MatDialogRef<CreateprojectComponent>,) { }

  ngOnInit() {
    this.projectForm = this.formbuilder.group({
      'projectName': [this.user.projectname,[Validators.required]],
      'projectDescription' : [this.user.projectdesc,[Validators.required, Validators.minLength(15)]],
      'userId': localStorage.getItem('userId'),
      'username' : localStorage.getItem('userName')

    })
  }


createProject(){
  console.log(this.projectForm.value)
  this.create.createProjects(this.projectForm.value).subscribe((res)=> {
    console.log(res)
    console.log(res.id);
    if (res == false) {
      this.error_msg = "Invalid username or password";
    }else{
      var projId = res.id;
      localStorage.setItem('projectID', projId)
    }

    if (res['status']) {
        const dialg = this.dialog.open(CreatedComponent)
    }else{
      this.router.navigate(['/']);
    }
  })
}

onNoClick():void{
  this.dialogRef.close();
}


}
