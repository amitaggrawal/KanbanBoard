(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app-routing.module.ts":
/*!***********************************!*\
  !*** ./src/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_Authentication_Login_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/Authentication/Login/login/login.component */ "./src/app/Authentication/Login/login/login.component.ts");
/* harmony import */ var _app_Authentication_Registration_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/Authentication/Registration/register/register.component */ "./src/app/Authentication/Registration/register/register.component.ts");
/* harmony import */ var _app_createproject_createproject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/createproject/createproject.component */ "./src/app/createproject/createproject.component.ts");
/* harmony import */ var _app_createprojectpage_createprojectpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/createprojectpage/createprojectpage.component */ "./src/app/createprojectpage/createprojectpage.component.ts");
/* harmony import */ var _app_projectdashboard_projectdashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/projectdashboard/projectdashboard.component */ "./src/app/projectdashboard/projectdashboard.component.ts");
/* harmony import */ var _src_app_kanban_kanban_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/app/kanban/kanban.component */ "./src/app/kanban/kanban.component.ts");
/* harmony import */ var _src_app_sprintupload_sprintupload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/app/sprintupload/sprintupload.component */ "./src/app/sprintupload/sprintupload.component.ts");











var routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full',
    },
    {
        path: 'home', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    },
    {
        path: 'login', component: _app_Authentication_Login_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    },
    {
        path: 'register', component: _app_Authentication_Registration_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
    },
    {
        path: 'upload', component: _src_app_sprintupload_sprintupload_component__WEBPACK_IMPORTED_MODULE_10__["SprintuploadComponent"],
    },
    {
        path: 'create', component: _app_createproject_createproject_component__WEBPACK_IMPORTED_MODULE_6__["CreateprojectComponent"],
    },
    {
        path: 'welcome', component: _app_createprojectpage_createprojectpage_component__WEBPACK_IMPORTED_MODULE_7__["CreateprojectpageComponent"],
    },
    {
        path: 'dashboard', component: _app_projectdashboard_projectdashboard_component__WEBPACK_IMPORTED_MODULE_8__["ProjectdashboardComponent"],
    },
    {
        path: 'kanban', component: _src_app_kanban_kanban_component__WEBPACK_IMPORTED_MODULE_9__["KanbanComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/Authentication/Login/auth/auth.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Authentication/Login/auth/auth.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return _this.isLoggedIn = true; }));
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Authentication/Login/fileupload/fileupload.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Authentication/Login/fileupload/fileupload.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhlbnRpY2F0aW9uL0xvZ2luL2ZpbGV1cGxvYWQvZmlsZXVwbG9hZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Authentication/Login/fileupload/fileupload.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Authentication/Login/fileupload/fileupload.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <input type=\"text\" (click)=\"downloadFile()\" value=\"{{fileName}}\" readonly> \n  \n  <form [formGroup]=\"uploadFileForm\" (ngSubmit)=\"onSubmit()\" method=\"POST\" enctype=\"multipart/form-data\">\n    <input type=\"file\" formControlName=\"file\" name=\"file\" (change)=\"onChange($event)\">\n    <input type=\"submit\" value=\"submit\">\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Authentication/Login/fileupload/fileupload.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Authentication/Login/fileupload/fileupload.component.ts ***!
  \*************************************************************************/
/*! exports provided: FileuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileuploadComponent", function() { return FileuploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/connection.service */ "./src/app/services/connection.service.ts");




var FileuploadComponent = /** @class */ (function () {
    function FileuploadComponent(_formBuilder, sendFileService) {
        this._formBuilder = _formBuilder;
        this.sendFileService = sendFileService;
        this.fileName = 'this file';
        this.uploadFileForm = this._formBuilder.group({
            file: []
        });
    }
    FileuploadComponent.prototype.ngOnInit = function () {
    };
    FileuploadComponent.prototype.onSubmit = function () {
        console.log(this.uploadFileForm.value);
        var formData = new FormData();
        formData.append('file', this.fileToBeUpload);
        this.sendFileService.addFile(formData).subscribe(function (response) {
            console.log(response);
        });
    };
    FileuploadComponent.prototype.onChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileToBeUpload = event.target.files[0];
        }
    };
    FileuploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fileupload',
            template: __webpack_require__(/*! ./fileupload.component.html */ "./src/app/Authentication/Login/fileupload/fileupload.component.html"),
            styles: [__webpack_require__(/*! ./fileupload.component.css */ "./src/app/Authentication/Login/fileupload/fileupload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]])
    ], FileuploadComponent);
    return FileuploadComponent;
}());



/***/ }),

/***/ "./src/app/Authentication/Login/login/login.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Authentication/Login/login/login.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider{\n    background-color:#3A43C7;\n}\n\n.divider:hover{\n    background-color:#494F9A;\n}\n\n.errormsg{\n    color: red;\n}\n\n.list-header-title{\n    text-align: center;\n}\n\n.accounts{\n    font-size:400%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    padding-left:42%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aGVudGljYXRpb24vTG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL0F1dGhlbnRpY2F0aW9uL0xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQTQzQzc7XG59XG5cbi5kaXZpZGVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzQ5NEY5QTtcbn1cblxuLmVycm9ybXNne1xuICAgIGNvbG9yOiByZWQ7XG59XG4ubGlzdC1oZWFkZXItdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFjY291bnRze1xuICAgIGZvbnQtc2l6ZTo0MDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6NDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Authentication/Login/login/login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Authentication/Login/login/login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<body style=\"height:80%;background-color:#f3eaea;\">\n<br>\n<br>\n<br>\n<br>\n<div class=\"medium-list\">\n<mat-card class=\"mat-elevation-z8\" style=\"background-color:#eeecec;width:70%;height:100%;margin:auto;\">\n  <div>\n    <div><mat-icon class=\"accounts\">account_circle</mat-icon></div>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginForm.valid && logUser()\" novalidate>\n      <div class=\"form-container\">\n        <mat-form-field>\n          <input id=\"username\" matInput type=\"number\" formControlName=\"username\"  placeholder=\"Enter your Employee\"/>\n          <mat-error *ngIf=\"userid.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input id=\"password\"\n                 matInput\n                 formControlName=\"password\"\n                 placeholder=\"Enter your password\"\n                 [type]=\"hide ? 'text':'password'\" />\n          <mat-icon matSuffix (click)=\"hide = !hide\">\n              {{hide ? 'visibility_off' : 'visibility'}}\n          </mat-icon>\n          <mat-error *ngIf=\"pass.invalid\">{{getPassErrorMessage()}}</mat-error>\n      </mat-form-field><br>\n        <button mat-button type=\"submit\"  class=\"mat-raised-button mat-primary\" [disabled]=\"!loginForm.valid\">Login</button><button mat-button routerLink=\"/register\" class=\"divider\">Not a member? Sign up</button>\n      </div>\n    </form>\n  </div>\n</mat-card>\n<div class = \"errormsg\" *ngIf=\"displayError==true\">\n  Invalid username and password!\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/Authentication/Login/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Authentication/Login/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.model */ "./src/app/Authentication/Login/login/login.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/Authentication/Login/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/navbar.service */ "./src/app/services/navbar.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, logService, nav) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.logService = logService;
        this.nav = nav;
        this.user = new _login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModule"]();
        this.userid = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.pass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.displayError = false;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.nav.show();
        this.loginForm = this.formBuilder.group({
            'username': [this.user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            'password': [this.user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]]
        });
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return this.userid.hasError('required') ? 'Employee ID is only a numeric' : '';
    };
    LoginComponent.prototype.getPassErrorMessage = function () {
        return this.pass.getError('required') ? 'Password is required/Minimum 6 characters' : '';
    };
    LoginComponent.prototype.logUser = function () {
        var _this = this;
        console.log(this.loginForm.value);
        this.logService.logUser(this.loginForm.value)
            .subscribe(function (res) {
            console.log(res);
            console.log(res.user['_id']);
            console.log(res.user['username']);
            console.log(res.user.projects);
            if (res.status == false) {
                _this.error_msg = "Invalid username or password";
                _this.displayError = true;
            }
            else {
                var user1 = res.user['_id'];
                var user2 = res.user['username'];
                localStorage.setItem('userId', user1);
                localStorage.setItem('userName', user2);
                localStorage.setItem('owner', JSON.stringify(res.user.projects));
            }
            if (res['status']) {
                _this.router.navigate(['/welcome']);
            }
            else {
                _this.router.navigate(['/']);
            }
        }, function (err) {
            console.log('in err block');
            console.log(err['status']);
            console.log(err['error']['msg']);
            var msg = err['error']['msg'];
            _this.errormessage = msg;
            _this.displayError = true;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Authentication/Login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Authentication/Login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_7__["NavbarService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Authentication/Login/login/login.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/Authentication/Login/login/login.model.ts ***!
  \***********************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/Authentication/Registration/register/register.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Authentication/Registration/register/register.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider{\n    background-color:#3A43C7;\n}\n\n.divider:hover{\n    background-color:#494F9A;\n}\n\n.mat-elevation-z8{\n    background-color:#eeecec;\n    width:70%;\n    height:100%;margin:auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aGVudGljYXRpb24vUmVnaXN0cmF0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUztJQUNULFdBQVcsQ0FBQyxXQUFXO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvQXV0aGVudGljYXRpb24vUmVnaXN0cmF0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQTQzQzc7XG59XG5cbi5kaXZpZGVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzQ5NEY5QTtcbn1cbi5tYXQtZWxldmF0aW9uLXo4e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2VlZWNlYztcbiAgICB3aWR0aDo3MCU7XG4gICAgaGVpZ2h0OjEwMCU7bWFyZ2luOmF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/Authentication/Registration/register/register.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Authentication/Registration/register/register.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<body style=\"height:80%;background-color:#f3eaea;\">\n<br>\n<br>\n<br>\n<div class=\"medium-list\">\n  \n      <mat-card class=\"mat-elevation-z8\">\n      <h4 style=\"text-align:center;\">Sign Up to Kanban Board</h4>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerForm.valid && onRegister()\" novalidate >\n        <div class=\"form-container\">\n          <mat-form-field>\n            <input id=\"username\" matInput type=\"number\" formControlName=\"username\"  placeholder=\"Enter your username\" required/>\n            <mat-hint>Username must be of atleast 6 characters</mat-hint>\n    \n          </mat-form-field><br>\n          \n          <mat-form-field>\n            <input id=\"password\" matInput formControlName=\"password\"  placeholder=\"Enter your password\"\n            [type] =\"hide ? 'text' : 'password'\" autocomplete=\"off\" />\n            <mat-icon matSuffix (click)=\"hide = !hide\">\n              {{hide ? 'visibility_off' : 'visibility'}}\n            </mat-icon>\n            <mat-hint>Password must be of 6 characters</mat-hint>\n          </mat-form-field><br>\n         \n          <button mat-button type=\"submit\" \n                  class=\"mat-raised-button mat-primary\" \n                  [disabled]=\"!registerForm.valid\">Register</button>\n<button mat-button routerLink=\"/login\" class=\"divider\">Already a member? Login</button>\n        </div>\n      </form>\n  </mat-card>\n\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/Authentication/Registration/register/register.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Authentication/Registration/register/register.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.module */ "./src/app/Authentication/Registration/register/register.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_success_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/success/success.component */ "./src/app/success/success.component.ts");









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, sendRegisterdata, nav, router, dialog) {
        this.formBuilder = formBuilder;
        this.sendRegisterdata = sendRegisterdata;
        this.nav = nav;
        this.router = router;
        this.dialog = dialog;
        this.user = new _register_module__WEBPACK_IMPORTED_MODULE_3__["RegisterModule"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.nav.show();
        this.registerForm = this.formBuilder.group({
            'username': [this.user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'password': [this.user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]]
        });
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        console.log(this.registerForm.value);
        this.sendRegisterdata.addRegister(this.registerForm.value).subscribe(function (response) {
            console.log(response);
            _this.router.navigate['/login'];
            var dialogRef = _this.dialog.open(src_app_success_success_component__WEBPACK_IMPORTED_MODULE_8__["SuccessComponent"]);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/Authentication/Registration/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/Authentication/Registration/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/Authentication/Registration/register/register.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Authentication/Registration/register/register.module.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/add-artifact/add-artifact.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-artifact/add-artifact.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1hcnRpZmFjdC9hZGQtYXJ0aWZhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/add-artifact/add-artifact.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-artifact/add-artifact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup] = \"artifactUpload\"  method=\"POST\" enctype = \"multipart/form-data\">\n  Upload your file here : <input type=\"file\" formControlName=\"artifactUpload\" (change) = \"onChanges($event)\"><br><br>\n<input type =\"submit\" value = \"Submit\" (click)=\"onUpload()\">\n<button (click)=\"onNoClick()\">Cancel</button>\n<hr>\n</form>"

/***/ }),

/***/ "./src/app/add-artifact/add-artifact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-artifact/add-artifact.component.ts ***!
  \********************************************************/
/*! exports provided: AddArtifactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddArtifactComponent", function() { return AddArtifactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sprintupload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sprintupload.service */ "./src/app/services/sprintupload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../uploaded/uploaded.component */ "./src/app/uploaded/uploaded.component.ts");







var AddArtifactComponent = /** @class */ (function () {
    function AddArtifactComponent(sprint, matdialog, router, formBuilder, dialogRef) {
        this.sprint = sprint;
        this.matdialog = matdialog;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
    }
    AddArtifactComponent.prototype.ngOnInit = function () {
        this.artifactUpload = this.formBuilder.group({
            'artifactUpload': [],
        });
    };
    AddArtifactComponent.prototype.onUpload = function () {
        var _this = this;
        console.log(this.artifactUpload.value);
        var formContent = new FormData();
        formContent.append('file', this.artifactToBeUpload);
        formContent.append('projectID', localStorage.getItem('projectid'));
        this.sprint.uploadArtifactsFile(formContent).subscribe(function (res) {
            console.log(res);
            if (res['status']) {
                _this.matdialog.open(_uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_6__["UploadedComponent"], {
                    width: '300px',
                    height: '100px'
                });
            }
        });
    };
    AddArtifactComponent.prototype.onChanges = function (event) {
        if (event.target.files.length > 0) {
            this.artifactToBeUpload = event.target.files[0];
        }
    };
    AddArtifactComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        window.location.reload();
    };
    AddArtifactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-artifact',
            template: __webpack_require__(/*! ./add-artifact.component.html */ "./src/app/add-artifact/add-artifact.component.html"),
            styles: [__webpack_require__(/*! ./add-artifact.component.css */ "./src/app/add-artifact/add-artifact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sprintupload_service__WEBPACK_IMPORTED_MODULE_2__["SprintuploadService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], AddArtifactComponent);
    return AddArtifactComponent;
}());



/***/ }),

/***/ "./src/app/add-sprint/add-sprint.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-sprint/add-sprint.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zcHJpbnQvYWRkLXNwcmludC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-sprint/add-sprint.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-sprint/add-sprint.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  [formGroup] = \"sprintUpload\" method=\"POST\" enctype=\"multipart/form-data\">\n  Filename : <input type =\"text\" formControlName= \"sprintName\" name=\"sprintName\" placeholder=\"write your filename here\"><br><br>\n File Description <br> <textarea cols=\"25\" rows=\"5\" formControlName=\"sprintDescription\" name =\"fileDescription\" placeholder =\"wite about your file here\"></textarea><br><br>\n   <input type=\"file\" formControlName=\"fileUpload\" name = \"sprintUpload\" (change) = \"onChange($event)\"><br><br><br>\n   <input type=\"submit\" value =\"Submit\" (click)=\"onSubmit()\">\n   <button (click)=\"onNoClick()\">Cancel</button>\n </form>\n"

/***/ }),

