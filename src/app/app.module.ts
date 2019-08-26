import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileuploadComponent } from './Authentication/Login/fileupload/fileupload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Authentication/Login/login/login.component';
import { RegisterComponent } from './Authentication/Registration/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { CreateprojectpageComponent } from './createprojectpage/createprojectpage.component';
import { ProjectdashboardComponent } from './projectdashboard/projectdashboard.component';
import { SprintuploadComponent } from './sprintupload/sprintupload.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PopupComponent } from './popup/popup.component';
import { KanbanComponent } from './kanban/kanban.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLogComponent } from './navbar-log/navbar-log.component';
import { LogoutComponent } from './logout/logout.component';
import { SuccessComponent } from './success/success.component';
import { NavbarProComponent } from './navbar-pro/navbar-pro.component';
import { AddArtifactComponent } from './add-artifact/add-artifact.component';
import { AddSprintComponent } from './add-sprint/add-sprint.component';
import { UploadedComponent } from './uploaded/uploaded.component';
import { ProductbacklogComponent } from './productbacklog/productbacklog.component';
import { ExistsComponent } from './exists/exists.component';
import { CreatedComponent } from './created/created.component';
import { BoardComponent } from './board/board.component';

import { TodopopupComponent } from './todopopup/todopopup.component';
import { AuthService } from './Authentication/auth.service';
import { MaterialModule } from './material-module/material.module';
import { UIService } from './shared/ui.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FileuploadComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreateprojectComponent,
    CreateprojectpageComponent,
    ProjectdashboardComponent,
    SprintuploadComponent,
    KanbanComponent,
    PopupComponent,
    NavbarComponent,
    NavbarLogComponent,
    LogoutComponent,
    SuccessComponent,
    NavbarProComponent,
    AddArtifactComponent,
    AddSprintComponent,
    UploadedComponent,
    ProductbacklogComponent,
    ExistsComponent,
    CreatedComponent,
    BoardComponent,
  
    TodopopupComponent,
    FooterComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    MaterialModule
  ],
  providers: [AuthService, UIService],
  entryComponents: [PopupComponent, CreateprojectComponent, LogoutComponent, SuccessComponent, AddArtifactComponent,
    AddSprintComponent, UploadedComponent, ExistsComponent, CreatedComponent, BoardComponent, TodopopupComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
