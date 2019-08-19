import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})

export class FileuploadComponent implements OnInit {

  fileName = 'this file';
  fileToBeUpload: File
  ngOnInit() {

  }

  constructor(private _formBuilder: FormBuilder, private sendFileService: ConnectionService) {

  }

  uploadFileForm = this._formBuilder.group({
    file: []
  })

  onSubmit() {
    console.log(this.uploadFileForm.value);

    const formData = new FormData();
    formData.append('file', this.fileToBeUpload);

    this.sendFileService.addFile(formData).subscribe((response) => {
      console.log(response);
      
    })

  }

  onChange(event) {

    if (event.target.files.length > 0) {
      this.fileToBeUpload = event.target.files[0];
    }
  }
}