/***/ "./src/app/add-sprint/add-sprint.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-sprint/add-sprint.component.ts ***!
  \****************************************************/
/*! exports provided: AddSprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSprintComponent", function() { return AddSprintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_sprintupload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sprintupload.service */ "./src/app/services/sprintupload.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sprintupload_sprint_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sprintupload/sprint.module */ "./src/app/sprintupload/sprint.module.ts");






var AddSprintComponent = /** @class */ (function () {
    function AddSprintComponent(formBuilder, sprint, dialogRef) {
        this.formBuilder = formBuilder;
        this.sprint = sprint;
        this.dialogRef = dialogRef;
        this.user = new _sprintupload_sprint_module__WEBPACK_IMPORTED_MODULE_5__["Sprint"]();
    }
    AddSprintComponent.prototype.ngOnInit = function () {
        this.sprintUpload = this.formBuilder.group({
            'sprintName': [this.user.sprintname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'sprintDescription': [this.user.sprintdesc, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'fileUpload': [],
            'projectID': localStorage.getItem('projectid')
        });
    };
    AddSprintComponent.prototype.onSubmit = function () {
        console.log(this.sprintUpload.value);
        console.log(this.sprintUpload.value['sprintName']);
        var formData = new FormData();
        formData.append('file', this.fileToBeUpload);
        formData.append('sprintName', this.sprintUpload.value['sprintName']);
        formData.append('sprintDescription', this.sprintUpload.value['sprintDescription']);
        formData.append('projectID', localStorage.getItem('projectid'));
        this.sprint.uploadSprintfile(formData).subscribe(function (res) {
            console.log(res);
            var sprintid = res.sprint_id;
            localStorage.setItem('sprintID', sprintid);
        });
    };
    AddSprintComponent.prototype.onChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileToBeUpload = event.target.files[0];
        }
    };
    AddSprintComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddSprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-sprint',
            template: __webpack_require__(/*! ./add-sprint.component.html */ "./src/app/add-sprint/add-sprint.component.html"),
            styles: [__webpack_require__(/*! ./add-sprint.component.css */ "./src/app/add-sprint/add-sprint.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_sprintupload_service__WEBPACK_IMPORTED_MODULE_3__["SprintuploadService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], AddSprintComponent);
    return AddSprintComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n  }\n  mat-toolbar{\n    width:100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbiAgbWF0LXRvb2xiYXJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <mat-toolbar color=\"primary\" class=\"navigation\">\n\n   <mat-toolbar-row>\n   \n   <span class=\"title-content\">Kanban Board</span>\n   \n   <span class=\"spacer\"></span>\n   <button mat-button routerLink=\"/home\">Home</button>\n    <button mat-button routerLink=\"/register\">Sign Up</button>\n    <button mat-button routerLink=\"/login\">Login</button>\n    <button mat-button routerLink=\"/kanban\">Kanban</button>\n   \n   \n </mat-toolbar-row>\n </mat-toolbar> -->\n    \n<router-outlet></router-outlet>\n\n<mat-toolbar color=\"primary\">\n   <mat-toolbar-row> \n      <span style=\"padding-left:38%\">&copy;&nbsp;|&nbsp;Innovations Lab, Trivandrum 2019</span>\n   </mat-toolbar-row>\n</mat-toolbar>\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/connection.service */ "./src/app/services/connection.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_formBuilder, sendFileService) {
        this._formBuilder = _formBuilder;
        this.sendFileService = sendFileService;
        this.title = 'Kanban';
        this.fileName = 'this file';
        this.uploadFileForm = this._formBuilder.group({
            file: []
        });
    }
    AppComponent.prototype.onSubmit = function () {
        console.log(this.uploadFileForm.value);
        this.sendFileService.addFile(this.uploadFileForm.value).subscribe(function (response) {
            console.log(response);
        });
    };
    AppComponent.prototype.onChange = function (event) {
        if (event.target.files.length > 0) {
            this.uploadFileForm['file'] = event.target.files[0];
        }
        console.log(event);
        console.log(event.target.files);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Authentication_Login_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Authentication/Login/fileupload/fileupload.component */ "./src/app/Authentication/Login/fileupload/fileupload.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Authentication_Login_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Authentication/Login/login/login.component */ "./src/app/Authentication/Login/login/login.component.ts");
/* harmony import */ var _Authentication_Registration_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Authentication/Registration/register/register.component */ "./src/app/Authentication/Registration/register/register.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-routing.module */ "./src/app-routing.module.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _createproject_createproject_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./createproject/createproject.component */ "./src/app/createproject/createproject.component.ts");
/* harmony import */ var _createprojectpage_createprojectpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./createprojectpage/createprojectpage.component */ "./src/app/createprojectpage/createprojectpage.component.ts");
/* harmony import */ var _projectdashboard_projectdashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projectdashboard/projectdashboard.component */ "./src/app/projectdashboard/projectdashboard.component.ts");
/* harmony import */ var _sprintupload_sprintupload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sprintupload/sprintupload.component */ "./src/app/sprintupload/sprintupload.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _kanban_kanban_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./kanban/kanban.component */ "./src/app/kanban/kanban.component.ts");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/fesm5/ngx-material-file-input.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _navbar_log_navbar_log_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./navbar-log/navbar-log.component */ "./src/app/navbar-log/navbar-log.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _navbar_pro_navbar_pro_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./navbar-pro/navbar-pro.component */ "./src/app/navbar-pro/navbar-pro.component.ts");
/* harmony import */ var _add_artifact_add_artifact_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./add-artifact/add-artifact.component */ "./src/app/add-artifact/add-artifact.component.ts");
/* harmony import */ var _add_sprint_add_sprint_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./add-sprint/add-sprint.component */ "./src/app/add-sprint/add-sprint.component.ts");
/* harmony import */ var _uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./uploaded/uploaded.component */ "./src/app/uploaded/uploaded.component.ts");












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Authentication_Login_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_4__["FileuploadComponent"],
                _Authentication_Login_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _Authentication_Registration_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _createproject_createproject_component__WEBPACK_IMPORTED_MODULE_14__["CreateprojectComponent"],
                _createprojectpage_createprojectpage_component__WEBPACK_IMPORTED_MODULE_15__["CreateprojectpageComponent"],
                _projectdashboard_projectdashboard_component__WEBPACK_IMPORTED_MODULE_16__["ProjectdashboardComponent"],
                _sprintupload_sprintupload_component__WEBPACK_IMPORTED_MODULE_17__["SprintuploadComponent"],
                _kanban_kanban_component__WEBPACK_IMPORTED_MODULE_33__["KanbanComponent"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_30__["PopupComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_35__["NavbarComponent"],
                _navbar_log_navbar_log_component__WEBPACK_IMPORTED_MODULE_36__["NavbarLogComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_37__["LogoutComponent"],
                _success_success_component__WEBPACK_IMPORTED_MODULE_38__["SuccessComponent"],
                _navbar_pro_navbar_pro_component__WEBPACK_IMPORTED_MODULE_39__["NavbarProComponent"],
                _add_artifact_add_artifact_component__WEBPACK_IMPORTED_MODULE_40__["AddArtifactComponent"],
                _add_sprint_add_sprint_component__WEBPACK_IMPORTED_MODULE_41__["AddSprintComponent"],
                _uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_42__["UploadedComponent"],
            ],
            imports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__["MDBBootstrapModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_12__["CustomMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                ngx_material_file_input__WEBPACK_IMPORTED_MODULE_34__["MaterialFileInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
            ],
            providers: [],
            entryComponents: [_popup_popup_component__WEBPACK_IMPORTED_MODULE_30__["PopupComponent"], _createproject_createproject_component__WEBPACK_IMPORTED_MODULE_14__["CreateprojectComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_37__["LogoutComponent"], _success_success_component__WEBPACK_IMPORTED_MODULE_38__["SuccessComponent"], _add_artifact_add_artifact_component__WEBPACK_IMPORTED_MODULE_40__["AddArtifactComponent"],
                _add_sprint_add_sprint_component__WEBPACK_IMPORTED_MODULE_41__["AddSprintComponent"], _uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_42__["UploadedComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/createproject/create.module.ts":
/*!************************************************!*\
  !*** ./src/app/createproject/create.module.ts ***!
  \************************************************/
/*! exports provided: CreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModule", function() { return CreateModule; });
var CreateModule = /** @class */ (function () {
    function CreateModule() {
    }
    return CreateModule;
}());



/***/ }),

/***/ "./src/app/createproject/createproject.component.css":
/*!***********************************************************!*\
  !*** ./src/app/createproject/createproject.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-page{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    text-align: center;\n}\nform{\n    text-align: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    text-align: center;\n}\ninput{\n    width:400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcHJvamVjdC9jcmVhdGVwcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlcHJvamVjdC9jcmVhdGVwcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1wYWdle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmZvcm17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlucHV0e1xuICAgIHdpZHRoOjQwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/createproject/createproject.component.html":
/*!************************************************************!*\
  !*** ./src/app/createproject/createproject.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"form-page\">\n<mat-card>    \n  < Title of an Card -->    \n  <!-- <mat-card-title>    \n      Create new Project by filling out details   \n  </mat-card-title>    \n  \n  <mat-card-content>    \n      <form [formGroup]=\"projectForm\">    \n            \n                      <mat-form-field class=\"demo-full-width\">    \n                          <input formControlName=\"projectName\" (ngModel)=\"user.projectname\" matInput placeholder=\"Project Name\">    \n                      </mat-form-field>    \n                    \n                      <mat-form-field class=\"demo-full-width\">    \n                          <textarea matInput placeholder=\"Project Description\" formControlName=\"projectDescription\" (ngModel)=\"user.projectdesc\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\"></textarea>    \n                      </mat-form-field>    \n                   \n    \n                \n             \n                \n                      \n                      <button (click)=\"createProject()\" mat-raised-button color=\"primary\" [disabled]=\"!projectForm.valid\">Create</button>    \n            \n      </form>    \n  </mat-card-content>    \n</mat-card> \n</div> -->\n\n<form [formGroup]=\"projectForm\">    \n<div mat-dialog-content> \n        <h5><b>ADD PROJECT DETAILS</b></h5>  <br> \n        <p style=\"float:left\">Enter Project Name</p>\n        <input formControlName=\"projectName\" [(ngModel)]=\"user.projectname\" matInput placeholder=\"Project Name\">\n        <p style=\"float:left\">Enter Project Description</p>\n        <input matInput placeholder=\"Project Description\" formControlName=\"projectDescription\" [(ngModel)]=\"user.projectdesc\">\n      </div>\n      <div mat-dialog-actions>\n        <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n        <button mat-button (click)=\"createProject()\" cdkFocusInitial>Ok</button>\n      </div>\n</form>\n      \n  "

/***/ }),

/***/ "./src/app/createproject/createproject.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/createproject/createproject.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateprojectComponent", function() { return CreateprojectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _create_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.module */ "./src/app/createproject/create.module.ts");
/* harmony import */ var _services_create_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/create.service */ "./src/app/services/create.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");







var CreateprojectComponent = /** @class */ (function () {
    function CreateprojectComponent(create, formbuilder, router, dialogRef) {
        this.create = create;
        this.formbuilder = formbuilder;
        this.router = router;
        this.dialogRef = dialogRef;
        this.user = new _create_module__WEBPACK_IMPORTED_MODULE_3__["CreateModule"];
    }
    CreateprojectComponent.prototype.ngOnInit = function () {
        this.projectForm = this.formbuilder.group({
            'projectName': [this.user.projectname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'projectDescription': [this.user.projectdesc, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(15)]],
            'userId': localStorage.getItem('userId'),
            'username': localStorage.getItem('userName')
        });
    };
    CreateprojectComponent.prototype.createProject = function () {
        var _this = this;
        console.log(this.projectForm.value);
        this.create.createProjects(this.projectForm.value).subscribe(function (res) {
            console.log(res);
            console.log(res.id);
            if (res == false) {
                _this.error_msg = "Invalid username or password";
            }
            else {
                var projId = res.id;
                localStorage.setItem('projectID', projId);
            }
            if (res['status']) {
                _this.router.navigate(['/upload']);
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    CreateprojectComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateprojectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createproject',
            template: __webpack_require__(/*! ./createproject.component.html */ "./src/app/createproject/createproject.component.html"),
            styles: [__webpack_require__(/*! ./createproject.component.css */ "./src/app/createproject/createproject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_create_service__WEBPACK_IMPORTED_MODULE_4__["CreateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]])
    ], CreateprojectComponent);
    return CreateprojectComponent;
}());



/***/ }),

