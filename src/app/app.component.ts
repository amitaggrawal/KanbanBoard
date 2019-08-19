import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { ConnectionService } from './services/connection.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kanban';
  
  fileName = 'this file';

  constructor(private _formBuilder: FormBuilder, private sendFileService: ConnectionService) {

  }

  uploadFileForm = this._formBuilder.group({
    file: []
  })

  onSubmit() {
    console.log(this.uploadFileForm.value);

    this.sendFileService.addFile(this.uploadFileForm.value).subscribe( (response) => {
      console.log(response);
    })

  }

  onChange(event) {
    
    if (event.target.files.length > 0) {
      this.uploadFileForm['file'] = event.target.files[0];
    }

    console.log(event);
    console.log(event.target.files);

  }
}
