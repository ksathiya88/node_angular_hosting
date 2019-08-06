(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Template Model Form</h1>\r\n<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName:</label>\r\n    <input id=\"username\" type=\"text\" name=\"username\" [(ngModel)]=\"username\" required #name=\"ngModel\">\r\n    <span *ngIf=\"!name.valid && name.touched\" class=\"help-block\">Username is required</span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password:</label>\r\n    <input id=\"password\" name=\"password\" type=\"password\" minlength=\"4\" ngModel required #pass=\"ngModel\">\r\n    <span *ngIf=\"!pass.valid && (pass.errors!=null) && pass.touched\" class=\"help-block\">Minimum 4 letters is\r\n      mandatory</span>\r\n    <span *ngIf=\"!pass.valid && !(pass.errors!=null) && pass.touched\" class=\"help-block\">Password is required</span>\r\n  </div>\r\n  <button type=\"submit\" class=\"submit btn btn-primary\">Submit</button>\r\n  <!-- <button type=\"submit\" class=\"submit btn btn-primary\">Submit</button> -->\r\n  <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n    <strong>Authentication Failed !</strong>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/logout/logout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/logout/logout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input id=\"logout\" class=\"btn btn-danger logout\" type=\"button\" value=\"logout\" (click)=\"logout()\">\n"

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required],\r\n.ng-valid.required {\r\n  border-left: 5px solid #42A948;\r\n  /* green */\r\n}\r\n\r\n.ng-invalid.ng-touched {\r\n  border-left: 5px solid #a94442;\r\n  /* red */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSxcclxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgLyogZ3JlZW4gKi9cclxufVxyXG5cclxuLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gIC8qIHJlZCAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");


// import { EmployeeServiceService } from "../../api/employee/employee-service.service";


// import { AuthenticationService } from "../../services";
/**
 * Written by karthik on 11-06-2019
 * Provides the Login Page for the Application
 * loaded when the user enters 'login' in the url
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(
    // public httpService: EmployeeServiceService,
    route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("routeValue", this.route.snapshot.params.key);
        console.log("routeValue1", this.route.snapshot.fragment);
        console.log("routeValue222", this.route.snapshot.queryParams);
    };
    LoginComponent.prototype.onSubmit = function (form) {
        // console.log(
        //   "template Model",
        //   form,
        //   form.value.username,
        //   form.value.password
        // );
        // // console.log("routeValue", this.route.snapshot.params.key);
        // // console.log("routeValue1", this.route.snapshot.fragment);
        // // console.log("routeValue222", this.route.snapshot.queryParams);
        var _this = this;
        this.authenticationService
            .login(form.value.username, form.value.password)
            // .pipe(first())
            .subscribe(function (data) {
            console.log("user2222", data);
            _this.router.navigate(["home", "employeeList"]);
        }, function (error) {
            _this.error = error;
            console.log("error", _this.error);
            // this.loading = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logout/logout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout{\r\n    position: fixed;\r\n    top: 0px;\r\n    right: 0px;\r\n  }\r\n  \r\n  .ng-valid[required], .ng-valid.required  {\r\n      border-left: 5px solid #42A948; /* green */\r\n    }\r\n  \r\n  .ng-invalid:not(form) {\r\n      border-left: 5px solid #a94442; /* red */\r\n    }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7RUFDWjs7RUFFQTtNQUNJLDhCQUE4QixFQUFFLFVBQVU7SUFDNUM7O0VBRUY7TUFDSSw4QkFBOEIsRUFBRSxRQUFRO0lBQzFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gIH1cclxuICBcclxuICAubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG4gICAgfVxyXG4gIFxyXG4gIC5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbiAgICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router) {
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")]
        })
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var authenticationRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] }
];
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(authenticationRoutes)
            ],
            exports: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http
            .post("http://localhost:8081/users/authenticate", {
            username: username,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ":" + password);
                localStorage.setItem("currentUser", JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem("currentUser");
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-authentication-authentication-module-es5.js.map