/***/ "./src/app/createprojectpage/createprojectpage.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/createprojectpage/createprojectpage.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-page{\n    text-align: center;\n}\n.content-form{\n    text-align: center;\n}\nbutton{\n    background-color: royalblue;\n    width: 20%;\n    height:20%;\n    display: inline-block;\n    font-weight: bolder;\n}\n.projectnames{\n    background-color:rgb(143, 174, 238);\n    float:left;\n}\n.projectnames:hover{\n    background-color: rgb(211, 218, 238);\n}\n#inside{\n    color:black;\n    background-color: #bbb4b4;\n    height:auto;\n    width:70%;\n}\n.projectdisplay{\n    color: #ffffff;\n    width:100%;\n   \n}\n#whole{\n    height:auto;\n    margin:20px;\n}\n.create-proj{\n    height:210%;\n}\n.add-button{\n    float:right;\n    font-size: 300%;\n    padding-right:5%;\n    margin-top:19px;\n}\n.add{\n    float:right;\n    font-size:20px;\n\n}\n.holder{\n    height:auto;\n}\n.container {\n    background: lightyellow;\n    width: 500px;\n  }\n.new {\n    background: lightblue;\n    width: 100px;\n  }\n.add-button:hover{\n      font-size:350%;\n  }\n.view:hover{\n    background-color: cadetblue;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcHJvamVjdHBhZ2UvY3JlYXRlcHJvamVjdHBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7O0FBRWQ7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7QUFFQTtNQUNJLGNBQWM7RUFDbEI7QUFFQTtJQUNFLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXByb2plY3RwYWdlL2NyZWF0ZXByb2plY3RwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50LWZvcm17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDoyMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ucHJvamVjdG5hbWVze1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0MywgMTc0LCAyMzgpO1xuICAgIGZsb2F0OmxlZnQ7XG59XG4ucHJvamVjdG5hbWVzOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxOCwgMjM4KTtcbn1cbiNpbnNpZGV7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjRiNDtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICB3aWR0aDo3MCU7XG59XG5cbi5wcm9qZWN0ZGlzcGxheXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDoxMDAlO1xuICAgXG59XG4jd2hvbGV7XG4gICAgaGVpZ2h0OmF1dG87XG4gICAgbWFyZ2luOjIwcHg7XG59XG5cbi5jcmVhdGUtcHJvantcbiAgICBoZWlnaHQ6MjEwJTtcbn1cblxuLmFkZC1idXR0b257XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgZm9udC1zaXplOiAzMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6NSU7XG4gICAgbWFyZ2luLXRvcDoxOXB4O1xufVxuXG4uYWRke1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuXG59XG4uaG9sZGVye1xuICAgIGhlaWdodDphdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbiAgXG4gIC5uZXcge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuICAuYWRkLWJ1dHRvbjpob3ZlcntcbiAgICAgIGZvbnQtc2l6ZTozNTAlO1xuICB9XG5cbiAgLnZpZXc6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/createprojectpage/createprojectpage.component.html":
/*!********************************************************************!*\
  !*** ./src/app/createprojectpage/createprojectpage.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-----<mat-card color=\"primary\">    \n  <span>Welocme to Kanban Board!</span>  <br><br>\n  <button mat-raised-button color=\"primary\">Create a project</button>\n</mat-card>   --> \n\n<head>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n    <!--its not an angular material-->\n      <!-- Compiled and minified JavaScript -->\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n      <link href=\"../node_modules/@angular/material/prebuilt-themes/indigo-pink.css\" type=\"text/css\">\n      <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n      <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n</head>\n\n<app-navbar-log></app-navbar-log>\n<!-- <div class=\"content-page\">\n<mat-card style =\"margin:1em;\">\n  <mat-card-title> Welcome to Kanban board, {{username}}!</mat-card-title>\n\n  <mat-card-subtitle> It is a great platform to mange your team, backlogs, artifacts and tasks<br>so that you will be easily able to mange and distribute the tasks to team<br>members</mat-card-subtitle>\n  <button mat-raised-button color=\"primary\" (click)=\"viewForms()\" class=\"create-proj\">Create a project</button>\n</mat-card>\n</div> -->\n<body style=\"height:68%;\">\n<!-- <div class=\"content-form\" *ngIf='loadComponent == true'>\n  <app-createproject></app-createproject>\n  </div> -->\n<div>\n<h5 style=\"padding-left:23px;font-family:Arial, Helvetica, sans-serif;font-weight:bold\">Your Projects:</h5>\n\n  <!-- <div *ngFor=\"let projects of project\">\n    <a class=\"projectdisplay\" (click)='fetchproject(projects.projectId)'>\n      <mat-card class=\"projectnames\">\n        <mat-card-content>\n            {{projects.projectName}}\n        </mat-card-content>\n        \n      </mat-card>\n    </a>\n  </div> -->\n  <mat-card id=\"whole\" class=\"mat-elevation-z8\" [style.overflow]=\"'auto'\" [style.height.px]=\"'320'\">\n  <mat-grid-list cols=\"3\" rowHeight=\"2:1\">\n\n  <div *ngFor=\"let projects of project\">\n  <mat-grid-tile style=\"padding-left:2px;\">\n      <!-- <a style=\"text-align:center;\" class=\"projectdisplay\" (click)='fetchproject(projects.projectId)'> -->\n      <mat-card id =\"inside\" class=\"mat-elevation-z4\">\n       <mat-card-content style=\"font-size:20px;\">\n              <b>{{projects.projectName}}</b>\n      </mat-card-content> \n      Description: {{projects.projectDescription}}<br>\n      <button class=\"view\" style=\"float:right;\" mat-button (click)='fetchproject(projects.projectId)'>View</button> \n     \n          </mat-card>\n        <!-- </a> -->\n          </mat-grid-tile>\n  </div>\n\n</mat-grid-list> \n</mat-card>\n<div>\n  \n    <mat-icon style=\"cursor: pointer\" matTooltip=\"Click to create project\" (click)=\"loadForm()\" class=\"add-button\" color=\"primary\">add_circle</mat-icon>\n    <h3 class=\"add\">Add Project</h3>\n   </div>\n</div>\n  <!-- <div *ngFor=\"name in project\">\n    List of projects owned by {{username}}<br>\n    {{name.projectName}}\n  </div> -->\n\n</body>\n\n\n  \n"

/***/ }),

