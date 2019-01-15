(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/angular-material-components/angular-material-components.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/angular-material-components/angular-material-components.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AngularMaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialComponentsModule", function() { return AngularMaterialComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AngularMaterialComponentsModule = /** @class */ (function () {
    function AngularMaterialComponentsModule() {
    }
    AngularMaterialComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]
            ],
        })
    ], AngularMaterialComponentsModule);
    return AngularMaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/angular-material-components/dialog-confirm.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/angular-material-components/dialog-confirm.component.ts ***!
  \*************************************************************************/
/*! exports provided: DialogConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogConfirm", function() { return DialogConfirm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogConfirm = /** @class */ (function () {
    function DialogConfirm(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogConfirm.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogConfirm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-confirm',
            template: __webpack_require__(/*! ./dialog-confirm.html */ "./src/app/angular-material-components/dialog-confirm.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogConfirm);
    return DialogConfirm;
}());



/***/ }),

/***/ "./src/app/angular-material-components/dialog-confirm.html":
/*!*****************************************************************!*\
  !*** ./src/app/angular-material-components/dialog-confirm.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Confirmação</h1>\n<div mat-dialog-content>\n  <p>Confirma a remoção do item:</p>\n  <p>{{data.name}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"false\">Cancelar</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Remover</button>\n</div>"

/***/ }),

/***/ "./src/app/angular-material-components/nav/nav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/angular-material-components/nav/nav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <!-- TODO: add logo here -->\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/events\">Eventos</a>\n      <a mat-list-item routerLink=\"/cities\">Cidades</a>\n      <a mat-list-item routerLink=\"/orgs\">Organizações</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <!-- TODO: Add logo -->\n      <span>Sul BA Guia - Admin module</span>\n    </mat-toolbar>\n\n    <!-- Add Content Here -->\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/angular-material-components/nav/nav.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/angular-material-components/nav/nav.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9hbmd1bGFyLW1hdGVyaWFsLWNvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHlCQUFnQjtFQUFoQixpQkFBZ0I7RUFDaEIsT0FBTTtFQUNOLFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItbWF0ZXJpYWwtY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/angular-material-components/nav/nav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/angular-material-components/nav/nav.component.ts ***!
  \******************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/angular-material-components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/angular-material-components/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/list-events/list-events.component */ "./src/app/events/list-events/list-events.component.ts");
/* harmony import */ var _events_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/add-event/add-event.component */ "./src/app/events/add-event/add-event.component.ts");
/* harmony import */ var _events_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/edit-event/edit-event.component */ "./src/app/events/edit-event/edit-event.component.ts");
/* harmony import */ var _cities_list_cities_list_cities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cities/list-cities/list-cities.component */ "./src/app/cities/list-cities/list-cities.component.ts");
/* harmony import */ var _cities_add_city_add_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cities/add-city/add-city.component */ "./src/app/cities/add-city/add-city.component.ts");
/* harmony import */ var _cities_edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cities/edit-city/edit-city.component */ "./src/app/cities/edit-city/edit-city.component.ts");
/* harmony import */ var _orgs_list_orgs_list_orgs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orgs/list-orgs/list-orgs.component */ "./src/app/orgs/list-orgs/list-orgs.component.ts");
/* harmony import */ var _orgs_add_org_add_org_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orgs/add-org/add-org.component */ "./src/app/orgs/add-org/add-org.component.ts");
/* harmony import */ var _orgs_edit_org_edit_org_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orgs/edit-org/edit-org.component */ "./src/app/orgs/edit-org/edit-org.component.ts");












var routes = [
    { path: 'events', component: _events_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_3__["ListEventsComponent"] },
    { path: 'events/add', component: _events_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_4__["AddEventComponent"] },
    { path: 'events/edit/:id', component: _events_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_5__["EditEventComponent"] },
    { path: 'cities', component: _cities_list_cities_list_cities_component__WEBPACK_IMPORTED_MODULE_6__["ListCitiesComponent"] },
    { path: 'cities/add', component: _cities_add_city_add_city_component__WEBPACK_IMPORTED_MODULE_7__["AddCityComponent"] },
    { path: 'cities/edit/:id', component: _cities_edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_8__["EditCityComponent"] },
    { path: 'orgs', component: _orgs_list_orgs_list_orgs_component__WEBPACK_IMPORTED_MODULE_9__["ListOrgsComponent"] },
    { path: 'orgs/add', component: _orgs_add_org_add_org_component__WEBPACK_IMPORTED_MODULE_10__["AddOrgComponent"] },
    { path: 'orgs/edit/:id', component: _orgs_edit_org_edit_org_component__WEBPACK_IMPORTED_MODULE_11__["EditOrgComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav></app-nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, _hotkeysService) {
        var _this = this;
        this.router = router;
        this._hotkeysService = _hotkeysService;
        this.title = 'admin';
        _hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('shift+1', function (event) {
            _this.router.navigate(["/events"]);
            return false;
        }));
        _hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('shift+2', function (event) {
            _this.router.navigate(["/cities"]);
            return false;
        }));
        _hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('shift+3', function (event) {
            _this.router.navigate(["/orgs"]);
            return false;
        }));
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotkeysService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular-material-components/nav/nav.component */ "./src/app/angular-material-components/nav/nav.component.ts");
/* harmony import */ var _angular_material_components_angular_material_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./angular-material-components/angular-material-components.module */ "./src/app/angular-material-components/angular-material-components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_components_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./angular-material-components/dialog-confirm.component */ "./src/app/angular-material-components/dialog-confirm.component.ts");
/* harmony import */ var _events_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/list-events/list-events.component */ "./src/app/events/list-events/list-events.component.ts");
/* harmony import */ var _events_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./events/add-event/add-event.component */ "./src/app/events/add-event/add-event.component.ts");
/* harmony import */ var _events_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./events/edit-event/edit-event.component */ "./src/app/events/edit-event/edit-event.component.ts");
/* harmony import */ var _cities_list_cities_list_cities_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cities/list-cities/list-cities.component */ "./src/app/cities/list-cities/list-cities.component.ts");
/* harmony import */ var _cities_add_city_add_city_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cities/add-city/add-city.component */ "./src/app/cities/add-city/add-city.component.ts");
/* harmony import */ var _cities_edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cities/edit-city/edit-city.component */ "./src/app/cities/edit-city/edit-city.component.ts");
/* harmony import */ var _orgs_list_orgs_list_orgs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./orgs/list-orgs/list-orgs.component */ "./src/app/orgs/list-orgs/list-orgs.component.ts");
/* harmony import */ var _orgs_add_org_add_org_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./orgs/add-org/add-org.component */ "./src/app/orgs/add-org/add-org.component.ts");
/* harmony import */ var _orgs_edit_org_edit_org_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./orgs/edit-org/edit-org.component */ "./src/app/orgs/edit-org/edit-org.component.ts");










