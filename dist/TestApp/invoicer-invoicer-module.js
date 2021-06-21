(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoicer-invoicer-module"],{

/***/ "./src/app/invoicer/invoicer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/invoicer/invoicer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: InvoicerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicerRoutingModule", function() { return InvoicerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _invoicer_invoicer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoicer/invoicer.component */ "./src/app/invoicer/invoicer/invoicer.component.ts");





const routes = [
    {
        path: '',
        component: _invoicer_invoicer_component__WEBPACK_IMPORTED_MODULE_2__["InvoicerComponent"],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'clients' },
            {
                path: 'clients',
                loadChildren: () => Promise.all(/*! import() | clients-clients-module */[__webpack_require__.e("default~accounts-accounts-module~clients-clients-module"), __webpack_require__.e("clients-clients-module")]).then(__webpack_require__.bind(null, /*! ./clients/clients.module */ "./src/app/invoicer/clients/clients.module.ts")).then(m => m.ClientsModule)
            },
            {
                path: 'accounts',
                loadChildren: () => Promise.all(/*! import() | accounts-accounts-module */[__webpack_require__.e("default~accounts-accounts-module~clients-clients-module"), __webpack_require__.e("accounts-accounts-module")]).then(__webpack_require__.bind(null, /*! ./accounts/accounts.module */ "./src/app/invoicer/accounts/accounts.module.ts")).then(m => m.AccountsModule)
            },
            {
                path: 'transactions',
                loadChildren: () => __webpack_require__.e(/*! import() | transactions-transactions-module */ "transactions-transactions-module").then(__webpack_require__.bind(null, /*! ./transactions/transactions.module */ "./src/app/invoicer/transactions/transactions.module.ts")).then(m => m.TransactionsModule)
            },
        ]
    },
];
class InvoicerRoutingModule {
}
InvoicerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvoicerRoutingModule });
InvoicerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvoicerRoutingModule_Factory(t) { return new (t || InvoicerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoicerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/invoicer/invoicer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/invoicer/invoicer.module.ts ***!
  \*********************************************/
/*! exports provided: InvoicerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicerModule", function() { return InvoicerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _invoicer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoicer-routing.module */ "./src/app/invoicer/invoicer-routing.module.ts");
/* harmony import */ var _invoicer_invoicer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoicer/invoicer.component */ "./src/app/invoicer/invoicer/invoicer.component.ts");





class InvoicerModule {
}
InvoicerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvoicerModule });
InvoicerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvoicerModule_Factory(t) { return new (t || InvoicerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _invoicer_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoicerRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoicerModule, { declarations: [_invoicer_invoicer_component__WEBPACK_IMPORTED_MODULE_3__["InvoicerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _invoicer_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoicerRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_invoicer_invoicer_component__WEBPACK_IMPORTED_MODULE_3__["InvoicerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _invoicer_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoicerRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/invoicer/invoicer/invoicer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/invoicer/invoicer/invoicer.component.ts ***!
  \*********************************************************/
/*! exports provided: InvoicerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicerComponent", function() { return InvoicerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class InvoicerComponent {
    constructor() { }
    ngOnInit() {
    }
}
InvoicerComponent.ɵfac = function InvoicerComponent_Factory(t) { return new (t || InvoicerComponent)(); };
InvoicerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvoicerComponent, selectors: [["app-invoicer"]], decls: 17, vars: 0, consts: [[1, "container-fluid"], [1, "row", "vh-100"], [1, "col-md-2", "invoicer_side_nav-seperator"], ["href", "#", "routerLink", "/invoicer/clients"], ["href", "#", "routerLink", "/invoicer/accounts"], ["href", "#", "routerLink", "/invoicer/transactions"], [1, "col-md-10"]], template: function InvoicerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Invoicer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["a[_ngcontent-%COMP%] {\n    text-decoration: underline;\n    color: black;\n}\nul[_ngcontent-%COMP%]{\n    margin: auto;\n    list-style: none;\n}\nli[_ngcontent-%COMP%]{\n    padding: 5px;\n    font-size: medium;\n    font-weight: bold;\n}\n.invoicer_side_nav-seperator[_ngcontent-%COMP%]{\n    border-right:2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZXIvaW52b2ljZXIvaW52b2ljZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZXIvaW52b2ljZXIvaW52b2ljZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbnVse1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxubGl7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmludm9pY2VyX3NpZGVfbmF2LXNlcGVyYXRvcntcbiAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invoicer',
                templateUrl: './invoicer.component.html',
                styleUrls: ['./invoicer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=invoicer-invoicer-module.js.map