/***/ "./src/app/createprojectpage/createprojectpage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/createprojectpage/createprojectpage.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateprojectpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateprojectpageComponent", function() { return CreateprojectpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_sprintupload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sprintupload.service */ "./src/app/services/sprintupload.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _createproject_createproject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createproject/createproject.component */ "./src/app/createproject/createproject.component.ts");







var CreateprojectpageComponent = /** @class */ (function () {
    function CreateprojectpageComponent(router, uploadService, nav, dialog) {
        this.router = router;
        this.uploadService = uploadService;
        this.nav = nav;
        this.dialog = dialog;
        this.username = localStorage.getItem('userName');
        this.ownerproject = localStorage.getItem('owner'); //JSON.parse();
        this.project = JSON.parse(this.ownerproject);
        //owner = this.project[0]['projectName'];  
        this.loadComponent = false;
    }
    CreateprojectpageComponent.prototype.ngOnInit = function () {
        this.nav.show();
        //console.log(this.project)
    };
    CreateprojectpageComponent.prototype.viewForms = function () {
        if (this.loadComponent == true) {
            this.loadComponent = false;
        }
        this.loadComponent = true;
    };
    CreateprojectpageComponent.prototype.fetchproject = function (projectId) {
        var _this = this;
        console.log(projectId);
        // const data = {
        //   "projectId" : id
        // }
        this.uploadService.fetchProjectByID({ projectId: projectId }).subscribe(function (res) {
            console.log(res);
            console.log(res.sprint.projectDescription);
            localStorage.setItem('projectdesc', res.sprint.projectDescription);
            console.log(res.sprint.projectName);
            localStorage.setItem('projectname', res.sprint.projectName);
            console.log(res.sprint.members);
            console.log(res.sprint.members[0].username);
            localStorage.setItem('members', JSON.stringify(res.sprint.members));
            console.log(res.sprint.artifacts);
            localStorage.setItem('artifacts', JSON.stringify(res.sprint.artifacts));
            console.log(res.sprint.sprints);
            localStorage.setItem('sprints', JSON.stringify(res.sprint.sprints));
            console.log(res.sprint['_id']);
            localStorage.setItem('projectid', res.sprint['_id']);
            if (res['status']) {
                _this.router.navigate(['/upload']);
            }
            else {
                _this.router.navigate(['/welcome']);
            }
        });
    };
    CreateprojectpageComponent.prototype.loadForm = function () {
        var dialogRef = this.dialog.open(_createproject_createproject_component__WEBPACK_IMPORTED_MODULE_6__["CreateprojectComponent"], {
            width: '400px',
            height: '400px'
        });
    };
    CreateprojectpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createprojectpage',
            template: __webpack_require__(/*! ./createprojectpage.component.html */ "./src/app/createprojectpage/createprojectpage.component.html"),
            styles: [__webpack_require__(/*! ./createprojectpage.component.css */ "./src/app/createprojectpage/createprojectpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_sprintupload_service__WEBPACK_IMPORTED_MODULE_3__["SprintuploadService"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], CreateprojectpageComponent);
    return CreateprojectpageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    height:100%;\n    \n}\n\n.img-slide{\n    width:100%;\n}\n\n.homepage-content{\n    padding-left:6%;\n}\n\n.homepage-content-text{\n    padding-top:10%;\n}\n\n.heading-2{\n   padding:5px;\n   margin:0;\n   font-family:\"Trebuchet MS\", Helvetica, sans-serif;\n}\n\n.project-title{\n    font-size: 300%;\n    padding:10px;\n    margin:0;   \n    font-family: \"Comic Sans MS\", cursive, sans-serif;\t\n    color:#0e1b18;\n}\n\n.homepage-button{\n    min-width: 20%;\n    height:50px;\n    background-color:#270d9b;\n    \n}\n\n.homepage-button:hover{\n    background-color:#a196d3;\n    \n}\n\n.home-image{\n    height:400px;\n    width:400px;\n    padding-right:1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXOztBQUVmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUdBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7R0FDRyxXQUFXO0dBQ1gsUUFBUTtHQUNSLGlEQUFpRDtBQUNwRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLGlEQUFpRDtJQUNqRCxhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCx3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGhlaWdodDoxMDAlO1xuICAgIFxufVxuXG4uaW1nLXNsaWRle1xuICAgIHdpZHRoOjEwMCU7XG59XG5cblxuLmhvbWVwYWdlLWNvbnRlbnR7XG4gICAgcGFkZGluZy1sZWZ0OjYlO1xufVxuXG4uaG9tZXBhZ2UtY29udGVudC10ZXh0e1xuICAgIHBhZGRpbmctdG9wOjEwJTtcbn1cblxuLmhlYWRpbmctMntcbiAgIHBhZGRpbmc6NXB4O1xuICAgbWFyZ2luOjA7XG4gICBmb250LWZhbWlseTpcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5wcm9qZWN0LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgbWFyZ2luOjA7ICAgXG4gICAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1x0XG4gICAgY29sb3I6IzBlMWIxODtcbn1cblxuXG4uaG9tZXBhZ2UtYnV0dG9ue1xuICAgIG1pbi13aWR0aDogMjAlO1xuICAgIGhlaWdodDo1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzI3MGQ5YjtcbiAgICBcbn1cblxuLmhvbWVwYWdlLWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhMTk2ZDM7XG4gICAgXG59XG5cbi5ob21lLWltYWdle1xuICAgIGhlaWdodDo0MDBweDtcbiAgICB3aWR0aDo0MDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjElO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<body style=\"height:80%;background-color:#f3eaea;\">\n<div style=\"width:100%\">\n    <div class=\"homepage-content\" style=\"width:53%;float:left\">\n        <div class=\"homepage-content-text\">\n            <h1 class=\"project-title\">KANBAN BOARD</h1>\n            <h2 class=\"heading-2\">A platform to manage your project easily anytime,anywhere.</h2>\n            <h2 class=\"heading-2\">Add multiple projects,members and documents!</h2>\n            <h3 class=\"heading-2\" style=\"color:#7c0a0a\">Already have an account?</h3><br>\n            <button (click)=\"redirect()\" class=\"homepage-button\" mat-raised-button color=\"accent\">LOG IN TO YOUR ACCOUNT</button>\n        </div>\n    </div>\n    <div style=\"width:30%;float:right;padding-right:10%;padding-top:3%\">\n    <img class=\"home-image\" src=\"../../assets/project.png\">\n    </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navbar.service */ "./src/app/services/navbar.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, nav) {
        this.router = router;
        this.nav = nav;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    HomeComponent.prototype.redirect = function () {
        this.router.navigate(['/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/kanban/kanban.component.css":
/*!*********************************************!*\
  !*** ./src/app/kanban/kanban.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    min-height: 10em;\n    min-width: 10em;\n  }\n  \n  .mycard {\n    margin:0.5em;\n    /* padding: 1em; */\n  }\n  \n  .example-fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n       Every toolbar row uses a flexbox row layout. */\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n  }\n  \n  .example-container {\n    width: 400px;\n    max-width: 100%;\n    margin: 0 25px 25px 0;\n    display: inline-block;\n    vertical-align: top;\n  }\n  \n  .example-list {\n     /* border: solid 1px #ccc; */\n    min-height: 10em;\n    /* background: white; */\n    /* border-radius: 4px; */\n    overflow: hidden;\n    display: block;\n  }\n  \n  .example-box {\n    cursor: move;\n  }\n  \n  .cdk-drag-preview {\n    /* box-sizing: border-box; */\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n  \n  .cdk-drag-placeholder {\n    opacity: 0;\n  }\n  \n  .cdk-drag-animating {\n    -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n  \n  .example-box:last-child {\n    border: none;\n  }\n  \n  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n    -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n  \n  .example-margin {\n    margin: 0 10px;\n  }\n  \n  .example-section {\n    display: -webkit-box;\n    display: flex;\n    align-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    /* height: 60px; */\n  }\n  \n  mat-toolbar {\n    border-radius: 3px;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FuYmFuL2thbmJhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0U7cURBQ2lEO0lBQ2pELG1CQUFjO1lBQWQsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7O0VBRUE7S0FDRyw0QkFBNEI7SUFDN0IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCOztrREFFOEM7RUFDaEQ7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxzRUFBc0Q7SUFBdEQsOERBQXNEO0lBQXRELHNEQUFzRDtJQUF0RCwwR0FBc0Q7RUFDeEQ7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxzRUFBc0Q7SUFBdEQsOERBQXNEO0lBQXRELHNEQUFzRDtJQUF0RCwwR0FBc0Q7RUFDeEQ7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAva2FuYmFuL2thbmJhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gICAgbWluLWhlaWdodDogMTBlbTtcbiAgICBtaW4td2lkdGg6IDEwZW07XG4gIH1cbiAgXG4gIC5teWNhcmQge1xuICAgIG1hcmdpbjowLjVlbTtcbiAgICAvKiBwYWRkaW5nOiAxZW07ICovXG4gIH1cbiAgXG4gIC5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtbGlzdCB7XG4gICAgIC8qIGJvcmRlcjogc29saWQgMXB4ICNjY2M7ICovXG4gICAgbWluLWhlaWdodDogMTBlbTtcbiAgICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZTsgKi9cbiAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94IHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG4gIFxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG4gIFxuICAuZXhhbXBsZS1tYXJnaW4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGhlaWdodDogNjBweDsgKi9cbiAgfVxuICBcbiAgbWF0LXRvb2xiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICBcbiAgIl19 */"

/***/ }),

/***/ "./src/app/kanban/kanban.component.html":
/*!**********************************************!*\
  !*** ./src/app/kanban/kanban.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n  <!--its not an angular material-->\n    <!-- Compiled and minified JavaScript -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n    <link href=\"../node_modules/@angular/material/prebuilt-themes/indigo-pink.css\" type=\"text/css\">\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n</head>\n<div *ngIf=\"flag\">\n  <mat-card class=\"mycard mat-elevation-z5\">\n    <div class=\"row\" cdkDropListGroup>\n      <div class=\"col s4\">\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z5\">\n          <p>TO_DO</p>\n        </mat-toolbar>\n        <div *ngFor=\"let story of todosprints\">\n          <div *ngFor=\"let task of story.task\">\n            <div cdkDropList [cdkDropListData]=\"todosprints\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n              <mat-card class=\"mycard mat-elevation-z5 example-box\" [(cdkDragData)]=\"task\" cdkDrag>\n                <mat-card-content>\n                  <b>\n                    {{story.user_story_id}} :: {{task.task_id}}\n                    <mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" class=\"right\"\n                      aria-label=\"Example thumbs up SVG icon\" style=\"cursor: pointer\" matTooltip=\"Click to Log Effort\"\n                      (click)=\"openDialog(task.efforts_remaining,task.task_id,story.user_story_id)\">\n                    </mat-icon>\n                  </b>\n                  <p style=\"text-align: left\">\n                    <b>Description :</b> {{task.task_details}}\n                  </p>\n                  <section class=\"example-section\">\n                    <label class=\"example-margin\">Progress:</label>\n                    <mat-progress-bar mode=\"buffer\"\n                      [value]=\"100 - task.efforts_remaining*100/task.initial_effort_estimate\"\n                      [bufferValue]=\"100 - task.efforts_remaining*100/task.initial_effort_estimate\">\n                    </mat-progress-bar>\n                  </section>\n                </mat-card-content>\n              </mat-card>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s4\">\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z5\">\n          <p>IN_PROGRESS</p>\n        </mat-toolbar>\n        <div *ngFor=\"let story of inprogresssprints\">\n          <div *ngFor=\"let task of story.task\">\n            <div cdkDropList [cdkDropListData]=\"inprogresssprints\" class=\"example-list\"\n              (cdkDropListDropped)=\"drop($event)\">\n              <mat-card class=\"mycard mat-elevation-z5 example-box\" [(cdkDragData)]=\"task\" cdkDrag>\n                <mat-card-content>\n                  <b>\n                    {{story.user_story_id}} :: {{task.task_id}}\n                    <mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" class=\"right\"\n                      aria-label=\"Example thumbs up SVG icon\" style=\"cursor: pointer\" matTooltip=\"Click to Log Effort\"\n                      (click)=\"openDialog(task.efforts_remaining,task.task_id,story.user_story_id)\">\n                    </mat-icon>\n                  </b>\n                  <p style=\"text-align: left\">\n                    <b>Description :</b> {{task.task_details}}\n                  </p>\n                  <section class=\"example-section\">\n                    <label class=\"example-margin\">Progress:</label>\n                    <mat-progress-bar mode=\"buffer\"\n                      [value]=\"100 - task.efforts_remaining*100/task.initial_effort_estimate\"\n                      [bufferValue]=\"100 - task.efforts_remaining*100/task.initial_effort_estimate\">\n                    </mat-progress-bar>\n                  </section>\n                </mat-card-content>\n              </mat-card>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s4\">\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z5\">\n          <p>COMPLETED</p>\n        </mat-toolbar>\n        <div *ngFor=\"let story of completedsprints\">\n          <div *ngFor=\"let task of story.task\">\n            <div cdkDropList [cdkDropListData]=\"completedsprints\" class=\"example-list\"\n              (cdkDropListDropped)=\"drop($event)\">\n              <mat-card class=\"mycard mat-elevation-z5 example-box\" [(cdkDragData)]=\"task\" cdkDrag>\n                <mat-card-content>\n                  <b>\n                    {{story.user_story_id}} :: {{task.task_id}}\n                    <mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" class=\"right\"\n                      aria-label=\"Example thumbs up SVG icon\" style=\"cursor: pointer\" matTooltip=\"Click to Log Effort\"\n                      (click)=\"openDialog(task.efforts_remaining,task.task_id,story.user_story_id)\">\n                    </mat-icon>\n                  </b>\n                  <p style=\"text-align: left\">\n                    <b>Description :</b> {{task.task_details}}\n                  </p>\n                  <section class=\"example-section\">\n                    <label class=\"example-margin\">Progress:</label>\n                    <mat-progress-bar mode=\"buffer\"\n                      [value]=\"100 - task.efforts_remaining*100/task.initial_effort_estimate\"\n                      [bufferValue]=\"100 - task.efforts_remaining*100/task.initial_effort_estimate\">\n                    </mat-progress-bar>\n                  </section>\n                </mat-card-content>\n              </mat-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-card>\n</div>\n<div *ngIf=\"!flag\">\n  <mat-spinner></mat-spinner>\n</div>\n</html>"

/***/ }),

/***/ "./src/app/kanban/kanban.component.ts":
/*!********************************************!*\
  !*** ./src/app/kanban/kanban.component.ts ***!
  \********************************************/
/*! exports provided: KanbanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KanbanComponent", function() { return KanbanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tasks.service */ "./src/app/services/tasks.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");








var KanbanComponent = /** @class */ (function () {
    function KanbanComponent(_taskService, dialog, iconRegistry, sanitizer) {
        this._taskService = _taskService;
        this.dialog = dialog;
        this.flag = false;
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/edit-icon.svg'));
    }
    KanbanComponent.prototype.ngOnInit = function () {
        this.todosprints = this._taskService.getToDoTasks();
        this.inprogresssprints = this._taskService.getInprogressTasks();
        this.completedsprints = this._taskService.getCompletedTasks();
        this.flag = true;
    };
    KanbanComponent.prototype.openDialog = function (remainingEffort, task_id, user_story_id) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], {
            width: '300px',
            data: { loggedEffort: this.loggedEffort1, task_id: task_id, user_story_id: user_story_id, remainingEffort: this.remainingEffort1 }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                _this._taskService.logeffort(result.loggedEffort, result.task_id, result.user_story_id, result.remainingEffort);
            }
            _this.todosprints = _this._taskService.getToDoTasks();
            _this.inprogresssprints = _this._taskService.getInprogressTasks();
            _this.completedsprints = _this._taskService.getCompletedTasks();
        });
    };
    KanbanComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            console.log(event.container.data[event.currentIndex]);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            console.log(event.container.data[event.currentIndex]);
        }
    };
    KanbanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kanban',
            template: __webpack_require__(/*! ./kanban.component.html */ "./src/app/kanban/kanban.component.html"),
            entryComponents: [src_app_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]],
            styles: [__webpack_require__(/*! ./kanban.component.css */ "./src/app/kanban/kanban.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], KanbanComponent);
    return KanbanComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content> \n  You have successfully logged out!\n</div>\n<div mat-dialog-actions>\n  <button (click)=\"onNoClick()\">Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/navbar-log/navbar-log.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navbar-log/navbar-log.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\n    list-style:none;\n}\n.name:hover{\n    color: #c7c41f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLWxvZy9uYXZiYXItbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyLWxvZy9uYXZiYXItbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG59XG4ubmFtZTpob3ZlcntcbiAgICBjb2xvcjogI2M3YzQxZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar-log/navbar-log.component.html":
/*!******************************************************!*\
  !*** ./src/app/navbar-log/navbar-log.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navigation\" *ngIf=\"nav.visible\">\n\n    <mat-toolbar-row>\n    \n    <span class=\"title-content\">Kanban Board</span>\n    \n    <span class=\"spacer\"></span>\n      <li class=\"name\">User : {{username}}</li>\n      <li>\n          <button mat-button [matMenuTriggerFor]=\"menu\"><mat-icon style=\"font-size:50px;margin-top:-25px;\">account_circle</mat-icon></button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item (click)=\"logout()\">Logout</button>\n          </mat-menu>\n      </li>\n    \n    \n  </mat-toolbar-row>\n  </mat-toolbar>\n"

/***/ }),