// import { FileSelectDirective } from 'ng2-file-upload';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _angular_material_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _events_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_15__["ListEventsComponent"], _events_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_16__["AddEventComponent"], _events_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_17__["EditEventComponent"],
                _cities_list_cities_list_cities_component__WEBPACK_IMPORTED_MODULE_18__["ListCitiesComponent"], _cities_add_city_add_city_component__WEBPACK_IMPORTED_MODULE_19__["AddCityComponent"], _cities_edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_20__["EditCityComponent"],
                _orgs_list_orgs_list_orgs_component__WEBPACK_IMPORTED_MODULE_21__["ListOrgsComponent"], _orgs_add_org_add_org_component__WEBPACK_IMPORTED_MODULE_22__["AddOrgComponent"], _orgs_edit_org_edit_org_component__WEBPACK_IMPORTED_MODULE_23__["EditOrgComponent"],
                _angular_material_components_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_14__["DialogConfirm"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__["HotkeyModule"].forRoot(),
                _angular_material_components_angular_material_components_module__WEBPACK_IMPORTED_MODULE_12__["AngularMaterialComponentsModule"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"], useValue: 'pt-BR' },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            entryComponents: [_angular_material_components_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_14__["DialogConfirm"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cities/add-city/add-city.component.html":
/*!*********************************************************!*\
  !*** ./src/app/cities/add-city/add-city.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-container\" [formGroup]=\"fg\"> \n  <!-- CODE -->\n  <mat-form-field>\n    <input #firstInput matInput formControlName=\"code\" placeholder=\"Código\" required>\n  </mat-form-field>\n\n  <!-- NAME -->\n  <mat-form-field>\n    <input matInput formControlName=\"name\" placeholder=\"Nome\" required>\n  </mat-form-field>\n\n  <button mat-raised-button color=\"accent\" [disabled]=\"!fg.valid\" (click)=\"save()\">Salvar</button>\n</form>\n"

/***/ }),

/***/ "./src/app/cities/add-city/add-city.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/cities/add-city/add-city.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 36px; }\n\n.form-container > * {\n  width: 80%; }\n\n.form-container form {\n  margin-bottom: 20px; }\n\n.form-container form > * {\n  margin: 5px 0; }\n\n.form-container .mat-radio-button {\n  margin: 0 5px; }\n\nbutton {\n  margin-top: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9jaXRpZXMvYWRkLWNpdHkvYWRkLWNpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy9hZGQtY2l0eS9hZGQtY2l0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzZweDtcbn1cblxuLmZvcm0tY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBmb3JtID4gKiB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmZvcm0tY29udGFpbmVyIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/cities/add-city/add-city.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/cities/add-city/add-city.component.ts ***!
  \*******************************************************/
/*! exports provided: AddCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityComponent", function() { return AddCityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../city.service */ "./src/app/cities/city.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var AddCityComponent = /** @class */ (function () {
    function AddCityComponent(fb, service, router, snackBar) {
        this.service = service;
        this.router = router;
        this.snackBar = snackBar;
        this.fg = fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AddCityComponent.prototype.ngOnInit = function () {
        this.firstInput.nativeElement.focus();
    };
    AddCityComponent.prototype.save = function () {
        var _this = this;
        var data = {};
        data['code'] = this.fg.controls.code.value;
        data['name'] = this.fg.controls.name.value;
        this.service.add(data).subscribe(function (res) {
            _this.snackBar.open('Cidade adicionada com sucesso!', null, { duration: 2000 });
            _this.router.navigate(["/cities"]);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("firstInput"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddCityComponent.prototype, "firstInput", void 0);
    AddCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-city',
            template: __webpack_require__(/*! ./add-city.component.html */ "./src/app/cities/add-city/add-city.component.html"),
            styles: [__webpack_require__(/*! ./add-city.component.scss */ "./src/app/cities/add-city/add-city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AddCityComponent);
    return AddCityComponent;
}());



/***/ }),

/***/ "./src/app/cities/city.service.ts":
/*!****************************************!*\
  !*** ./src/app/cities/city.service.ts ***!
  \****************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
        // TODO: Config environment variables
        // host = 'http://localhost:8080';
        this.host = 'http://sulbaguia.com.br';
        this.url = this.host + '/api/cities';
    }
    CityService.prototype.get = function () {
        return this.http.get(this.url);
    };
    CityService.prototype.getById = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    CityService.prototype.update = function (data) {
        return this.http.put(this.url + "/" + data._id, data);
    };
    CityService.prototype.add = function (data) {
        return this.http.post(this.url, data);
    };
    CityService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/cities/edit-city/edit-city.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cities/edit-city/edit-city.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-container\" [formGroup]=\"fg\"> \n  <!-- CODE -->\n  <mat-form-field>\n    <input matInput formControlName=\"code\" placeholder=\"Código\" required>\n  </mat-form-field>\n\n  <!-- NAME -->\n  <mat-form-field>\n    <input matInput formControlName=\"name\" placeholder=\"Nome\" required>\n  </mat-form-field>\n\n  <button mat-raised-button color=\"primary\" (click)=\"cancel()\">Cancelar</button>\n  <button mat-raised-button color=\"accent\" [disabled]=\"!fg.valid\" (click)=\"update()\">Atualizar</button>\n</form>\n  "

/***/ }),

/***/ "./src/app/cities/edit-city/edit-city.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cities/edit-city/edit-city.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 36px; }\n\n.form-container > * {\n  width: 80%; }\n\n.form-container form {\n  margin-bottom: 20px; }\n\n.form-container form > * {\n  margin: 5px 0; }\n\n.form-container .mat-radio-button {\n  margin: 0 5px; }\n\nbutton {\n  margin-top: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9jaXRpZXMvZWRpdC1jaXR5L2VkaXQtY2l0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2l0aWVzL2VkaXQtY2l0eS9lZGl0LWNpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDM2cHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBmb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgZm9ybSA+ICoge1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/cities/edit-city/edit-city.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cities/edit-city/edit-city.component.ts ***!
  \*********************************************************/
/*! exports provided: EditCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCityComponent", function() { return EditCityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../city.service */ "./src/app/cities/city.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var EditCityComponent = /** @class */ (function () {
    function EditCityComponent(route, service, fb, router, snackBar) {
        this.route = route;
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.fg = fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    EditCityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.service.getById(p.id).subscribe(function (city) {
                _this.city = city;
                _this.fillForm(city);
            });
        });
    };
    EditCityComponent.prototype.fillForm = function (city) {
        this.fg.controls.code.setValue(city.code);
        this.fg.controls.name.setValue(city.name);
    };
    EditCityComponent.prototype.update = function () {
        var _this = this;
        var data = {};
        data['_id'] = this.city._id;
        data['code'] = this.fg.controls.code.value;
        data['name'] = this.fg.controls.name.value;
        this.service.update(data).subscribe(function (res) {
            _this.snackBar.open('Cidade atualizada com sucesso!', null, { duration: 2000 });
            _this.router.navigate(["/cities"]);
        });
    };
    EditCityComponent.prototype.cancel = function () {
        this.router.navigate(['/cities']);
    };
    EditCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-city',
            template: __webpack_require__(/*! ./edit-city.component.html */ "./src/app/cities/edit-city/edit-city.component.html"),
            styles: [__webpack_require__(/*! ./edit-city.component.scss */ "./src/app/cities/edit-city/edit-city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], EditCityComponent);
    return EditCityComponent;
}());



/***/ }),

/***/ "./src/app/cities/list-cities/list-cities-datasource.ts":
/*!**************************************************************!*\
  !*** ./src/app/cities/list-cities/list-cities-datasource.ts ***!
  \**************************************************************/
/*! exports provided: ListCitiesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCitiesDataSource", function() { return ListCitiesDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




/**
 * Data source for the CitiesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var ListCitiesDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ListCitiesDataSource, _super);
    function ListCitiesDataSource(paginator, sort, _data) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this._data = _data;
        _this.data = [];
        _this.data = _data;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    ListCitiesDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    ListCitiesDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ListCitiesDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ListCitiesDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'code': return compare(a.code, b.code, isAsc);
                default: return 0;
            }
        });
    };
    return ListCitiesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/cities/list-cities/list-cities.component.html":
/*!***************************************************************!*\
  !*** ./src/app/cities/list-cities/list-cities.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- code Column -->\n    <ng-container matColumnDef=\"code\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Código</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.code}}</td>\n    </ng-container>\n\n    <!-- name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Nome</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <!-- Actions Column -->  \n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let row\">\n        <button mat-icon-button (click)=\"edit(row._id)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"delete(row._id, row.title)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n\n<div class=\"fab\">\n  <button mat-icon-button (click)=\"add()\">\n    <mat-icon aria-label=\"Add\">add</mat-icon>\n  </button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cities/list-cities/list-cities.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/cities/list-cities/list-cities.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%; }\n\ndiv.fab {\n  color: #FFF;\n  position: fixed;\n  right: 36px;\n  top: 12px;\n  z-index: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9jaXRpZXMvbGlzdC1jaXRpZXMvbGlzdC1jaXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsVUFBUztFQUNULFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy9saXN0LWNpdGllcy9saXN0LWNpdGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5mYWIge1xuICBjb2xvcjogI0ZGRjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMzZweDtcbiAgdG9wOiAxMnB4O1xuICB6LWluZGV4OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cities/list-cities/list-cities.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cities/list-cities/list-cities.component.ts ***!
  \*************************************************************/
