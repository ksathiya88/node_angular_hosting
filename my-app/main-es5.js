(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/authentication/authentication.module": [
		"./src/app/modules/authentication/authentication.module.ts",
		"modules-authentication-authentication-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <router-outlet></router-outlet>\r\n  <!-- <h1>Name:{{name | uppercase | decorator:'+':'*' }}</h1>\r\n  <h1>DOB:{{dateOfBirth| date:'short' }}</h1>  -->\r\n\r\n  <!-- <h1> -->\r\n  <!-- <input type=\"text\" [value]=\"title\" (input)=\"setInput($event)\" /> -->\r\n  <!-- <input type=\"text\" [value]=\"title\" (input)=\"title=$event.target.value\" /> -->\r\n  <!-- <input type=\"text\" appHighlight [(ngModel)]=\"title\" /> -->\r\n\r\n  <!-- <input [ngModel]=\"title\" (ngModelChange)=\"title = $event\" />\r\n\r\n    <div>Welcome to {{ title }}!</div>\r\n    <div>\r\n      <button (click)=\"printHello()\">Submit</button>\r\n    </div> -->\r\n  <!-- </h1> -->\r\n  <!-- Structural Directive -->\r\n  <!-- Array:{{ arrayElem }} -->\r\n  <!-- ngFor -->\r\n  <!-- <div *ngFor=\"let elem of arrayElem\"> -->\r\n  <!-- <h2>{{ elem }}</h2> -->\r\n  <!-- <input [(ngModel)]=\"elem\" /> -->\r\n  <!-- <input appHighlight value=\"{{ elem }}\" />\r\n    {{ elem }}\r\n  </div> -->\r\n  <!-- ngIf -->\r\n  <!-- <div *ngIf=\"title == 'my-app'\">\r\n    <h2>Sample Content</h2>\r\n  </div> -->\r\n  <!-- Attribute Directive -->\r\n  <!-- ngStyle -->\r\n  <!-- <h1 [ngStyle]=\"{color:colorElem}\">This is a Blue Heading</h1> -->\r\n  <!-- ngClass -->\r\n  <!-- <h1 [ngClass]=\"{'back-color':title=='my-app'}\">This is a Blue Heading</h1> -->\r\n  <!-- <app-employee-list></app-employee-list> -->\r\n\r\n</div>\r\n<!-- <router-outlet></router-outlet> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-employee/add-employee.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-employee/add-employee.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"employee_class\">\r\n  <!-- <form #f=\"ngForm\"> -->\r\n  Add Employee\r\n  <br /><br />\r\n  <label for=\"name\">Name:</label>\r\n  <input id=\"name\" required type=\"text\" name=\"name\" [(ngModel)]=\"employeeModel.name\" #name=\"ngModel\" />\r\n  <span *ngIf=\"!name.valid && name.touched\" class=\"help-block\">Username is required</span>\r\n  <br />\r\n  <label for=\"dob\">Date Of Birth:</label>\r\n  <input id=\"dob\" type=\"date\" name=\"dob\" required [(ngModel)]=\"employeeModel.dateOfBirth\" #dob=\"ngModel\" />\r\n  <br />\r\n  <label for=\"position_held\">Position Held:</label>\r\n  <select name=\"position_held\" id=\"position_held\" [(ngModel)]=\"employeeModel.positionHeld\">\r\n    <option value=\"Manager\">Manager</option>\r\n    <option value=\"Software Engineer\">Software Engineer</option>\r\n    <option value=\"Lead\">Lead</option>\r\n  </select>\r\n  <br /><br />\r\n  <input [disabled]=\"!name.valid && !dob.valid\" type=\"button\" value=\"Submit\" (click)=\"submit()\" />\r\n  <br />\r\n  <!-- </form> -->\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employee-list/employee-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employee-list/employee-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"employee_class\" *ngFor=\"let employee1 of employees\">\r\n  <app-employee *ngIf=\"value1=='ggggg'\" [employee]=\"employee1\" (deleteEvent)=\"deleteEmployee($event)\">\r\n      <!-- <div>Footer...</div> -->\r\n      Value1:<div>{{value1}}</div>\r\n  </app-employee>\r\n</div>\r\n\r\n<button (click)=\"onSubmit()\">Submit</button>\r\n<!-- <app-add-employee (refresh)=\"refreshEmployees()\"></app-add-employee> -->\r\n<!-- <input [(ngModel)]=\"employee1\"> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employee/employee.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employee/employee.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\r\n  <div><label appAppHeader>Employee Name:</label>{{employee.name | uppercase }}</div>\r\n  <div><label appAppHeader>DOB:</label>&nbsp;&nbsp;{{employee.dateOfBirth | date:'longDate'}}</div>\r\n  <div><label appAppHeader>Position Held:</label>{{employee.positionHeld | decorator:\"**\":employee }}</div>\r\n  <div><input type=\"button\" value=\"Delete\" (click)=\"deleteFn(employee.key)\" /></div>\r\n  <div><button [routerLink]=\"['/home/employeeList']\" [queryParams]=\"{'Edit':1}\"\r\n      fragment=\"education\">GotoEmployee</button></div>\r\n</form>\r\n<ng-content></ng-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/reactive-login/reactive-login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/reactive-login/reactive-login.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Reactive Model Form</h1>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName:</label>\r\n    <input formControlName=\"username\" name=\"username\" id=\"username\" type=\"text\">\r\n    <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\" class=\"help-block\">Username is\r\n      required</span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password:</label>\r\n    <input formControlName=\"password\" name=\"password\" id=\"password\" type=\"password\">\r\n    <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').errors?.minlength\"\r\n      class=\"help-block\">Minimum 4 letters is mandatory</span>\r\n    <span\r\n      *ngIf=\"!loginForm.get('password').valid && !loginForm.get('password').errors?.minlength && loginForm.get('password').touched\"\r\n      class=\"help-block\">Password is required</span>\r\n  </div>\r\n  <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n    <strong>Authentication Failed !</strong>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button routerLink=\"employeeList\">Employee List</button>\r\n  <button routerLink=\"employeeAdd\">Add Employee</button>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/api/employee.service.ts":
/*!*****************************************!*\
  !*** ./src/app/api/employee.service.ts ***!
  \*****************************************/
/*! exports provided: EmployeeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeServiceService", function() { return EmployeeServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * Written by karthik on 11-06-2019
 * Handles all the http call for the Employee
 * So all the components need to use this service
 * for making http calls
 */
var EmployeeServiceService = /** @class */ (function () {
    function EmployeeServiceService(http) {
        this.http = http;
    }
    EmployeeServiceService.prototype.getEmployees = function () {
        return this.http.get("http://localhost:8081/getEmployees").pipe(Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    EmployeeServiceService.prototype.deleteEmployee = function (key) {
        return this.http
            .delete("http://localhost:8081/deleteEmployee", { params: { key: key } })
            .pipe(Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    EmployeeServiceService.prototype.addEmployee = function (dto) {
        return this.http.put("http://localhost:8081/addEmployee", dto);
    };
    EmployeeServiceService.prototype.getEmployee = function (key) {
        return this.http
            .get("http://localhost:8081/getEmployee", { params: { param: key } })
            .pipe(Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    EmployeeServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmployeeServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], EmployeeServiceService);
    return EmployeeServiceService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-color {\r\n  background-color: aqua\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = "my-app";
        this.colorElem = "blue";
        this.name = "abc";
        this.dateOfBirth = new Date();
        this.arrayElem = ["a", "b", "c", "d"];
        this.printHello = function () {
            console.log("print hello");
            _this.colorElem = "red";
        };
        this.setInput = function (event) {
            console.log("input", event);
            this.title = event.target.value;
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var myObservable = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next("first package");
            }, 2000);
            setTimeout(function () {
                observer.next("second package");
            }, 4000);
            setTimeout(function () {
                observer.next("third package");
            }, 6000);
            setTimeout(function () {
                observer.error("this does not work");
                // observer.complete();
            }, 8000);
            setTimeout(function () {
                observer.next("fourth package");
            }, 10000);
        });
        this.customObsSubscription = myObservable.subscribe(function (data) {
            console.log("data sent", data);
        }, function (error) {
            console.log("error", error);
        }, function () {
            console.log("completed");
        });
        this.customObsSubscription1 = myObservable.subscribe(function (data) {
            console.log("data sent", data);
        }, function (error) {
            console.log("error", error);
        }, function () {
            console.log("completed");
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.customObsSubscription.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directive_highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/highlight.directive */ "./src/app/directive/highlight.directive.ts");
/* harmony import */ var _pipes_decorator_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/decorator.pipe */ "./src/app/pipes/decorator.pipe.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-employee/add-employee.component */ "./src/app/components/add-employee/add-employee.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _components_reactive_login_reactive_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/reactive-login/reactive-login.component */ "./src/app/components/reactive-login/reactive-login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _helpers_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/basic-auth.interceptor */ "./src/app/helpers/basic-auth.interceptor.ts");

















var appRoutes = [
    {
        path: "",
        loadChildren: "./modules/authentication/authentication.module#AuthenticationModule"
    },
    {
        path: "home",
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__["HomePageComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
        children: [
            { path: "employeeList", component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeListComponent"] },
            {
                path: "employeeAdd",
                component: _components_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_11__["AddEmployeeComponent"]
            },
            {
                path: "employee/:key",
                component: _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeComponent"]
            }
        ]
    }
];
// const appRoutes: Routes = [
//   {
//     path: "home",
//     component: HomePageComponent,
//     children: [
//       { path: "employeeList", component: EmployeeListComponent },
//       { path: "employeeAdd", component: AddEmployeeComponent },
//       { path: "employee/:key", component: EmployeeComponent }
//     ]
//   }
// ];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _directive_highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"],
                _pipes_decorator_pipe__WEBPACK_IMPORTED_MODULE_7__["DecoratorPipe"],
                _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeListComponent"],
                _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeComponent"],
                _components_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_11__["AddEmployeeComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__["HomePageComponent"],
                _components_reactive_login_reactive_login_component__WEBPACK_IMPORTED_MODULE_14__["ReactiveLoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _helpers_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["BasicAuthInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-employee/add-employee.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-employee/add-employee.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWVtcGxveWVlL2FkZC1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add-employee/add-employee.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-employee/add-employee.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_EmployeeModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/EmployeeModel */ "./src/app/model/EmployeeModel.ts");
/* harmony import */ var src_app_api_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/employee.service */ "./src/app/api/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.employeeModel = new src_app_model_EmployeeModel__WEBPACK_IMPORTED_MODULE_2__["EmployeeModel"]();
        this.employeeModel.positionHeld = "Software Engineer";
    }
    AddEmployeeComponent.prototype.submit = function () {
        var _this = this;
        console.log("Employee Object", this.employeeModel);
        this.employeeService
            .addEmployee(this.employeeModel.toDTO())
            .subscribe(function () {
            // this.refresh.emit("added");
            _this.router.navigate(["home", "employeeList"]);
        });
    };
    AddEmployeeComponent.prototype.ngOnInit = function () { };
    AddEmployeeComponent.ctorParameters = function () { return [
        { type: src_app_api_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-employee",
            template: __webpack_require__(/*! raw-loader!./add-employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-employee/add-employee.component.html"),
            styles: [__webpack_require__(/*! ./add-employee.component.css */ "./src/app/components/add-employee/add-employee.component.css")]
        })
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee_class {\r\n  padding: 10px;\r\n  border: 1px green solid;\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWVfY2xhc3Mge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_delete_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/delete-service.service */ "./src/app/service/delete-service.service.ts");
/* harmony import */ var src_app_api_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/employee.service */ "./src/app/api/employee.service.ts");
/* harmony import */ var src_app_model_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/EmployeeModel */ "./src/app/model/EmployeeModel.ts");





var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(deleteService, employeeService) {
        this.employeeService = employeeService;
        this.employees = [];
        this.value1 = "ggggg";
        this.deleteService = deleteService;
    }
    EmployeeListComponent.prototype.onSubmit = function () {
        this.value1 = "hhhh";
    };
    EmployeeListComponent.prototype.refreshEmployees = function () {
        var _this = this;
        this.employeeService
            .getEmployees()
            .subscribe(function (employeeDtos) {
            _this.employees = employeeDtos.map(function (empDto) {
                return src_app_model_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__["EmployeeModel"].fromDTO(empDto);
            });
        });
    };
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.refreshEmployees();
        // console.log(
        //   "Observables",
        //   this.http.get("http://localhost:8081/getEmployees")
        // );
    };
    EmployeeListComponent.prototype.deleteEmployee = function (key) {
        var _this = this;
        // console.log("deleteEmployee111111", key);
        // const item = this.employees.find(item1 => {
        //   return item1.key === key;
        // });
        // this.employees.splice(this.employees.indexOf(item), 1);
        // return;
        // this.deleteService.deleteFromList(this.employees, key);
        this.employeeService
            .deleteEmployee(key)
            .subscribe(function (employeeDtos) {
            _this.employees = employeeDtos.map(function (empDto) {
                return src_app_model_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__["EmployeeModel"].fromDTO(empDto);
            });
        });
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: src_app_service_delete_service_service__WEBPACK_IMPORTED_MODULE_2__["DeleteServiceService"] },
        { type: src_app_api_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeServiceService"] }
    ]; };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-employee-list",
            template: __webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/components/employee-list/employee-list.component.css")]
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/employee.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/employee/employee.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_EmployeeModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/EmployeeModel */ "./src/app/model/EmployeeModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_api_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/employee.service */ "./src/app/api/employee.service.ts");





var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(activatedRoute, employeeService) {
        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.value1 = "Hello";
    }
    EmployeeComponent.prototype.ngOnChanges = function (simpleProperty) {
        console.log("ngOnChanges", simpleProperty);
    };
    EmployeeComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    // runs once when the content gets projected 
    EmployeeComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit called");
    };
    // runs multiple times to check whether
    // content projected has changed 
    EmployeeComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked called");
    };
    // After View is intialised
    EmployeeComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit called");
    };
    // After View is Checked
    // multiple times
    EmployeeComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked called");
    };
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        // console.log("actiavedRoute", this.activatedRoute.snapshot.params);
        // console.log("query Params", this.activatedRoute.snapshot.queryParams);
        // console.log("fragment", this.activatedRoute.snapshot.fragment);
        var key = this.activatedRoute.snapshot.params.key;
        if (key) {
            this.employeeService.getEmployee(key).subscribe(function (emp) {
                // console.log('employee', emp);
                _this.employee = src_app_model_EmployeeModel__WEBPACK_IMPORTED_MODULE_2__["EmployeeModel"].fromDTO(emp);
            });
        }
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy called");
    };
    EmployeeComponent.prototype.deleteFn = function (key) {
        console.log("employee object", key);
        this.deleteEvent.emit(key);
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_api_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeServiceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EmployeeComponent.prototype, "employee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], EmployeeComponent.prototype, "deleteEvent", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-employee",
            template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/components/employee/employee.component.css")]
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/reactive-login/reactive-login.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/reactive-login/reactive-login.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVhY3RpdmUtbG9naW4vcmVhY3RpdmUtbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/reactive-login/reactive-login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/reactive-login/reactive-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReactiveLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveLoginComponent", function() { return ReactiveLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// import {AuthenticationService} from '../../services';

var ReactiveLoginComponent = /** @class */ (function () {
    function ReactiveLoginComponent(
    // private authenticationService: AuthenticationService,
    router) {
        this.router = router;
    }
    ReactiveLoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)
            ])
        });
    };
    ReactiveLoginComponent.prototype.onSubmit = function () {
        // this.authenticationService
        //   .login(this.loginForm.value.username, this.loginForm.value.password)
        //   // .pipe(first())
        //   .subscribe(
        //     data => {
        this.router.navigate(["home", "employeeList"]);
        //   },
        //   error => {
        //     this.error = error;
        //     // this.loading = false;
        //   }
        // );
    };
    ReactiveLoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ReactiveLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-reactive-login",
            template: __webpack_require__(/*! raw-loader!./reactive-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/reactive-login/reactive-login.component.html"),
            styles: [__webpack_require__(/*! ./reactive-login.component.css */ "./src/app/components/reactive-login/reactive-login.component.css")]
        })
    ], ReactiveLoginComponent);
    return ReactiveLoginComponent;
}());