/***/ "./src/app/navbar-log/navbar-log.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navbar-log/navbar-log.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLogComponent", function() { return NavbarLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");






var NavbarLogComponent = /** @class */ (function () {
    function NavbarLogComponent(nav, router, dialog) {
        this.nav = nav;
        this.router = router;
        this.dialog = dialog;
        this.display = false;
        this.username = localStorage.getItem('userName');
    }
    NavbarLogComponent.prototype.ngOnInit = function () {
    };
    NavbarLogComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
        var dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]);
    };
    NavbarLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-log',
            template: __webpack_require__(/*! ./navbar-log.component.html */ "./src/app/navbar-log/navbar-log.component.html"),
            styles: [__webpack_require__(/*! ./navbar-log.component.css */ "./src/app/navbar-log/navbar-log.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], NavbarLogComponent);
    return NavbarLogComponent;
}());



/***/ }),

/***/ "./src/app/navbar-pro/navbar-pro.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navbar-pro/navbar-pro.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\n    list-style:none;\n}\n.name:hover{\n    color: #c7c41f;\n}\n.title-content{\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLXByby9uYXZiYXItcHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyLXByby9uYXZiYXItcHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG59XG4ubmFtZTpob3ZlcntcbiAgICBjb2xvcjogI2M3YzQxZjtcbn0gICBcblxuLnRpdGxlLWNvbnRlbnR7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar-pro/navbar-pro.component.html":
/*!******************************************************!*\
  !*** ./src/app/navbar-pro/navbar-pro.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navigation\" *ngIf=\"nav.visible\">\n\n    <mat-toolbar-row>\n    \n    <span class=\"title-content\">{{projectname}}</span>\n    \n    <span class=\"spacer\"></span>\n      <li class=\"name\">User : {{username}}</li>\n      <li>\n          <button mat-button [matMenuTriggerFor]=\"menu\"><mat-icon style=\"font-size:50px;margin-top:-25px;\">account_circle</mat-icon></button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item (click)=\"logout()\">Logout</button>\n          </mat-menu>\n      </li>\n    \n    \n  </mat-toolbar-row>\n  </mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/navbar-pro/navbar-pro.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navbar-pro/navbar-pro.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarProComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarProComponent", function() { return NavbarProComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");






var NavbarProComponent = /** @class */ (function () {
    function NavbarProComponent(nav, router, dialog) {
        this.nav = nav;
        this.router = router;
        this.dialog = dialog;
        this.username = localStorage.getItem('userName');
        this.projectname = localStorage.getItem('projectname');
    }
    NavbarProComponent.prototype.ngOnInit = function () {
    };
    NavbarProComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
        var dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]);
    };
    NavbarProComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-pro',
            template: __webpack_require__(/*! ./navbar-pro.component.html */ "./src/app/navbar-pro/navbar-pro.component.html"),
            styles: [__webpack_require__(/*! ./navbar-pro.component.css */ "./src/app/navbar-pro/navbar-pro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], NavbarProComponent);
    return NavbarProComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\" class=\"navigation\" *ngIf=\"nav.visible\">\n\n    <mat-toolbar-row>\n    \n    <span class=\"title-content\">Kanban Board</span>\n    \n    <span class=\"spacer\"></span>\n    <button mat-button routerLink=\"/home\">Home</button>\n     <button mat-button routerLink=\"/register\">Sign Up</button>\n     <button mat-button routerLink=\"/login\">Login</button>\n     <button mat-button routerLink=\"/kanban\">Kanban</button>\n    \n    \n  </mat-toolbar-row>\n  </mat-toolbar>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navbar.service */ "./src/app/services/navbar.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(nav) {
        this.nav = nav;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.css":
/*!*******************************************!*\
  !*** ./src/app/popup/popup.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/popup/popup.component.html":
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <p>Task ID : {{data.task_id}}</p>\n  <p>Task ID : {{data.user_story_id}}</p>\n  <p>Please enter the Consumed Effort Value</p>\n  <input [(ngModel)]=\"data.loggedEffort\">\n  <p>Please enter the Remaining Effort Value</p>\n  <input [(ngModel)]=\"data.remainingEffort\">\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n</div>\n"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var PopupComponent = /** @class */ (function () {
    function PopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/popup/popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/projectdashboard/projectdashboard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/projectdashboard/projectdashboard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.division1{\n    width:50%;\n    float: left;\n}\n.division{\n    width:50%;\n    float:left;\n}\n#div1{\n    width:100%;\n}\n#div2{\n    width:100%;\n}\n#div3{\n    width:100%;\n}\n/*\n.add-member-left{\n    width:50%;\n    float:left;\n    height:33%;\n}\n\n.add-member-right{\n    width:50%;\n    float:right;\n    height:33%;\n}\n\n.artifact-content{\n    width:100%;\n    height:33%;\n}\n\n.artifact-left{\n    width:50%;\n    float:left;\n}\n\n\n\n.artifact-right{\n    width:50%;\n    float:right;\n}\n\n.sprint-content{\n    width:100%;\n    height:34%;\n}\n\n.sprint-left{\n    width:50%;\n    float:left;\n}\n\n.sprint-right{\n    width:50%;\n    float:right;\n\n}*/\nmat-expansion-panel{\n    background-color:#a4dbfc;\n}\n.formm{\n    background-color:#c0def0;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.download{\n    width:33%;\n}\n.view{\n    text-align: center;\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGRhc2hib2FyZC9wcm9qZWN0ZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRDRTtBQUNGO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdGRhc2hib2FyZC9wcm9qZWN0ZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kaXZpc2lvbjF7XG4gICAgd2lkdGg6NTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmRpdmlzaW9ue1xuICAgIHdpZHRoOjUwJTtcbiAgICBmbG9hdDpsZWZ0O1xufVxuI2RpdjF7XG4gICAgd2lkdGg6MTAwJTtcbn1cbiNkaXYye1xuICAgIHdpZHRoOjEwMCU7XG59XG4jZGl2M3tcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4vKlxuLmFkZC1tZW1iZXItbGVmdHtcbiAgICB3aWR0aDo1MCU7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBoZWlnaHQ6MzMlO1xufVxuXG4uYWRkLW1lbWJlci1yaWdodHtcbiAgICB3aWR0aDo1MCU7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgaGVpZ2h0OjMzJTtcbn1cblxuLmFydGlmYWN0LWNvbnRlbnR7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MzMlO1xufVxuXG4uYXJ0aWZhY3QtbGVmdHtcbiAgICB3aWR0aDo1MCU7XG4gICAgZmxvYXQ6bGVmdDtcbn1cblxuXG5cbi5hcnRpZmFjdC1yaWdodHtcbiAgICB3aWR0aDo1MCU7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbi5zcHJpbnQtY29udGVudHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDozNCU7XG59XG5cbi5zcHJpbnQtbGVmdHtcbiAgICB3aWR0aDo1MCU7XG4gICAgZmxvYXQ6bGVmdDtcbn1cblxuLnNwcmludC1yaWdodHtcbiAgICB3aWR0aDo1MCU7XG4gICAgZmxvYXQ6cmlnaHQ7XG5cbn0qL1xubWF0LWV4cGFuc2lvbi1wYW5lbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhNGRiZmM7XG59XG4uZm9ybW17XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzBkZWYwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZG93bmxvYWR7XG4gICAgd2lkdGg6MzMlO1xufVxuXG4udmlld3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/projectdashboard/projectdashboard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/projectdashboard/projectdashboard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n      \n  </head>\n<body>\n<div class=\"division\" id=\"div1\">\n    <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Add Team\n            </mat-panel-title>\n            <mat-panel-description>\n             &nbsp;&nbsp;&nbsp; Type team member name here\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      <div class=\"formm\">\n          <mat-form-field>\n            <input matInput placeholder=\"Type team member name\">\n          </mat-form-field>\n      \n           &nbsp;&nbsp;&nbsp; <button mat-button class=\"mat-raised-button mat-primary\">Add</button>\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion>\n</div>\n<div class=\"division\" id=\"div2\">\n    <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Add Artifacts\n            </mat-panel-title>\n            <mat-panel-description>\n              Upload your artifacts here\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      <div class=\"formm\">\n          <mat-form-field>\n            <input matInput placeholder=\"Filename\" readonly>\n          </mat-form-field>\n      \n           &nbsp;&nbsp;&nbsp; <button mat-button class=\"mat-raised-button mat-primary\"> Upload</button>\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion>  \n</div>\n<div class=\"division\" id=\"div3\">\n    <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Sprint Files\n            </mat-panel-title>\n            <mat-panel-description>\n                &nbsp;&nbsp;&nbsp;Upload your sprint files here\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      <div class=\"formm\">\n          <mat-form-field>\n            <input matInput placeholder=\"Sprint file name\" readonly>\n          </mat-form-field>\n      \n           &nbsp;&nbsp;&nbsp; <button mat-button class=\"mat-raised-button mat-primary\">Upload</button>\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion><br><br>\n\n</div>\n<div>\n    <button (click)=\"viewTeam()\" class=\"download\" mat-raised-button>Click here to View Team members</button>\n    <button (click)=\"viewArtifacts()\" class=\"download\" mat-raised-button>Click here to View and Download Artifacts</button>\n    <button (click)=\"viewSprint()\" class=\"download\" mat-raised-button>Click here toView and Download Sprints</button>\n</div>\n<br><br>\n<div class=\"view\"*ngIf=\"loadMember==true\">\nTeam members\n</div>\n\n<div class=\"view\" *ngIf=\"loadArtifacts==true\">\nArtifacts\n</div>\n\n<div class=\"view\" *ngIf=\"loadSprints==true\">\nSprints\n</div>\n\n</body>\n\n\n</html>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/projectdashboard/projectdashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/projectdashboard/projectdashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdashboardComponent", function() { return ProjectdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectdashboardComponent = /** @class */ (function () {
    function ProjectdashboardComponent() {
        this.loadMember = false;
        this.loadArtifacts = false;
        this.loadSprints = false;
    }
    ProjectdashboardComponent.prototype.ngOnInit = function () {
    };
    ProjectdashboardComponent.prototype.viewTeam = function () {
        this.loadArtifacts = false;
        this.loadSprints = false;
        if (this.loadMember == false) {
            this.loadMember = true;
        }
    };
    ProjectdashboardComponent.prototype.viewArtifacts = function () {
        this.loadMember = false;
        this.loadSprints = false;
        if (this.loadArtifacts == false) {
            this.loadArtifacts = true;
        }
    };
    ProjectdashboardComponent.prototype.viewSprint = function () {
        this.loadArtifacts = false;
        this.loadMember = false;
        if (this.loadSprints == false) {
            this.loadSprints = true;
        }
    };
    ProjectdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projectdashboard',
            template: __webpack_require__(/*! ./projectdashboard.component.html */ "./src/app/projectdashboard/projectdashboard.component.html"),
            styles: [__webpack_require__(/*! ./projectdashboard.component.css */ "./src/app/projectdashboard/projectdashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectdashboardComponent);
    return ProjectdashboardComponent;
}());



/***/ }),

/***/ "./src/app/services/connection.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/connection.service.ts ***!
  \************************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ConnectionService = /** @class */ (function () {
    function ConnectionService(http) {
        this.http = http;
        this.baseurl1 = 'http://163.122.226.35:3000/';
    }
    ConnectionService.prototype.addFile = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.baseurl1 + 'addFile', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ConnectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConnectionService);
    return ConnectionService;
}());



/***/ }),