/*! exports provided: ListCitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCitiesComponent", function() { return ListCitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _list_cities_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-cities-datasource */ "./src/app/cities/list-cities/list-cities-datasource.ts");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../city.service */ "./src/app/cities/city.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_components_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-material-components/dialog-confirm.component */ "./src/app/angular-material-components/dialog-confirm.component.ts");







var ListCitiesComponent = /** @class */ (function () {
    function ListCitiesComponent(service, router, dialog, snackBar) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['code', 'name', 'actions'];
    }
    ListCitiesComponent.prototype.ngOnInit = function () { this.getCities(); };
    ListCitiesComponent.prototype.getCities = function () {
        var _this = this;
        this.service.get().subscribe(function (data) {
            _this.dataSource = new _list_cities_datasource__WEBPACK_IMPORTED_MODULE_3__["ListCitiesDataSource"](_this.paginator, _this.sort, data);
        });
    };
    ListCitiesComponent.prototype.edit = function (id) { this.router.navigate(["/cities/edit/" + id]); };
    ListCitiesComponent.prototype.add = function () { this.router.navigate(["/cities/add"]); };
    ListCitiesComponent.prototype.delete = function (id, title) {
        var _this = this;
        var dialogRef = this.dialog.open(_angular_material_components_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_6__["DialogConfirm"], { width: '320px', data: { title: title } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.service.delete(id).subscribe(function () { return _this.getCities(); });
                _this.snackBar.open('Cidade removida.', null, { duration: 2000 });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListCitiesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListCitiesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
    ], ListCitiesComponent.prototype, "table", void 0);
    ListCitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-cities',
            template: __webpack_require__(/*! ./list-cities.component.html */ "./src/app/cities/list-cities/list-cities.component.html"),
            styles: [__webpack_require__(/*! ./list-cities.component.scss */ "./src/app/cities/list-cities/list-cities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_city_service__WEBPACK_IMPORTED_MODULE_4__["CityService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ListCitiesComponent);
    return ListCitiesComponent;
}());



/***/ }),

/***/ "./src/app/events/add-event/add-event.component.html":
/*!***********************************************************!*\
  !*** ./src/app/events/add-event/add-event.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-container\" [formGroup]=\"fg\"> \n  <!-- TITLE -->\n  <mat-form-field>\n    <input #firstInput matInput formControlName=\"title\" placeholder=\"Título\" required>\n  </mat-form-field>\n\n  <!-- ORG -->\n  <mat-form-field>\n    <mat-select required formControlName=\"org_code\">\n      <mat-option *ngFor=\"let org of orgs\" [value]=\"org.code\">{{org.name}}</mat-option>\n    </mat-select>\n    <mat-label>Organização</mat-label>\n  </mat-form-field>\n\n  <!-- IMG -->\n  <mat-form-field>\n    <input matInput formControlName=\"img\" placeholder=\"Imagem\" required>\n  </mat-form-field>\n\n  <!-- START -->\n  <div class=\"start\">\n    <!-- TODO: Disable input -->\n    <mat-form-field class=\"date\">\n      <input matInput formControlName=\"start\" [matDatepicker]=\"startPicker\" placeholder=\"Data\">\n      <mat-datepicker-toggle matSuffix [for]=\"startPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #startPicker></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field class=\"time\">\n      <mat-select required formControlName=\"startTime\">\n        <mat-option *ngFor=\"let t of timeOptions\" [value]=\"t\">{{t}}h</mat-option>\n      </mat-select>\n      <mat-label>Horário</mat-label>\n    </mat-form-field>\n  </div>\n\n  <!-- END -->\n  <!-- <mat-form-field>\n    <input matInput formControlName=\"end\" [matDatepicker]=\"endPicker\" placeholder=\"Término\">\n    <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n    <mat-datepicker #endPicker></mat-datepicker>\n  </mat-form-field> -->\n\n  <mat-checkbox formControlName=\"featured\">Destaque</mat-checkbox>\n\n  <div class=\"row images\">\n    <div class=\"image-col col-12 col-sm-6 col-md-4 col-lg-3\">\n      <div class=\"img-wrapper\"><img [src]=\"imgPreview[0]\" *ngIf=\"imgPreview[0]\"></div>\n      <input #file0 type=\"file\" accept='image/*' (change)=\"preview(file0.files, 0)\" />\n      <button mat-raised-button color=\"primary\" (click)=\"file0.click()\">Imagem 1</button>\n    </div>\n\n    <div class=\"image-col col-12 col-sm-6 col-md-4 col-lg-3\">\n      <div class=\"img-wrapper\"><img [src]=\"imgPreview[1]\" *ngIf=\"imgPreview[1]\"></div>\n      <input #file1 type=\"file\" accept='image/*' (change)=\"preview(file1.files, 1)\" />\n      <button mat-raised-button color=\"primary\" (click)=\"file1.click()\">Imagem 2</button>\n    </div>\n\n    <div class=\"image-col col-12 col-sm-6 col-md-4 col-lg-3\">\n      <div class=\"img-wrapper\"><img [src]=\"imgPreview[2]\" *ngIf=\"imgPreview[2]\"></div>\n      <input #file2 type=\"file\" accept='image/*' (change)=\"preview(file2.files, 2)\" />\n      <button mat-raised-button color=\"primary\" (click)=\"file2.click()\">Imagem 3</button>\n    </div>\n  \n    <div class=\"image-col col-12 col-sm-6 col-md-4 col-lg-3\">\n      <div class=\"img-wrapper\"><img [src]=\"imgPreview[3]\" *ngIf=\"imgPreview[3]\"></div>\n      <input #file3 type=\"file\" accept='image/*' (change)=\"preview(file3.files, 3)\" />\n      <button mat-raised-button color=\"primary\" (click)=\"file3.click()\">Imagem 4</button>\n    </div>\n  </div>\n\n  <button mat-raised-button color=\"accent\" [disabled]=\"!fg.valid\" (click)=\"save()\">Salvar</button>\n\n\n\n  <!-- File input for the file-upload plugin, with special ng2-file-upload directive called ng2FileSelect -->\n  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n  <!-- button to trigger the file upload when submitted -->\n  <button type=\"button\" class=\"btn btn-success btn-s\"\n        (click)=\"uploader.uploadAll()\" \n        [disabled]=\"!uploader.getNotUploadedItems().length\">\n        Upload with ng-2 file uploader\n  </button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/events/add-event/add-event.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/events/add-event/add-event.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 36px; }\n\n.form-container > * {\n  width: 80%; }\n\n.form-container form {\n  margin-bottom: 20px; }\n\n.form-container form > * {\n  margin: 5px 0; }\n\n.form-container .mat-radio-button {\n  margin: 0 5px; }\n\nbutton {\n  margin-top: 16px; }\n\n.start * {\n  width: calc(50% - 8px); }\n\n.start .date {\n  padding-right: 4px; }\n\n.start .time {\n  padding-left: 4px;\n  line-height: 18px; }\n\n.start .time mat-select {\n    width: 100%; }\n\ndiv.row.images input {\n  display: none; }\n\ndiv.row.images .image-col {\n  text-align: center;\n  margin-bottom: 16px; }\n\ndiv.row.images .image-col button {\n    margin-top: 4px; }\n\ndiv.row.images div.img-wrapper {\n  height: 140px;\n  width: 140px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  outline: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden; }\n\ndiv.row.images div.img-wrapper img {\n    max-width: 140px;\n    max-height: 150%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9ldmVudHMvYWRkLWV2ZW50L2FkZC1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBRVEsdUJBQXNCLEVBQ3pCOztBQUhMO0VBS1EsbUJBQWtCLEVBQ3JCOztBQU5MO0VBU1Esa0JBQWlCO0VBQ2pCLGtCQUFpQixFQUlwQjs7QUFkTDtJQVlZLFlBQVcsRUFDZDs7QUFJVDtFQUVRLGNBQWEsRUFDaEI7O0FBSEw7RUFLUSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBSXRCOztBQVZMO0lBUVksZ0JBQWUsRUFDbEI7O0FBVFQ7RUFZUSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLHNDQUFrQztFQUNsQyxpQkFBZ0IsRUFNbkI7O0FBeEJMO0lBcUJZLGlCQUFnQjtJQUNoQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvYWRkLWV2ZW50L2FkZC1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzZweDtcbn1cblxuLmZvcm0tY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBmb3JtID4gKiB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmZvcm0tY29udGFpbmVyIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5zdGFydCB7XG4gICAgKiB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDhweCk7XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIC50aW1lIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBtYXQtc2VsZWN0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZGl2LnJvdy5pbWFnZXMge1xuICAgIGlucHV0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmltYWdlLWNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXYuaW1nLXdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MCU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/events/add-event/add-event.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/events/add-event/add-event.component.ts ***!
  \*********************************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/events/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _orgs_org_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../orgs/org.service */ "./src/app/orgs/org.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./src/app/models.ts");