/***/ }),

/***/ "./src/app/directive/highlight.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directive/highlight.directive.ts ***!
  \**************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elementRef) {
        this.elementRef = elementRef;
        console.log("elementRef", elementRef);
    }
    HighlightDirective.prototype.onclick = function () {
        console.log("Element Clicked");
        this.backColor = "yellow";
        this.inputValue = "clicked";
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        console.log("Element Clicked");
        this.backColor = "blue";
        this.inputValue = "leave";
    };
    HighlightDirective.prototype.ngOnInit = function () {
        // this.elementRef.nativeElement.style.backgroundColor = "yellow";
        this.backColor = "red";
        this.inputValue = "sample";
    };
    HighlightDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("value")
    ], HighlightDirective.prototype, "inputValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style.backgroundColor")
    ], HighlightDirective.prototype, "backColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")
    ], HighlightDirective.prototype, "onclick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave")
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appHighlight]"
        })
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem("currentUser")) {
            // logged in so return true
            return true;
        }
        console.log("state11", state);
        // not logged in so redirect to login page with the return url
        this.router.navigate(["/"], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/helpers/basic-auth.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/helpers/basic-auth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicAuthInterceptor = /** @class */ (function () {
    function BasicAuthInterceptor() {
    }
    BasicAuthInterceptor.prototype.intercept = function (request, next) {
        console.log('request Basic', request);
        console.log('httpHandler Basic', next);
        // add authorization header with basic auth credentials if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic " + currentUser.authdata
                }
            });
        }
        return next.handle(request);
    };
    BasicAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BasicAuthInterceptor);
    return BasicAuthInterceptor;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/model/EmployeeModel.ts":