/***/ "./src/app/services/create.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/create.service.ts ***!
  \********************************************/
/*! exports provided: CreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateService", function() { return CreateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CreateService = /** @class */ (function () {
    function CreateService(http) {
        this.http = http;
        this.baseurl = 'http://192.168.43.91:7000/add-project/api/add-project';
    }
    CreateService.prototype.createProjects = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.baseurl, data);
    };
    CreateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CreateService);
    return CreateService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.baseurl = 'http://192.168.43.91:7000/login/api/login';
    }
    LoginService.prototype.logUser = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.baseurl, data);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/navbar.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/navbar.service.ts ***!
  \********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.visible = false;
    }
    NavbarService.prototype.hide = function () { this.visible = false; };
    NavbarService.prototype.show = function () { this.visible = true; };
    NavbarService.prototype.toggle = function () { this.visible = !this.visible; };
    NavbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.baseurl1 = 'http://192.168.43.91:7000/register/api/register';
    }
    RegisterService.prototype.addRegister = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.baseurl1, data);
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/sprintupload.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/sprintupload.service.ts ***!
  \**************************************************/
/*! exports provided: SprintuploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintuploadService", function() { return SprintuploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SprintuploadService = /** @class */ (function () {
    function SprintuploadService(httpclient) {
        this.httpclient = httpclient;
        this.baseUrl = 'http://192.168.43.91:7000/upload-artifacts/api/upload-sprint';
        this.baseUrl1 = "http://192.168.43.91:7000/upload-artifacts/api/upload-artifacts";
        this.baseUrl2 = 'http://192.168.43.91:7000/upload-artifacts/api/download-artifacts';
        this.baseUrl3 = 'http://192.168.43.91:7000/project/api/project';
    }
    SprintuploadService.prototype.uploadSprintfile = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': 'applications/json'
            })
        };
        return this.httpclient.post(this.baseUrl, data);
    };
    SprintuploadService.prototype.uploadArtifactsFile = function (data) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': 'applications/json'
            })
        };
        return this.httpclient.post(this.baseUrl1, data);
    };
    SprintuploadService.prototype.downLoadArtifactsFile = function (data) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': 'applications/json'
            })
        };
        return this.httpclient.post(this.baseUrl2, data, {
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append("Content-Type", "application/json")
        });
    };
    SprintuploadService.prototype.getSprint = function (data) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': 'application/json'
            })
        };
        return this.httpclient.post(this.baseUrl2, data);
    };
    SprintuploadService.prototype.fetchProjectByID = function (data) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': 'application/json'
            })
        };
        return this.httpclient.post(this.baseUrl3, data);
    };
    SprintuploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SprintuploadService);
    return SprintuploadService;
}());



