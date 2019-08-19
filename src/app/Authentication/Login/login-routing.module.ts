import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { AuthGuard} from './auth/auth.guard'



const routes: Routes = [
  {
  path: 'login',
    component: LoginComponent,
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'upload', component: FileuploadComponent }
         
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