/*!****************************************!*\
  !*** ./src/app/model/EmployeeModel.ts ***!
  \****************************************/
/*! exports provided: EmployeeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModel", function() { return EmployeeModel; });
/* harmony import */ var _utils_js_dateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js/dateUtils */ "./src/app/utils.js/dateUtils.ts");

// import { IEmployeeDTO } from "..";
// import { parseDate } from "../utils/dateUtils";
/**
 * Employee Model which is representation of the
 * dto.It is the Model Object which is represented in the view.
 * Used by the Employee Component to show the View.
 */
var EmployeeModel = /** @class */ (function () {
    function EmployeeModel() {
    }
    EmployeeModel.fromDTO = function (employeeDTO) {
        var employeeModel = new EmployeeModel();
        employeeModel.name = employeeDTO.name;
        employeeModel.key = employeeDTO.key;
        employeeModel.dateOfBirth = new Date(employeeDTO.date_of_birth);
        employeeModel.positionHeld = employeeDTO.position_held;
        return employeeModel;
    };
    EmployeeModel.prototype.toDTO = function () {
        // console.log('dob', this.dateOfBirth);
        // console.log('this', this);
        var dto = {};
        dto.name = this.name;
        dto.key = this.key;
        var dateObj = Object(_utils_js_dateUtils__WEBPACK_IMPORTED_MODULE_0__["parseDate"])(this.dateOfBirth);
        dto.date_of_birth = dateObj.toLocaleDateString();
        dto.position_held = this.positionHeld;
        return dto;
    };
    return EmployeeModel;
}());