var URL = 'http://localhost:8080/api/upload';
var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(fb, service, router, snackBar, orgService, http, el) {
        this.service = service;
        this.router = router;
        this.snackBar = snackBar;
        this.orgService = orgService;
        this.http = http;
        this.el = el;
        this.timeOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.imgPreview = [];
        this.files = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.fg = fb.group({
            start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startTime: [],
            org_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            featured: ['']
        });
    }
    AddEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orgService.get().subscribe(function (orgs) { return _this.orgs = orgs; });
        this.firstInput.nativeElement.focus();
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
    };
    // ngAfterViewInit() {
    //   console.log('ngAfterViewInit')
    //   this.firstInput.nativeElement.focus();
    // }
    AddEventComponent.prototype.save = function () {
        var _this = this;
        var event = new _models__WEBPACK_IMPORTED_MODULE_9__["Event"]();
        var dateWithTime = new Date(this.fg.controls.start.value);
        dateWithTime.setHours(this.fg.controls.startTime.value);
        event.start = dateWithTime;
        this.orgs.forEach(function (org) {
            if (org.code === _this.fg.controls.org_code.value) {
                event.org_code = org.code;
                event.org_name = org.name;
                event.org_city = org.address.city;
            }
        });
        event.title = this.fg.controls.title.value;
        event.img = this.fg.controls.img.value;
        event.featured = this.fg.controls.featured.value || false;
        // event.img1      = this.fg.controls.img1.value || false;
        // event.img2      = this.fg.controls.img2.value || false;
        // event.img3      = this.fg.controls.img3.value || false;
        // event.img4      = this.fg.controls.img4.value || false;
        this.service.add(event).subscribe(function (res) {
            _this.snackBar.open('Evento adicionado com sucesso!', null, { duration: 2000 });
            _this.router.navigate(["/events"]);
        });
    };
    AddEventComponent.prototype.preview = function (files, idx) {
        var _this = this;
        if (files.length === 0)
            return;
        this.files[idx] = files[0];
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgPreview[idx] = reader.result;
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("firstInput"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddEventComponent.prototype, "firstInput", void 0);
    AddEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__(/*! ./add-event.component.html */ "./src/app/events/add-event/add-event.component.html"),
            styles: [__webpack_require__(/*! ./add-event.component.scss */ "./src/app/events/add-event/add-event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _orgs_org_service__WEBPACK_IMPORTED_MODULE_8__["OrgService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "./src/app/events/edit-event/edit-event.component.html":
/*!*************************************************************!*\
  !*** ./src/app/events/edit-event/edit-event.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-container\" [formGroup]=\"fg\"> \n  <!-- TITLE -->\n  <mat-form-field>\n    <input matInput formControlName=\"title\" placeholder=\"Título\" required>\n  </mat-form-field>\n\n  <!-- ORG_CODE -->\n  <mat-form-field>\n    <mat-select required formControlName=\"org_code\">\n      <mat-option *ngFor=\"let org of orgs\" [value]=\"org.code\">{{org.name}}</mat-option>\n    </mat-select>\n    <mat-label>Organização</mat-label>\n  </mat-form-field>\n  \n  <!-- IMG -->\n  <mat-form-field>\n    <input matInput formControlName=\"img\" placeholder=\"Imagem\" required>\n  </mat-form-field>\n\n  <!-- START -->\n  <div class=\"start\">\n    <!-- TODO: Disable input -->\n    <mat-form-field class=\"date\">\n      <input matInput formControlName=\"start\" [matDatepicker]=\"startPicker\" placeholder=\"Data\">\n      <mat-datepicker-toggle matSuffix [for]=\"startPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #startPicker></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field class=\"time\">\n      <mat-select required formControlName=\"startTime\">\n        <mat-option *ngFor=\"let t of timeOptions\" [value]=\"t\">{{t}}h</mat-option>\n      </mat-select>\n      <mat-label>Horário</mat-label>\n    </mat-form-field>\n  </div>\n\n  <!-- END -->\n  <!-- <mat-form-field>\n    <input matInput formControlName=\"end\" [matDatepicker]=\"endPicker\" placeholder=\"Término\">\n    <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n    <mat-datepicker #endPicker></mat-datepicker>\n  </mat-form-field> -->\n\n  <mat-checkbox formControlName=\"featured\">Destaque</mat-checkbox>\n\n  <button mat-raised-button color=\"primary\" (click)=\"cancel()\">Cancelar</button>\n  <button mat-raised-button color=\"accent\" [disabled]=\"!fg.valid\" (click)=\"update()\">Atualizar</button>\n\n</form>\n  "

/***/ }),

/***/ "./src/app/events/edit-event/edit-event.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/events/edit-event/edit-event.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 36px; }\n\n.form-container > * {\n  width: 80%; }\n\n.form-container form {\n  margin-bottom: 20px; }\n\n.form-container form > * {\n  margin: 5px 0; }\n\n.form-container .mat-radio-button {\n  margin: 0 5px; }\n\nbutton {\n  margin-top: 16px; }\n\n.start * {\n  width: calc(50% - 8px); }\n\n.start .date {\n  padding-right: 4px; }\n\n.start .time {\n  padding-left: 4px;\n  line-height: 18px; }\n\n.start .time mat-select {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9ldmVudHMvZWRpdC1ldmVudC9lZGl0LWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksV0FBVSxFQUNiOztBQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFFUSx1QkFBc0IsRUFDekI7O0FBSEw7RUFLUSxtQkFBa0IsRUFDckI7O0FBTkw7RUFTUSxrQkFBaUI7RUFDakIsa0JBQWlCLEVBSXBCOztBQWRMO0lBWVksWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2VkaXQtZXZlbnQvZWRpdC1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzZweDtcbn1cblxuLmZvcm0tY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBmb3JtID4gKiB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmZvcm0tY29udGFpbmVyIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5zdGFydCB7XG4gICAgKiB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDhweCk7XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIC50aW1lIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBtYXQtc2VsZWN0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/events/edit-event/edit-event.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/events/edit-event/edit-event.component.ts ***!
  \***********************************************************/
/*! exports provided: EditEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventComponent", function() { return EditEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/events/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./src/app/models.ts");
/* harmony import */ var _orgs_org_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../orgs/org.service */ "./src/app/orgs/org.service.ts");








