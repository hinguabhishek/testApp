(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "./src/app/invoicer/clients/clients-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/invoicer/clients/clients-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ClientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsRoutingModule", function() { return ClientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/invoicer/clients/components/client/client.component.ts");





const routes = [
    { path: '', component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"] },
];
class ClientsRoutingModule {
}
ClientsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientsRoutingModule });
ClientsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientsRoutingModule_Factory(t) { return new (t || ClientsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/invoicer/clients/clients.module.ts":
/*!****************************************************!*\
  !*** ./src/app/invoicer/clients/clients.module.ts ***!
  \****************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients-routing.module */ "./src/app/invoicer/clients/clients-routing.module.ts");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/invoicer/clients/components/client/client.component.ts");
/* harmony import */ var _components_client_entry_client_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/client-entry/client-entry.component */ "./src/app/invoicer/clients/components/client-entry/client-entry.component.ts");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");










class ClientsModule {
}
ClientsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientsModule });
ClientsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientsModule_Factory(t) { return new (t || ClientsModule)(); }, providers: [src_app_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _clients_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClientsRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientsModule, { declarations: [_components_client_client_component__WEBPACK_IMPORTED_MODULE_5__["ClientComponent"], _components_client_entry_client_entry_component__WEBPACK_IMPORTED_MODULE_6__["ClientEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _clients_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClientsRoutingModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_client_client_component__WEBPACK_IMPORTED_MODULE_5__["ClientComponent"], _components_client_entry_client_entry_component__WEBPACK_IMPORTED_MODULE_6__["ClientEntryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _clients_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClientsRoutingModule"],
                    ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([])
                ],
                providers: [src_app_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/invoicer/clients/components/client-entry/client-entry.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/invoicer/clients/components/client-entry/client-entry.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClientEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEntryComponent", function() { return ClientEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ClientEntryComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please eneter client name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientEntryComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please eneter client address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientEntryComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientEntryComponent_div_0_div_19_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.client.clientGSTNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "GST Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.client.clientGSTNumber);
} }
function ClientEntryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClientEntryComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientEntryComponent_div_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.client.clientName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Client name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClientEntryComponent_div_0_div_7_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientEntryComponent_div_0_Template_textarea_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.client.clientAddress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Client address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientEntryComponent_div_0_div_13_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientEntryComponent_div_0_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.client.isGSTApplication = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " GST Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientEntryComponent_div_0_div_19_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.clientForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.client.clientName)("ngClass", ctx_r0.clientForm.get("clientName").invalid && (ctx_r0.clientForm.get("clientName").dirty || ctx_r0.clientForm.get("clientName").touched) ? "is-invalid" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clientForm.get("clientName").errors && ctx_r0.clientForm.get("clientName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.clientForm.get("clientAddress").invalid && (ctx_r0.clientForm.get("clientAddress").dirty || ctx_r0.clientForm.get("clientAddress").touched) ? "is-invalid" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.client.clientAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clientForm.get("clientAddress").errors && ctx_r0.clientForm.get("clientAddress").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.client.isGSTApplication);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clientForm.value.isGSTApplication);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.clientForm.invalid);
} }
class ClientEntryComponent {
    constructor(fb) {
        this.fb = fb;
        this.onClientFormSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.clientForm = this.fb.group({
            clientName: [(_a = this.client) === null || _a === void 0 ? void 0 : _a.clientName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clientAddress: [(_b = this.client) === null || _b === void 0 ? void 0 : _b.clientAddress, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isGSTApplication: [(_c = this.client) === null || _c === void 0 ? void 0 : _c.isGSTApplication],
            clientGSTNumber: [(_d = this.client) === null || _d === void 0 ? void 0 : _d.clientGSTNumber]
        });
        //subscribe to GSTCheckBox value changes event 
        this.clientForm.get("isGSTApplication").valueChanges.subscribe(value => {
            if (value) {
                this.clientForm.get("clientGSTNumber").setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            }
            else {
                this.clientForm.get("clientGSTNumber").clearValidators();
                this.clientForm.get("clientGSTNumber").setValue(null);
                this.client.clientGSTNumber = null;
            }
            this.clientForm.get("clientGSTNumber").updateValueAndValidity();
        });
    }
    onSubmit() {
        this.onClientFormSubmit.emit(this.client);
        this.clientForm.reset();
    }
}
ClientEntryComponent.ɵfac = function ClientEntryComponent_Factory(t) { return new (t || ClientEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ClientEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientEntryComponent, selectors: [["app-client-entry"]], inputs: { client: "client" }, outputs: { onClientFormSubmit: "onClientFormSubmit" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "row", "g-3", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "form-floating"], ["type", "text", "id", "clientName", "placeholder", "Please enter client name", "formControlName", "clientName", 1, "form-control", "form-control-sm", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "clientName"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "textarea", "id", "clientAddress", "placeholder", "Please enter client address", "formControlName", "clientAddress", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "clientAddress"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "chkGSTApplication", "formControlName", "isGSTApplication", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkGSTApplication", 1, "form-check-label"], ["class", "col-md-12", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], [1, "invalid-feedback"], ["type", "text", "id", "clientGSTNumber", "placeholder", "Please enter GST Number", "formControlName", "clientGSTNumber", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "clientGSTNumber"]], template: function ClientEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClientEntryComponent_div_0_Template, 23, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.client);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VyL2NsaWVudHMvY29tcG9uZW50cy9jbGllbnQtZW50cnkvY2xpZW50LWVudHJ5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-entry',
                templateUrl: './client-entry.component.html',
                styleUrls: ['./client-entry.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { client: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['client']
        }], onClientFormSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onClientFormSubmit']
        }] }); })();