/***/ }),

/***/ "./src/app/pipes/decorator.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/decorator.pipe.ts ***!
  \*****************************************/
/*! exports provided: DecoratorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratorPipe", function() { return DecoratorPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DecoratorPipe = /** @class */ (function () {
    function DecoratorPipe() {
    }
    DecoratorPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log("value11111", value);
        console.log("args", args);
        if (args[1].key != 4) {
            return args[0] + value + args[0];
        }
        else {
            return value;
        }
    };
    DecoratorPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "decorator"
        })
    ], DecoratorPipe);
    return DecoratorPipe;
}());



/***/ }),

/***/ "./src/app/service/delete-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/delete-service.service.ts ***!
  \***************************************************/
/*! exports provided: DeleteServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteServiceService", function() { return DeleteServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteServiceService = /** @class */ (function () {
    function DeleteServiceService() {
    }
    DeleteServiceService.prototype.deleteFromList = function (list, key) {
        console.log("list", list, key);
        var item = list.find(function (item1) {
            return item1.key === key;
        });
        list.splice(list.indexOf(item), 1);
        return;
    };
    DeleteServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], DeleteServiceService);
    return DeleteServiceService;
}());



/***/ }),

/***/ "./src/app/utils.js/dateUtils.ts":
/*!***************************************!*\
  !*** ./src/app/utils.js/dateUtils.ts ***!
  \***************************************/
/*! exports provided: parseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/**
 *
 * Contains Date Utility Functions
 *
 */
/**
 * Converts from string to Date
 * @param  s string
 * @returns Date
 */
function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\Angular_Test_2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map