var EditEventComponent = /** @class */ (function () {
    function EditEventComponent(route, service, fb, router, snackBar, orgService) {
        this.route = route;
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.orgService = orgService;
        this.timeOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.fg = fb.group({
            start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startTime: [],
            org_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            featured: ['']
        });
    }
    EditEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orgService.get().subscribe(function (orgs) { return _this.orgs = orgs; });
        this.route.params.subscribe(function (p) {
            _this.service.getById(p.id).subscribe(function (event) {
                _this.event = event;
                _this.fillForm(event);
            });
        });
    };
    EditEventComponent.prototype.fillForm = function (event) {
        this.fg.controls.start.setValue(event.start);
        this.fg.controls.startTime.setValue(new Date(event.start).getUTCHours());
        this.fg.controls.org_code.setValue(event.org_code);
        this.fg.controls.title.setValue(event.title);
        this.fg.controls.img.setValue(event.img);
        this.fg.controls.featured.setValue(event.featured);
    };
    EditEventComponent.prototype.update = function () {
        var _this = this;
        var event = new _models__WEBPACK_IMPORTED_MODULE_6__["Event"]();
        var dateWithTime = new Date(this.fg.controls.start.value);
        dateWithTime.setHours(this.fg.controls.startTime.value);
        event.start = dateWithTime;
        this.orgs.forEach(function (org) {
            if (org.code === _this.fg.controls.org_code.value) {
                event.org_code = org.code;
                event.org_name = org.name;
                event.org_city = org.address.city;
            }
        });
        event._id = this.event._id;
        event.title = this.fg.controls.title.value;
        event.img = this.fg.controls.img.value;
        event.featured = this.fg.controls.featured.value;
        this.service.update(event).subscribe(function (res) {
            _this.snackBar.open('Evento atualizado com sucesso!', null, { duration: 2000 });
            _this.router.navigate(["/events"]);
        });
    };
    EditEventComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    EditEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-event',
            template: __webpack_require__(/*! ./edit-event.component.html */ "./src/app/events/edit-event/edit-event.component.html"),
            styles: [__webpack_require__(/*! ./edit-event.component.scss */ "./src/app/events/edit-event/edit-event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _orgs_org_service__WEBPACK_IMPORTED_MODULE_7__["OrgService"]])
    ], EditEventComponent);
    return EditEventComponent;
}());



/***/ }),

/***/ "./src/app/events/event.service.ts":
/*!*****************************************!*\
  !*** ./src/app/events/event.service.ts ***!
  \*****************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        // TODO: Config environment variables
        // host = 'http://localhost:8080';
        this.host = 'http://sulbaguia.com.br';
        this.url = this.host + '/api/events';
    }
    EventService.prototype.get = function () {
        return this.http.get(this.url);
    };
    EventService.prototype.getById = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    EventService.prototype.update = function (data) {
        return this.http.put(this.url + "/" + data._id, data);
    };
    EventService.prototype.add = function (data) {
        return this.http.post(this.url, data);
    };
    EventService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/events/list-events/list-events-datasource.ts":
/*!**************************************************************!*\
  !*** ./src/app/events/list-events/list-events-datasource.ts ***!
  \**************************************************************/
/*! exports provided: ListEventsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsDataSource", function() { return ListEventsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




/**
 * Data source for the EventsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var ListEventsDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ListEventsDataSource, _super);
    function ListEventsDataSource(paginator, sort, _data) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this._data = _data;
        _this.data = [];
        _this.data = _data;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    ListEventsDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    ListEventsDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ListEventsDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ListEventsDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'start': return compare(a.start, b.start, isAsc);
                case 'org_name': return compare(a.org_name, b.org_name, isAsc);
                case 'org_city': return compare(a.org_city, b.org_city, isAsc);
                case 'title': return compare(a.title, b.title, isAsc);
                default: return 0;
            }
        });
    };
    return ListEventsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/events/list-events/list-events.component.html":
/*!***************************************************************!*\
  !*** ./src/app/events/list-events/list-events.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- start Column -->\n    <ng-container matColumnDef=\"start\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Data</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.start | date:  'dd/MM - H\\'h\\''}}</td>\n    </ng-container>\n\n    <!-- org_name Column -->\n    <ng-container matColumnDef=\"org_name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Local</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.org_name}}</td>\n    </ng-container>\n\n    <!-- org_city Column -->\n    <ng-container matColumnDef=\"org_city\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Cidade</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.org_city}}</td>\n    </ng-container>\n\n    <!-- title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Título</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n    </ng-container>\n\n    <!-- Actions Column -->  \n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let row\">\n        <button mat-icon-button (click)=\"edit(row._id)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"delete(row._id, row.title)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n\n<div class=\"fab\">\n  <button mat-icon-button (click)=\"add()\">\n    <mat-icon aria-label=\"Add\">add</mat-icon>\n  </button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/events/list-events/list-events.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/events/list-events/list-events.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%; }\n\ndiv.fab {\n  color: #FFF;\n  position: fixed;\n  right: 36px;\n  top: 12px;\n  z-index: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9ldmVudHMvbGlzdC1ldmVudHMvbGlzdC1ldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsVUFBUztFQUNULFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9saXN0LWV2ZW50cy9saXN0LWV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5mYWIge1xuICBjb2xvcjogI0ZGRjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMzZweDtcbiAgdG9wOiAxMnB4O1xuICB6LWluZGV4OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/events/list-events/list-events.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/events/list-events/list-events.component.ts ***!
  \*************************************************************/
/*! exports provided: ListEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsComponent", function() { return ListEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _list_events_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-events-datasource */ "./src/app/events/list-events/list-events-datasource.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event.service */ "./src/app/events/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_components_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-material-components/dialog-confirm.component */ "./src/app/angular-material-components/dialog-confirm.component.ts");







var ListEventsComponent = /** @class */ (function () {
    function ListEventsComponent(service, router, dialog, snackBar) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['start', 'org_name', 'org_city', 'title', 'actions'];
    }
    ListEventsComponent.prototype.ngOnInit = function () { this.getEvents(); };
    ListEventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.service.get().subscribe(function (data) {
            _this.dataSource = new _list_events_datasource__WEBPACK_IMPORTED_MODULE_3__["ListEventsDataSource"](_this.paginator, _this.sort, data);
        });
    };
    ListEventsComponent.prototype.edit = function (id) { this.router.navigate(["/events/edit/" + id]); };
    ListEventsComponent.prototype.add = function () { this.router.navigate(["/events/add"]); };
    ListEventsComponent.prototype.delete = function (id, title) {
        var _this = this;
        var dialogRef = this.dialog.open(_angular_material_components_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_6__["DialogConfirm"], { width: '320px', data: { title: title } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.service.delete(id).subscribe(function () { return _this.getEvents(); });
                _this.snackBar.open('Evento removido.', null, { duration: 2000 });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListEventsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListEventsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
    ], ListEventsComponent.prototype, "table", void 0);
    ListEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-events',
            template: __webpack_require__(/*! ./list-events.component.html */ "./src/app/events/list-events/list-events.component.html"),
            styles: [__webpack_require__(/*! ./list-events.component.scss */ "./src/app/events/list-events/list-events.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ListEventsComponent);
    return ListEventsComponent;
}());



/***/ }),

