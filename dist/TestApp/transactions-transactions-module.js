(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"],{

/***/ "./src/app/invoicer/transactions/new-transaction/new-transaction.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/invoicer/transactions/new-transaction/new-transaction.component.ts ***!
  \************************************************************************************/
/*! exports provided: NewTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTransactionComponent", function() { return NewTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewTransactionComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewTransactionComponent.ɵfac = function NewTransactionComponent_Factory(t) { return new (t || NewTransactionComponent)(); };
NewTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewTransactionComponent, selectors: [["app-new-transaction"]], decls: 2, vars: 0, template: function NewTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new-transaction works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VyL3RyYW5zYWN0aW9ucy9uZXctdHJhbnNhY3Rpb24vbmV3LXRyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-transaction',
                templateUrl: './new-transaction.component.html',
                styleUrls: ['./new-transaction.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/invoicer/transactions/transaction/transaction.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/invoicer/transactions/transaction/transaction.component.ts ***!
  \****************************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class TransactionComponent {
    constructor() { }
    ngOnInit() {
    }
}
TransactionComponent.ɵfac = function TransactionComponent_Factory(t) { return new (t || TransactionComponent)(); };
TransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionComponent, selectors: [["app-transaction"]], decls: 1, vars: 0, template: function TransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VyL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi90cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction',
                templateUrl: './transaction.component.html',
                styleUrls: ['./transaction.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/invoicer/transactions/transactions-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/invoicer/transactions/transactions-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsRoutingModule", function() { return TransactionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/invoicer/transactions/transaction/transaction.component.ts");
/* harmony import */ var _new_transaction_new_transaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-transaction/new-transaction.component */ "./src/app/invoicer/transactions/new-transaction/new-transaction.component.ts");






const routes = [
    {
        path: '',
        component: _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_2__["TransactionComponent"],
        children: [
            { path: '', redirectTo: 'new', pathMatch: 'full' },
            { path: 'new', component: _new_transaction_new_transaction_component__WEBPACK_IMPORTED_MODULE_3__["NewTransactionComponent"] },
        ]
    },
];
class TransactionsRoutingModule {
}
TransactionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransactionsRoutingModule });
TransactionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransactionsRoutingModule_Factory(t) { return new (t || TransactionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransactionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/invoicer/transactions/transactions.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/invoicer/transactions/transactions.module.ts ***!
  \**************************************************************/
/*! exports provided: TransactionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsModule", function() { return TransactionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactions-routing.module */ "./src/app/invoicer/transactions/transactions-routing.module.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/invoicer/transactions/transaction/transaction.component.ts");
/* harmony import */ var _new_transaction_new_transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-transaction/new-transaction.component */ "./src/app/invoicer/transactions/new-transaction/new-transaction.component.ts");






class TransactionsModule {
}
TransactionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransactionsModule });
TransactionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransactionsModule_Factory(t) { return new (t || TransactionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransactionsModule, { declarations: [_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_3__["TransactionComponent"], _new_transaction_new_transaction_component__WEBPACK_IMPORTED_MODULE_4__["NewTransactionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_3__["TransactionComponent"], _new_transaction_new_transaction_component__WEBPACK_IMPORTED_MODULE_4__["NewTransactionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=transactions-transactions-module.js.map