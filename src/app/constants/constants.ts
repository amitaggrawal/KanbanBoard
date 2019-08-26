export enum Constants {
    baseURLLocal = "http://localhost:7000/",
    baseURL = "http://192.168.43.91:7000/",
    loginAPIEndPoint = "login/api/login",
    registerAPIEndPoint = "register/api/register",
    getProjectAPIEndPoint = "get-project/api/get-projects",
    getProjectByIdAPIEndPoint = "project/api/project",
}

export enum HttpError {

    invalidLogin = "Invalid username or password",
    userAlreadyRegistered = "User is already registered",
}

export enum LocalStorageKey {
    authenticated = "authenticated",
    user = "user",
    projects = "projects",
    projectDetails = "project-details"
}