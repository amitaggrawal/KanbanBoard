import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileuploadComponent } from './Authentication/Login/fileupload/fileupload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Authentication/Login/login/login.component';
import { RegisterComponent } from './Authentication/Registration/register/register.component';
import {  MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule, MatExpansionModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { CreateprojectpageComponent } from './createprojectpage/createprojectpage.component';
import { ProjectdashboardComponent } from './projectdashboard/projectdashboard.component';
import { SprintuploadComponent } from './sprintupload/sprintupload.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PopupComponent } from './popup/popup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KanbanComponent } from './kanban/kanban.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLogComponent } from './navbar-log/navbar-log.component';
import { LogoutComponent } from './logout/logout.component';
import { SuccessComponent } from './success/success.component';
import { NavbarProComponent } from './navbar-pro/navbar-pro.component';
import { AddArtifactComponent } from './add-artifact/add-artifact.component';
import { AddSprintComponent } from './add-sprint/add-sprint.component';
import { UploadedComponent } from './uploaded/uploaded.component';
import {MatRadioModule} from '@angular/material/radio';
import { ProductbacklogComponent } from './productbacklog/productbacklog.component';
import { ExistsComponent } from './exists/exists.component';
import { CreatedComponent } from './created/created.component';
import { BoardComponent } from './board/board.component';
import { NavbarKanbanComponent } from './navbar-kanban/navbar-kanban.component';
import { TodopopupComponent } from './todopopup/todopopup.component';











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
    NavbarKanbanComponent,
    TodopopupComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    AppRoutingModule,
    CustomMaterialModule,
    MatExpansionModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatToolbarModule,
    DragDropModule,
    MatSliderModule,
    MatDialogModule,
    MatTableModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MaterialFileInputModule,
    MatIconModule,

  ],
  providers: [],
  entryComponents : [PopupComponent, CreateprojectComponent,LogoutComponent, SuccessComponent,AddArtifactComponent,
    AddSprintComponent, UploadedComponent, ExistsComponent,CreatedComponent,BoardComponent,TodopopupComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