/***/ }),

/***/ "./src/app/services/tasks.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tasks */ "./src/app/services/tasks.ts");



var TasksService = /** @class */ (function () {
    function TasksService() {
        this.todouserlist = [];
        this.inprogresstasklist = [];
        this.inprogressuserlist = [];
        this.completedtasklist = [];
        this.completeduserlist = [];
    }
    TasksService.prototype.getToDoTasks = function () {
        var storylist = _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"]; //replace at backend
        this.todouserlist = [];
        for (var a = 0; a < storylist.length; a++) {
            var userstory = new _services_tasks__WEBPACK_IMPORTED_MODULE_2__["Userstory"]();
            this.todotasklist = [];
            for (var b = 0; b < storylist[a].task.length; b++) {
                if (storylist[a].task[b].stat === 'to-do') {
                    this.todotasklist.push(storylist[a].task[b]);
                }
            }
            userstory.user_story_id = storylist[a].user_story_id;
            userstory.task = this.todotasklist;
            this.todouserlist.push(userstory);
        }
        return this.todouserlist;
    };
    TasksService.prototype.getInprogressTasks = function () {
        this.inprogressuserlist = [];
        for (var a = 0; a < _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"].length; a++) {
            var userstory = new _services_tasks__WEBPACK_IMPORTED_MODULE_2__["Userstory"]();
            this.inprogresstasklist = [];
            for (var b = 0; b < _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task.length; b++) {
                if (_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].stat === 'in-progress') {
                    this.inprogresstasklist.push(_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b]);
                }
            }
            userstory.user_story_id = _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].user_story_id;
            userstory.task = this.inprogresstasklist;
            this.inprogressuserlist.push(userstory);
        }
        return this.inprogressuserlist;
    };
    TasksService.prototype.getCompletedTasks = function () {
        this.completeduserlist = [];
        for (var a = 0; a < _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"].length; a++) {
            var userstory = new _services_tasks__WEBPACK_IMPORTED_MODULE_2__["Userstory"]();
            this.completedtasklist = [];
            for (var b = 0; b < _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task.length; b++) {
                if (_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].stat === 'completed') {
                    this.completedtasklist.push(_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b]);
                }
            }
            userstory.user_story_id = _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].user_story_id;
            userstory.task = this.completedtasklist;
            this.completeduserlist.push(userstory);
        }
        return this.completeduserlist;
    };
    TasksService.prototype.logeffort = function (effort, task_id, user_story_id, remainingEffort) {
        for (var a = 0; a < _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"].length; a++) {
            for (var b = 0; b < _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task.length; b++) {
                if (_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].task_id === task_id && _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].user_story_id === user_story_id) {
                    _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].efforts_remaining = remainingEffort;
                }
                if (_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].efforts_remaining === 0) {
                    _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].stat = 'completed';
                }
                else if (_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].efforts_remaining > 0) {
                    _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].stat = 'in-progress';
                }
                else if (_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].efforts_remaining = _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].initial_effort_estimate) {
                    _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].stat = 'to-do';
                }
                console.log(_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].efforts_remaining);
                console.log(_services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].user_story_id + " : " + _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].task_id + " : " + _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].initial_effort_estimate + " : " + _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].efforts_remaining + " : " + _services_tasks__WEBPACK_IMPORTED_MODULE_2__["stories"][a].task[b].stat);
            }
        }
        this.getCompletedTasks();
        this.getInprogressTasks();
        this.getToDoTasks();
    };
    TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/app/services/tasks.ts":
/*!***********************************!*\
  !*** ./src/app/services/tasks.ts ***!
  \***********************************/
/*! exports provided: Task, Userstory, Sprint, stories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Userstory", function() { return Userstory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprint", function() { return Sprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stories", function() { return stories; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());

var Userstory = /** @class */ (function () {
    function Userstory() {
    }
    return Userstory;
}());

var Sprint = /** @class */ (function () {
    function Sprint() {
    }
    return Sprint;
}());