/***/ }),

/***/ "./src/app/invoicer/clients/components/client/client.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/invoicer/clients/components/client/client.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _client_entry_client_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-entry/client-entry.component */ "./src/app/invoicer/clients/components/client-entry/client-entry.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");





class ClientComponent {
    constructor(clientService) {
        this.clientService = clientService;
        this.columnDefs = [
            { field: "id", width: 10, hide: true },
            { field: "clientName", width: 200, headerName: 'Client name', sortable: true },
            { field: "clientAddress", width: 200, headerName: 'Address', headerClass: 'client_grid_column_align-right' },
            { field: "gstNumber", width: 200, headerName: "GST No." }
        ];
        this.client = {
            clientName: "",
            clientAddress: "",
            gstNumber: null,
            id: -1
        };
    }
    ngOnInit() {
        this.clients = this.clientService.getClient();
        this.clientValue = this.clientModelMapper(this.client);
    }
    onClientSave(value) {
        if (value) {
            if (this.client) {
                this.client.clientName = value.clientName;
                this.client.clientAddress = value.clientAddress;
                this.client.gstNumber = value.clientGSTNumber;
                this.client.id = this.clientValue.id;
            }
            else {
                this.client = {
                    clientName: value.clientName,
                    clientAddress: value.clientAddress,
                    gstNumber: value.clientGSTNumber,
                    id: -1
                };
            }
            this.clients = this.clientService.saveClient(this.client);
            this.gridApi.setRowData(this.clients);
            this.clearClient();
        }
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged(event) {
        var selectedRows = this.gridApi.getSelectedRows();
        this.client = selectedRows[0];
        this.clientValue = this.clientModelMapper(this.client);
    }
    clientModelMapper(client) {
        let clientValue = {
            clientName: client.clientName,
            clientAddress: client.clientAddress,
            isGSTApplication: client.gstNumber !== null && client.gstNumber.length > 0 ? true : false,
            clientGSTNumber: client.gstNumber,
            id: this.client.id
        };
        return clientValue;
    }
    clearClient() {
        this.client = {
            clientName: "",
            clientAddress: "",
            gstNumber: null,
            id: -1
        };
        this.clientValue = this.clientModelMapper(this.client);
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"])); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 9, vars: 4, consts: [[1, "container", "mt-2"], [1, "row"], [1, "col-md-4"], [3, "client", "onClientFormSubmit"], [1, "col-md-8"], [1, "ag-theme-material", 2, "height", "100vh", "width", "90%", 3, "rowData", "columnDefs", "rowSelection", "gridReady", "selectionChanged"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-client-entry", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClientFormSubmit", function ClientComponent_Template_app_client_entry_onClientFormSubmit_6_listener($event) { return ctx.onClientSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ag-grid-angular", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function ClientComponent_Template_ag_grid_angular_gridReady_8_listener($event) { return ctx.onGridReady($event); })("selectionChanged", function ClientComponent_Template_ag_grid_angular_selectionChanged_8_listener($event) { return ctx.onSelectionChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("client", ctx.clientValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.clients)("columnDefs", ctx.columnDefs)("rowSelection", "single");
    } }, directives: [_client_entry_client_entry_component__WEBPACK_IMPORTED_MODULE_2__["ClientEntryComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridAngular"]], styles: [".client_grid_column_align-right[_ngcontent-%COMP%]{\n    justify-content: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZXIvY2xpZW50cy9jb21wb25lbnRzL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VyL2NsaWVudHMvY29tcG9uZW50cy9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50X2dyaWRfY29sdW1uX2FsaWduLXJpZ2h0e1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client',
                templateUrl: './client.component.html',
                styleUrls: ['./client.component.css']
            }]
    }], function () { return [{ type: _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lib_Utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Utility */ "./src/app/lib/Utility.ts");



class ClientService {
    constructor() {
        this.clients = [];
        this.clientKey = "clients";
        let clietnCollection = localStorage.getItem(this.clientKey);
        if (clietnCollection != null) {
            this.clients = JSON.parse(clietnCollection);
        }
    }
    getClient() {
        let data = localStorage.getItem(this.clientKey);
        if (data !== null) {
            this.clients = JSON.parse(data);
        }
        return this.clients;
    }
    saveClient(client) {
        if (client.id == -1 || client.id == null) {
            let id = Object(_lib_Utility__WEBPACK_IMPORTED_MODULE_1__["findNextIdentity"])("id", this.clients);
            client.id = id;
            this.clients.push(client);
        }
        else {
            let clientIndex = this.clients.findIndex((item) => {
                return item.id == client.id;
            });
            let preValue = this.clients[clientIndex];
            preValue.clientName = client.clientName;
            preValue.clientAddress = client.clientAddress;
            preValue.gstNumber = client.gstNumber;
            this.clients[clientIndex] = preValue;
        }
        localStorage.setItem(this.clientKey, JSON.stringify(this.clients));
        return this.clients;
    }
    deletClient(client) {
        this.clients = this.clients.filter((item) => { return item.id !== client.id; });
        localStorage.setItem(this.clientKey, JSON.stringify(this.clients));
        return this.clients;
    }
    findClientById(id) {
        let client = null;
        if (!isNaN(id)) {
            let searchValue = this.getClient().filter((item) => { return item.id == id; });
            if (searchValue && searchValue.length > 0)
                client = searchValue[0];
        }
        return client;
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(); };
ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=clients-clients-module.js.map