import { Project } from './project.model';

// @amitaggrawal: This model holds value returned from server on successful login.
export interface User{
    _id: string;
    username: string;
    projects: Project;

}

export interface AuthenticationSuccessResponse{
    status: boolean;
    msg: string;
    user?: User;
}