/***/ "./src/app/models.ts":
/*!***************************!*\
  !*** ./src/app/models.ts ***!
  \***************************/
/*! exports provided: Event, City, Org */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Org", function() { return Org; });
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());

var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());

var Org = /** @class */ (function () {
    function Org() {
        this.address = new Address();
        this.contact = new Contact();
    }
    return Org;
}());

var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());


/***/ }),

/***/ "./src/app/orgs/add-org/add-org.component.html":
/*!*****************************************************!*\
  !*** ./src/app/orgs/add-org/add-org.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-container\" [formGroup]=\"fg\"> \n  <h3>Organização</h3>\n  <!-- CODE -->\n  <mat-form-field>\n    <input #firstInput matInput formControlName=\"code\" placeholder=\"Código\" required>\n  </mat-form-field>\n\n  <!-- NAME -->\n  <mat-form-field>\n    <input matInput formControlName=\"name\" placeholder=\"Nome\" required>\n  </mat-form-field>\n\n  <!-- EMAIL -->\n  <mat-form-field>\n    <input matInput formControlName=\"email\" placeholder=\"Email\">\n  </mat-form-field>\n\n  <!-- MOBILE -->\n  <mat-form-field>\n    <input matInput formControlName=\"mobile\" placeholder=\"Celular\">\n  </mat-form-field>\n\n  <!-- LAND -->\n  <mat-form-field>\n    <input matInput formControlName=\"land\" placeholder=\"Fixo\">\n  </mat-form-field>\n\n  <!-- NOTES -->\n  <mat-form-field>\n    <input matInput formControlName=\"notes\" placeholder=\"Notas\">\n  </mat-form-field>\n\n  <!-- STATUS -->\n  <mat-checkbox formControlName=\"status\">Ativo</mat-checkbox>\n\n\n  <!-- \n    ###################### ADDRESS ########################\n   -->\n  <!-- CITY -->\n  <h3>Endereço</h3>\n  <mat-form-field>\n    <mat-select required formControlName=\"city\">\n      <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">{{city.name}}</mat-option>\n    </mat-select>\n    <mat-label>Cidade</mat-label>\n  </mat-form-field>\n\n  <!-- NEIGHBORHOOD -->\n  <mat-form-field>\n    <input matInput formControlName=\"neighborhood\" placeholder=\"Bairro\">\n  </mat-form-field>\n\n  <!-- NUMBER -->\n  <mat-form-field>\n    <input matInput formControlName=\"number\" placeholder=\"Número\">\n  </mat-form-field>\n\n  <!-- COMPLEMENT -->\n  <mat-form-field>\n    <input matInput formControlName=\"complement\" placeholder=\"Complemento\">\n  </mat-form-field>\n\n  <!-- ZIP_CODE -->\n  <mat-form-field>\n    <input matInput formControlName=\"zip_code\" placeholder=\"Código Postal\">\n  </mat-form-field>\n  \n  <!-- \n    ###################### CONTACT ########################\n   -->\n  <h3>Contato</h3>\n  <!-- CONTACT_NAME -->\n  <mat-form-field>\n    <input matInput formControlName=\"contact_name\" placeholder=\"Nome\">\n  </mat-form-field>\n\n  <!-- CONTACT_EMAIL -->\n  <mat-form-field>\n    <input matInput formControlName=\"contact_email\" placeholder=\"Email\">\n  </mat-form-field>\n\n  <!-- CONTACT_MOBILE -->\n  <mat-form-field>\n    <input matInput formControlName=\"contact_mobile\" placeholder=\"Celular\">\n  </mat-form-field>\n\n  <!-- CONTACT_ROLE -->\n  <mat-form-field>\n    <input matInput formControlName=\"contact_role\" placeholder=\"Papel\">\n  </mat-form-field>\n\n  <!-- CONTACT_NOTES -->\n  <mat-form-field>\n    <input matInput formControlName=\"contact_notes\" placeholder=\"Notas\">\n  </mat-form-field>\n\n  <button mat-raised-button color=\"accent\" [disabled]=\"!fg.valid\" (click)=\"save()\">Salvar</button>\n</form>\n"

/***/ }),

/***/ "./src/app/orgs/add-org/add-org.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/orgs/add-org/add-org.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 12px; }\n\n.form-container > * {\n  width: 80%; }\n\n.form-container form {\n  margin-bottom: 20px; }\n\n.form-container form > * {\n  margin: 5px 0; }\n\n.form-container .mat-radio-button {\n  margin: 0 5px; }\n\nbutton {\n  margin-top: 16px;\n  margin-bottom: 36px; }\n\nh3 {\n  color: rgba(0, 0, 0, 0.75);\n  margin-top: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9vcmdzL2FkZC1vcmcvYWRkLW9yZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLDJCQUF1QjtFQUN2QixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9vcmdzL2FkZC1vcmcvYWRkLW9yZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmZvcm0tY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBmb3JtID4gKiB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmZvcm0tY29udGFpbmVyIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cblxuaDMge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/orgs/add-org/add-org.component.ts":
/*!***************************************************!*\
  !*** ./src/app/orgs/add-org/add-org.component.ts ***!
  \***************************************************/
/*! exports provided: AddOrgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrgComponent", function() { return AddOrgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _org_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../org.service */ "./src/app/orgs/org.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./src/app/models.ts");
/* harmony import */ var _cities_city_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cities/city.service */ "./src/app/cities/city.service.ts");








var AddOrgComponent = /** @class */ (function () {
    function AddOrgComponent(fb, service, router, snackBar, cityService) {
        this.service = service;
        this.router = router;
        this.snackBar = snackBar;
        this.cityService = cityService;
        this.fg = fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: [''],
            land: [''],
            email: [''],
            notes: [''],
            status: [''],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            neighborhood: [''],
            street: [''],
            number: [''],
            complement: [''],
            zip_code: [''],
            contact_name: [''],
            contact_email: [''],
            contact_mobile: [''],
            contact_role: [''],
            contact_notes: ['']
        });
    }
    AddOrgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityService.get().subscribe(function (cities) { return _this.cities = cities; });
        this.firstInput.nativeElement.focus();
    };
    AddOrgComponent.prototype.save = function () {
        var _this = this;
        var org = new _models__WEBPACK_IMPORTED_MODULE_6__["Org"]();
        org.code = this.fg.controls.code.value;
        org.name = this.fg.controls.name.value;
        org.mobile = this.fg.controls.mobile.value;
        org.land = this.fg.controls.land.value;
        org.email = this.fg.controls.email.value;
        org.notes = this.fg.controls.notes.value;
        org.status = this.fg.controls.status.value ? true : false;
        org.address.state = 'BA';
        org.address.city = this.fg.controls.city.value;
        org.address.neighborhood = this.fg.controls.neighborhood.value;
        org.address.street = this.fg.controls.street.value;
        org.address.number = this.fg.controls.number.value;
        org.address.complement = this.fg.controls.complement.value;
        org.address.zip_code = this.fg.controls.zip_code.value;
        org.contact.name = this.fg.controls.contact_name.value;
        org.contact.email = this.fg.controls.contact_email.value;
        org.contact.mobile = this.fg.controls.contact_mobile.value;
        org.contact.role = this.fg.controls.contact_role.value;
        org.contact.notes = this.fg.controls.contact_notes.value;
        this.service.add(org).subscribe(function (res) {
            _this.snackBar.open('Organização adicionada com sucesso!', null, { duration: 2000 });
            _this.router.navigate(["/orgs"]);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("firstInput"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddOrgComponent.prototype, "firstInput", void 0);
    AddOrgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-org',
            template: __webpack_require__(/*! ./add-org.component.html */ "./src/app/orgs/add-org/add-org.component.html"),
            styles: [__webpack_require__(/*! ./add-org.component.scss */ "./src/app/orgs/add-org/add-org.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _org_service__WEBPACK_IMPORTED_MODULE_3__["OrgService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _cities_city_service__WEBPACK_IMPORTED_MODULE_7__["CityService"]])
    ], AddOrgComponent);
    return AddOrgComponent;
}());



