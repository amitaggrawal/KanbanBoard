import { HomeComponent } from './app/home/home.component';
import { FileuploadComponent } from './app/Authentication/Login/fileupload/fileupload.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/Authentication/Login/login/login.component';
import { RegisterComponent } from './app/Authentication/Registration/register/register.component';
import { CreateprojectComponent } from './app/createproject/createproject.component';
import { CreateprojectpageComponent } from './app/createprojectpage/createprojectpage.component';
import { ProjectdashboardComponent } from './app/projectdashboard/projectdashboard.component';
import { KanbanComponent }  from '../src/app/kanban/kanban.component';
import { SprintuploadComponent } from '../src/app/sprintupload/sprintupload.component';
import { ProductbacklogComponent } from "../src/app/productbacklog/productbacklog.component";



const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full' ,
  },
  {
    path:'home', component:HomeComponent,
  },
  {
    path:'login', component:LoginComponent,
    
  },
  {
    path:'register', component: RegisterComponent,
  },
  {
    path:'upload', component: SprintuploadComponent,
  },
  {
    path: 'create', component: CreateprojectComponent,
  },
  {
      path: 'welcome', component: CreateprojectpageComponent,
  },
  {
    path: 'dashboard', component:ProjectdashboardComponent,
  },
  {
    path:'kanban', component:KanbanComponent,
  },
  {
    path:'backlog', component: ProductbacklogComponent,
  }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