var stories = [
    {
        user_story_id: "US001",
        task: [
            {
                task_id: "Task1",
                task_details: "Take measurements of white shirt (cut the parts)",
                volunteer: "Preetha",
                initial_effort_estimate: 10,
                modifiedBy: "",
                modifiedAt: "2019-07-10T09:49:23.897Z",
                stat: "to-do",
                efforts_remaining: 10
            },
            {
                task_id: "Task2",
                task_details: "Take measurements of white shirt (cut the parts)",
                volunteer: "Preetha",
                initial_effort_estimate: 10,
                modifiedBy: "",
                modifiedAt: "2019-07-10T09:49:23.897Z",
                stat: "in-progress",
                efforts_remaining: 6
            }
        ]
    },
    {
        user_story_id: "US002",
        task: [
            {
                task_id: "Task1",
                task_details: "Take measurements of white shirt (cut the parts)",
                volunteer: "Preetha",
                initial_effort_estimate: 10,
                modifiedBy: "",
                modifiedAt: "2019-07-10T09:49:23.897Z",
                stat: "to-do",
                efforts_remaining: 10
            },
            {
                task_id: "Task2",
                task_details: "Take measurements of white shirt (cut the parts)",
                volunteer: "Preetha",
                initial_effort_estimate: 10,
                modifiedBy: "",
                modifiedAt: "2019-07-10T09:49:23.897Z",
                stat: "completed",
                efforts_remaining: 0
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/sprintupload/sprint.module.ts":
/*!***********************************************!*\
  !*** ./src/app/sprintupload/sprint.module.ts ***!
  \***********************************************/
/*! exports provided: Sprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprint", function() { return Sprint; });
var Sprint = /** @class */ (function () {
    function Sprint() {
    }
    return Sprint;
}());



/***/ }),

/***/ "./src/app/sprintupload/sprintupload.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sprintupload/sprintupload.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add{\n    background-color:#494cdd;\n}\n.add:hover{\n    background-color: #b8bdd4;\n}\n.view{\n    cursor:default;\n    font-size:120%;\n    color:#ec4747;\n}\n.view:hover{\n    color:#7e0707;\n}\n.mysprint{\n    cursor: pointer;\n}\n.mysprint:hover{\n    color: #503bc5;\n}\n.add-member-button{\n    float:right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ByaW50dXBsb2FkL3NwcmludHVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc3ByaW50dXBsb2FkL3NwcmludHVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0OTRjZGQ7XG59XG4uYWRkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGJkZDQ7XG59XG4udmlld3tcbiAgICBjdXJzb3I6ZGVmYXVsdDtcbiAgICBmb250LXNpemU6MTIwJTtcbiAgICBjb2xvcjojZWM0NzQ3O1xufVxuLnZpZXc6aG92ZXJ7XG4gICAgY29sb3I6IzdlMDcwNztcbn1cblxuLm15c3ByaW50e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm15c3ByaW50OmhvdmVye1xuICAgIGNvbG9yOiAjNTAzYmM1O1xufVxuXG4uYWRkLW1lbWJlci1idXR0b257XG4gICAgZmxvYXQ6cmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/sprintupload/sprintupload.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sprintupload/sprintupload.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar-pro></app-navbar-pro>\n<body style=\"height:80%;\">\n<br>\n\n<div style=\"height:80%;padding:1%;\">\n<mat-grid-list cols=\"3\" rowHeight=\"2:1\">\n  <mat-grid-tile [colspan]=\"2\" [rowspan]=\"2\">\n      <mat-card class=\"mat-elevation-z8\" style=\"width:95%;height:90%;\">\n          <div style=\"text-align:center;padding:9%\">\n            <mat-card-content>\n               <div style=\"text-transform:uppercase;font-size:250%;font-weight:bold;\"> WELCOME TO {{projectname}}</div><br>\n              {{description}}<br><br>\n               Created By : {{ownername}}<br><br>\n               <button class=\"add\" mat-button (click)=\"addArtifact()\">ADD ARTIFACT</button>&nbsp;&nbsp;\n               <button class=\"add\" mat-button (click)=\"addSprint()\">ADD SPRINT</button>\n              \n               \n              </mat-card-content>\n              <mat-icon style=\"cursor: pointer\" matTooltip=\"Add members\"  class=\"add-member-button\" color=\"primary\">add_circle</mat-icon>\n          </div>\n      </mat-card>\n  </mat-grid-tile>\n\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n    <mat-card class=\"mat-elevation-z8\" style=\"width:85%;\" [style.overflow]=\"'auto'\" [style.height.px]=\"'328'\">\n      <div style=\"text-align:center\">\n          <a (click)=\"showArtifact()\" class=\"view\">View Artifacts</a> | \n          <a (click)=\"showSprint()\" class=\"view\">View Sprints</a>\n      </div> \n      <div style=\"text-align:center;padding:25%;font-size:110%\" *ngIf=\"showEmpty==true\">\n        Click above to view documents<br> related  to these projects\n      </div>\n      \n      <div  *ngIf=\"showArt==true\">\n        <div style=\"text-align:center;padding:25%;font-size:110%\" *ngIf=\"len1==0\"> No Artifact file uploaded yet!</div>\n        <div  *ngFor=\"let artifact of artifactname\">\n          <br>\n          <li><a class=\"mysprint\" (click)=\"downloadArtifacts(artifact.fileID)\">{{artifact.displayName}}</a></li>\n        </div>\n      </div>\n      \n      <div *ngIf=\"showSp==true\">\n        <div style=\"text-align:center;padding:25%;font-size:110%\" *ngIf=\"len==0\"> No Sprint file uploaded yet!</div>\n        <div  *ngFor=\"let sprint of sprintname\">\n          <br>\n          <li><a class=\"mysprint\">{{sprint.sprintName}}</a></li>\n        </div>\n         \n      </div>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n</div>\n\n\n<!-- <button (click) = \"sprintdisplay()\">Click here to Upload Sprint</button>\n<br>\n<br>\n<div *ngIf='load==true'>\n\n</div>\n\n\n<button (click)=\"artifactdisplay()\">Upload Artifact</button>\n\n<div *ngIf='loadartifact==true'>\n  <br>\n  <br>\n<form [formGroup] = \"artifactUpload\" (ngSubmit)=\"onUpload()\" method=\"POST\" enctype = \"multipart/form-data\">\n  Upload your file here : <input type=\"file\" formControlName=\"artifactUpload\" (change) = \"onChanges($event)\"><br><br>\n<input type =\"submit\" value = \"Submit\">\n<hr>\n</form>\n</div>\n\n<br>\n\n<h3>Download Artifacts from here:</h3> <button (click)=\"downloadArtifacts()\">Download</button><br>\n\n<h3>Extract Sprint</h3><button (click)=\"extractSprint()\">Extract</button>\n<br>\n<br> -->\n</body>"

/***/ }),

/***/ "./src/app/sprintupload/sprintupload.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sprintupload/sprintupload.component.ts ***!
  \********************************************************/
/*! exports provided: SprintuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintuploadComponent", function() { return SprintuploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_sprintupload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sprintupload.service */ "./src/app/services/sprintupload.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_artifact_add_artifact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-artifact/add-artifact.component */ "./src/app/add-artifact/add-artifact.component.ts");
/* harmony import */ var _add_sprint_add_sprint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-sprint/add-sprint.component */ "./src/app/add-sprint/add-sprint.component.ts");









var SprintuploadComponent = /** @class */ (function () {
    function SprintuploadComponent(sprint, formBuilder, router, nav, dialog) {
        this.sprint = sprint;
        this.formBuilder = formBuilder;
        this.router = router;
        this.nav = nav;
        this.dialog = dialog;
        this.projectname = localStorage.getItem('projectname');
        this.description = localStorage.getItem('projectdesc');
        this.load = false;
        this.loadartifact = false;
        this.owner = JSON.parse(localStorage.getItem('members'));
        this.ownername = this.owner[0].username;
        this.showArt = false;
        this.showSp = false;
        this.showEmpty = true;
    }
    SprintuploadComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    SprintuploadComponent.prototype.downloadArtifacts = function (fileid) {
        var _this = this;
        console.log(fileid);
        console.log(localStorage.getItem('projectid'));
        var formData = new FormData();
        formData.append('artifactID', fileid);
        formData.append('projectID', localStorage.getItem('projectid'));
        var request = {
            "artifactID": fileid,
            "projectID": localStorage.getItem('projectid')
        };
        this.sprint.downLoadArtifactsFile(request).subscribe(function (data) { return _this.displayDownloadedFile(data, request.artifactID); }),
            function (error) { return console.log('Error downloading the file.'); },
            function () { return console.info('OK'); };
    };
    SprintuploadComponent.prototype.displayDownloadedFile = function (data, name) {
        console.log(name);
        console.log(name.split('-'));
        var newName = name.split('-')[0];
        console.log(newName);
        var blob = new Blob([data]);
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = newName; //this.substring(name);
        a.click();
        //window.open(url);
    };
    SprintuploadComponent.prototype.substring = function (name) {
        var temp = name.split("-");
        return temp[temp.length - 1];
    };
    SprintuploadComponent.prototype.extractSprint = function () {
        console.log(localStorage.getItem('sprintID'));
        this.sprint.getSprint(localStorage.getItem('sprintID')).subscribe(function (res) {
            console.log(res);
        });
    };
    // sprintdisplay(){
    //   if(this.load==true){
    //     this.load=false;
    //     console.log('false')
    //   }else{
    //     this.load=true;
    //   }
    // }
    // artifactdisplay(){
    //   if(this.loadartifact==true){
    //     this.loadartifact=false; 
    //   }else{
    //     this.loadartifact=true;
    //   }
    // }
    SprintuploadComponent.prototype.addArtifact = function () {
        var dialogRef = this.dialog.open(_add_artifact_add_artifact_component__WEBPACK_IMPORTED_MODULE_7__["AddArtifactComponent"], {
            width: '300px',
            height: '300px'
        });
    };
    SprintuploadComponent.prototype.addSprint = function () {
        var dialogRef = this.dialog.open(_add_sprint_add_sprint_component__WEBPACK_IMPORTED_MODULE_8__["AddSprintComponent"], {
            height: '300px',
            width: '300px',
        });
    };
    SprintuploadComponent.prototype.showArtifact = function () {
        var _this = this;
        var projectId = localStorage.getItem('projectid');
        console.log(projectId);
        this.sprint.fetchProjectByID({ projectId: projectId }).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('artifactsname', JSON.stringify(res.sprint.artifacts));
            _this.artifactname = JSON.parse(localStorage.getItem('artifactsname'));
            _this.len1 = _this.artifactname.length;
            console.log(_this.artifactname);
        });
        if (this.showArt == false) {
            this.showArt = true;
            this.showSp = false;
            this.showEmpty = false;
        }
    };
    SprintuploadComponent.prototype.showSprint = function () {
        if (this.showSp == false) {
            this.showSp = true;
            this.showArt = false;
            this.showEmpty = false;
            this.sprintname = JSON.parse(localStorage.getItem('sprints'));
            this.len = this.sprintname.length;
            console.log(this.sprintname);
        }
    };
    SprintuploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sprintupload',
            template: __webpack_require__(/*! ./sprintupload.component.html */ "./src/app/sprintupload/sprintupload.component.html"),
            styles: [__webpack_require__(/*! ./sprintupload.component.css */ "./src/app/sprintupload/sprintupload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sprintupload_service__WEBPACK_IMPORTED_MODULE_3__["SprintuploadService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], SprintuploadComponent);
    return SprintuploadComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.css":
/*!***********************************************!*\
  !*** ./src/app/success/success.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/success/success.component.html":
/*!************************************************!*\
  !*** ./src/app/success/success.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n    You have successfully registered!\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\"></button>\n</div>"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/success/success.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/uploaded/uploaded.component.css":
/*!*************************************************!*\
  !*** ./src/app/uploaded/uploaded.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZGVkL3VwbG9hZGVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/uploaded/uploaded.component.html":
/*!**************************************************!*\
  !*** ./src/app/uploaded/uploaded.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n File uploaded successfully\n <button (click)=\"onNoClick()\">Ok</button>\n</p>\n"

/***/ }),

/***/ "./src/app/uploaded/uploaded.component.ts":
/*!************************************************!*\
  !*** ./src/app/uploaded/uploaded.component.ts ***!
  \************************************************/
/*! exports provided: UploadedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadedComponent", function() { return UploadedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var UploadedComponent = /** @class */ (function () {
    function UploadedComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    UploadedComponent.prototype.ngOnInit = function () {
    };
    UploadedComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        window.location.reload();
    };
    UploadedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uploaded',
            template: __webpack_require__(/*! ./uploaded.component.html */ "./src/app/uploaded/uploaded.component.html"),
            styles: [__webpack_require__(/*! ./uploaded.component.css */ "./src/app/uploaded/uploaded.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], UploadedComponent);
    return UploadedComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/01hw974742/Desktop/Kanban1/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/01hw974742/Desktop/Kanban1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map