/***/ }),

/***/ "./src/app/orgs/edit-org/edit-org.component.html":
/*!*******************************************************!*\
  !*** ./src/app/orgs/edit-org/edit-org.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-container\" [formGroup]=\"fg\"> \n    <h3>Organização</h3>\n    <!-- CODE -->\n    <mat-form-field>\n      <input matInput formControlName=\"code\" placeholder=\"Código\" required>\n    </mat-form-field>\n  \n    <!-- NAME -->\n    <mat-form-field>\n      <input matInput formControlName=\"name\" placeholder=\"Nome\" required>\n    </mat-form-field>\n  \n    <!-- EMAIL -->\n    <mat-form-field>\n      <input matInput formControlName=\"email\" placeholder=\"Email\">\n    </mat-form-field>\n  \n    <!-- MOBILE -->\n    <mat-form-field>\n      <input matInput formControlName=\"mobile\" placeholder=\"Celular\">\n    </mat-form-field>\n  \n    <!-- LAND -->\n    <mat-form-field>\n      <input matInput formControlName=\"land\" placeholder=\"Fixo\">\n    </mat-form-field>\n  \n    <!-- NOTES -->\n    <mat-form-field>\n      <input matInput formControlName=\"notes\" placeholder=\"Notas\">\n    </mat-form-field>\n  \n    <!-- STATUS -->\n    <mat-checkbox formControlName=\"status\">Ativo</mat-checkbox>\n  \n  \n    <!-- \n      ###################### ADDRESS ########################\n     -->\n    <h3>Endereço</h3>\n    <!-- CITY -->\n    <mat-form-field>\n      <mat-select required formControlName=\"city\">\n        <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">{{city.name}}</mat-option>\n      </mat-select>\n      <mat-label>Cidade</mat-label>\n    </mat-form-field>\n  \n    <!-- NEIGHBORHOOD -->\n    <mat-form-field>\n      <input matInput formControlName=\"neighborhood\" placeholder=\"Bairro\">\n    </mat-form-field>\n  \n    <!-- NUMBER -->\n    <mat-form-field>\n      <input matInput formControlName=\"number\" placeholder=\"Número\">\n    </mat-form-field>\n  \n    <!-- COMPLEMENT -->\n    <mat-form-field>\n      <input matInput formControlName=\"complement\" placeholder=\"Complemento\">\n    </mat-form-field>\n  \n    <!-- ZIP_CODE -->\n    <mat-form-field>\n      <input matInput formControlName=\"zip_code\" placeholder=\"Código Postal\">\n    </mat-form-field>\n    \n    <!-- \n      ###################### CONTACT ########################\n     -->\n    <h3>Contato</h3>\n    <!-- CONTACT_NAME -->\n    <mat-form-field>\n      <input matInput formControlName=\"contact_name\" placeholder=\"Nome do contato\">\n    </mat-form-field>\n  \n    <!-- CONTACT_EMAIL -->\n    <mat-form-field>\n      <input matInput formControlName=\"contact_email\" placeholder=\"Email do contato\">\n    </mat-form-field>\n  \n    <!-- CONTACT_MOBILE -->\n    <mat-form-field>\n      <input matInput formControlName=\"contact_mobile\" placeholder=\"Celular do contato\">\n    </mat-form-field>\n  \n    <!-- CONTACT_ROLE -->\n    <mat-form-field>\n      <input matInput formControlName=\"contact_role\" placeholder=\"Papel do contato\">\n    </mat-form-field>\n  \n    <!-- CONTACT_NOTES -->\n    <mat-form-field>\n      <input matInput formControlName=\"contact_notes\" placeholder=\"Notas do contato\">\n    </mat-form-field>\n  \n    <button mat-raised-button color=\"primary\" (click)=\"cancel()\">Cancelar</button>\n    <button mat-raised-button class=\"last\" color=\"accent\" [disabled]=\"!fg.valid\" (click)=\"update()\">Atualizar</button>\n  \n  </form>\n  "

/***/ }),

/***/ "./src/app/orgs/edit-org/edit-org.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/orgs/edit-org/edit-org.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 12px; }\n\n.form-container > * {\n  width: 80%; }\n\n.form-container form {\n  margin-bottom: 20px; }\n\n.form-container form > * {\n  margin: 5px 0; }\n\n.form-container .mat-radio-button {\n  margin: 0 5px; }\n\nbutton {\n  margin-top: 16px; }\n\nbutton.last {\n    margin-bottom: 36px; }\n\nh3 {\n  margin-top: 12px;\n  color: rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9vcmdzL2VkaXQtb3JnL2VkaXQtb3JnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksV0FBVSxFQUNiOztBQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFJbkI7O0FBTEQ7SUFHUSxvQkFBbUIsRUFDdEI7O0FBR0w7RUFDSSxpQkFBZ0I7RUFDaEIsMkJBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvb3Jncy9lZGl0LW9yZy9lZGl0LW9yZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmZvcm0tY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBmb3JtID4gKiB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmZvcm0tY29udGFpbmVyIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgJi5sYXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICB9XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNzUpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/orgs/edit-org/edit-org.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/orgs/edit-org/edit-org.component.ts ***!
  \*****************************************************/
/*! exports provided: EditOrgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrgComponent", function() { return EditOrgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _org_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../org.service */ "./src/app/orgs/org.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./src/app/models.ts");
/* harmony import */ var _cities_city_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cities/city.service */ "./src/app/cities/city.service.ts");








var EditOrgComponent = /** @class */ (function () {
    function EditOrgComponent(route, service, fb, router, snackBar, cityService) {
        this.route = route;
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.cityService = cityService;
        this.fg = fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: [''],
            land: [''],
            email: [''],
            notes: [''],
            status: [''],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            neighborhood: [''],
            street: [''],
            number: [''],
            complement: [''],
            zip_code: [''],
            contact_name: [''],
            contact_email: [''],
            contact_mobile: [''],
            contact_role: [''],
            contact_notes: ['']
        });
    }
    EditOrgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityService.get().subscribe(function (cities) { return _this.cities = cities; });
        this.route.params.subscribe(function (p) {
            _this.service.getById(p.id).subscribe(function (org) {
                _this.org = org;
                _this.fillForm();
            });
        });
    };
    EditOrgComponent.prototype.fillForm = function () {
        this.fg.controls.code.setValue(this.org.code);
        this.fg.controls.name.setValue(this.org.name);
        this.fg.controls.code.setValue(this.org.code);
        this.fg.controls.name.setValue(this.org.name);
        this.fg.controls.mobile.setValue(this.org.mobile);
        this.fg.controls.land.setValue(this.org.land);
        this.fg.controls.email.setValue(this.org.email);
        this.fg.controls.notes.setValue(this.org.notes);
        this.fg.controls.status.setValue(this.org.status);
        this.fg.controls.city.setValue(this.org.address.city);
        this.fg.controls.neighborhood.setValue(this.org.address.neighborhood);
        this.fg.controls.street.setValue(this.org.address.street);
        this.fg.controls.number.setValue(this.org.address.number);
        this.fg.controls.complement.setValue(this.org.address.complement);
        this.fg.controls.zip_code.setValue(this.org.address.zip_code);
        this.fg.controls.contact_name.setValue(this.org.contact.name);
        this.fg.controls.contact_email.setValue(this.org.contact.email);
        this.fg.controls.contact_mobile.setValue(this.org.contact.mobile);
        this.fg.controls.contact_role.setValue(this.org.contact.role);
        this.fg.controls.contact_notes.setValue(this.org.contact.notes);
    };
    EditOrgComponent.prototype.update = function () {
        var _this = this;
        var org = new _models__WEBPACK_IMPORTED_MODULE_6__["Org"]();
        org._id = this.org._id;
        org.code = this.fg.controls.code.value;
        org.name = this.fg.controls.name.value;
        org.mobile = this.fg.controls.mobile.value;
        org.land = this.fg.controls.land.value;
        org.email = this.fg.controls.email.value;
        org.notes = this.fg.controls.notes.value;
        org.status = this.fg.controls.status.value;
        org.address.state = 'BA';
        org.address.city = this.fg.controls.city.value;
        org.address.neighborhood = this.fg.controls.neighborhood.value;
        org.address.street = this.fg.controls.street.value;
        org.address.number = this.fg.controls.number.value;
        org.address.complement = this.fg.controls.complement.value;
        org.address.zip_code = this.fg.controls.zip_code.value;
        org.contact.name = this.fg.controls.contact_name.value;
        org.contact.email = this.fg.controls.contact_email.value;
        org.contact.mobile = this.fg.controls.contact_mobile.value;
        org.contact.role = this.fg.controls.contact_role.value;
        org.contact.notes = this.fg.controls.contact_notes.value;
        this.service.update(org).subscribe(function (res) {
            _this.snackBar.open('Organização atualizada com sucesso!', null, { duration: 2000 });
            _this.router.navigate(["/orgs"]);
        });
    };
    EditOrgComponent.prototype.cancel = function () {
        this.router.navigate(['/orgs']);
    };
    EditOrgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-org',
            template: __webpack_require__(/*! ./edit-org.component.html */ "./src/app/orgs/edit-org/edit-org.component.html"),
            styles: [__webpack_require__(/*! ./edit-org.component.scss */ "./src/app/orgs/edit-org/edit-org.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _org_service__WEBPACK_IMPORTED_MODULE_3__["OrgService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _cities_city_service__WEBPACK_IMPORTED_MODULE_7__["CityService"]])
    ], EditOrgComponent);
    return EditOrgComponent;
}());



/***/ }),

/***/ "./src/app/orgs/list-orgs/list-orgs-datasource.ts":
/*!********************************************************!*\
  !*** ./src/app/orgs/list-orgs/list-orgs-datasource.ts ***!
  \********************************************************/
/*! exports provided: ListOrgsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrgsDataSource", function() { return ListOrgsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




/**
 * Data source for the OrgsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var ListOrgsDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ListOrgsDataSource, _super);
    function ListOrgsDataSource(paginator, sort, _data) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this._data = _data;
        _this.data = [];
        _this.data = _data;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    ListOrgsDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    ListOrgsDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ListOrgsDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ListOrgsDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'code': return compare(a.code, b.code, isAsc);
                default: return 0;
            }
        });
    };
    return ListOrgsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/orgs/list-orgs/list-orgs.component.html":
/*!*********************************************************!*\
  !*** ./src/app/orgs/list-orgs/list-orgs.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n\n    <!-- name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Nome</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <!-- city Column -->\n    <ng-container matColumnDef=\"city\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Cidade</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.address.city}}</td>\n    </ng-container>\n\n    <!-- mobile Column -->\n    <ng-container matColumnDef=\"mobile\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Celular</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.mobile}}</td>\n    </ng-container>\n\n    <!-- status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.status ? 'Ativo' : 'Inativo'}}</td>\n    </ng-container>\n\n    <!-- Actions Column -->  \n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let row\">\n        <button mat-icon-button (click)=\"edit(row._id)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"delete(row._id, row.title)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n\n<div class=\"fab\">\n  <button mat-icon-button (click)=\"add()\">\n    <mat-icon aria-label=\"Add\">add</mat-icon>\n  </button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/orgs/list-orgs/list-orgs.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/orgs/list-orgs/list-orgs.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%; }\n\ndiv.fab {\n  color: #FFF;\n  position: fixed;\n  right: 36px;\n  top: 12px;\n  z-index: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJlaXJhdGkvcHJvamVjdHMvc3VsYmFndWlhL2FuZ3VsYXItYWRtaW4vc3JjL2FwcC9vcmdzL2xpc3Qtb3Jncy9saXN0LW9yZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsVUFBUztFQUNULFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL29yZ3MvbGlzdC1vcmdzL2xpc3Qtb3Jncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5mYWIge1xuICBjb2xvcjogI0ZGRjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMzZweDtcbiAgdG9wOiAxMnB4O1xuICB6LWluZGV4OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/orgs/list-orgs/list-orgs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/orgs/list-orgs/list-orgs.component.ts ***!
  \*******************************************************/
/*! exports provided: ListOrgsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrgsComponent", function() { return ListOrgsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _list_orgs_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-orgs-datasource */ "./src/app/orgs/list-orgs/list-orgs-datasource.ts");
/* harmony import */ var _org_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../org.service */ "./src/app/orgs/org.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_components_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-material-components/dialog-confirm.component */ "./src/app/angular-material-components/dialog-confirm.component.ts");







var ListOrgsComponent = /** @class */ (function () {
    function ListOrgsComponent(service, router, dialog, snackBar) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['name', 'city', 'mobile', 'status', 'actions'];
    }
    ListOrgsComponent.prototype.ngOnInit = function () { this.getOrgs(); };
    ListOrgsComponent.prototype.getOrgs = function () {
        var _this = this;
        this.service.get().subscribe(function (data) {
            _this.dataSource = new _list_orgs_datasource__WEBPACK_IMPORTED_MODULE_3__["ListOrgsDataSource"](_this.paginator, _this.sort, data);
        });
    };
    ListOrgsComponent.prototype.edit = function (id) { this.router.navigate(["/orgs/edit/" + id]); };
    ListOrgsComponent.prototype.add = function () { this.router.navigate(["/orgs/add"]); };
    ListOrgsComponent.prototype.delete = function (id, title) {
        var _this = this;
        var dialogRef = this.dialog.open(_angular_material_components_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_6__["DialogConfirm"], { width: '320px', data: { title: title } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.service.delete(id).subscribe(function () { return _this.getOrgs(); });
                _this.snackBar.open('Organização removida.', null, { duration: 2000 });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListOrgsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListOrgsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
    ], ListOrgsComponent.prototype, "table", void 0);
    ListOrgsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-orgs',
            template: __webpack_require__(/*! ./list-orgs.component.html */ "./src/app/orgs/list-orgs/list-orgs.component.html"),
            styles: [__webpack_require__(/*! ./list-orgs.component.scss */ "./src/app/orgs/list-orgs/list-orgs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_org_service__WEBPACK_IMPORTED_MODULE_4__["OrgService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ListOrgsComponent);
    return ListOrgsComponent;
}());



/***/ }),

/***/ "./src/app/orgs/org.service.ts":
/*!*************************************!*\
  !*** ./src/app/orgs/org.service.ts ***!
  \*************************************/
/*! exports provided: OrgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgService", function() { return OrgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrgService = /** @class */ (function () {
    function OrgService(http) {
        this.http = http;
        // TODO: Config environment variables
        this.host = 'http://localhost:8080';
        this.url = this.host + '/api/orgs';
    }
    OrgService.prototype.get = function () {
        return this.http.get(this.url);
    };
    OrgService.prototype.getById = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    OrgService.prototype.update = function (data) {
        return this.http.put(this.url + "/" + data._id, data);
    };
    OrgService.prototype.add = function (data) {
        return this.http.post(this.url, data);
    };
    OrgService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    OrgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrgService);
    return OrgService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /home/ferreirati/projects/sulbaguia/angular-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map