webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_routeChange__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_actions__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.headerTitle = 'Dashboard';
        this.registeredMails = [];
        this.showHeaderControls = true;
        this.routerSubscription = router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* NavigationStart */]; })
            .subscribe(function (event) {
            _this.previousUrl = event.url;
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .store
            .dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state_actions__["a" /* getRegisteredMails */])());
        this
            .store
            .select('dashboard')
            .subscribe(function (data) {
            _this.registeredMails = data.items;
            _this.registeredMails = _this.registeredMails.map(function (elem) {
                return Object.assign(elem, {
                    routerLink: "/mails/" + elem.internalName
                });
            });
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.routerSubscription.unsubscribe();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(259),
        styles: [__webpack_require__(245)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush,
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_routeChange__["a" /* routeChangeAnimation */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardInitialState; });
var DashboardInitialState = {
    items: []
};
//# sourceMappingURL=initialState.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__(265),
        styles: [__webpack_require__(251)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_instance_mail_instance_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_components_material_components_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mail_items_list_mail_items_list_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__state_effects__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailInstanceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MailInstanceModule = (function () {
    function MailInstanceModule() {
    }
    return MailInstanceModule;
}());
MailInstanceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__routing__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_components_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_10__state_effects__["a" /* MailInstanceEffects */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__mail_instance_mail_instance_component__["a" /* MailInstanceComponent */], __WEBPACK_IMPORTED_MODULE_8__mail_items_list_mail_items_list_component__["a" /* MailItemsListComponent */]]
    })
], MailInstanceModule);

//# sourceMappingURL=mail-instance.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_routeChange__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_fab_toggle__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_actions__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailInstanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MailInstanceComponent = MailInstanceComponent_1 = (function () {
    function MailInstanceComponent(store, route, router) {
        var _this = this;
        this.store = store;
        this.route = route;
        this.router = router;
        this.content = {};
        this.backEnabled = true;
        this.showHeaderControls = true;
        this.items = [];
        this
            .route
            .params
            .subscribe(function (params) {
            _this.headerTitle = params['name'];
        });
        this
            .route
            .queryParams
            .subscribe(function (params) {
            _this.activeLink = params['target'];
            _this.items = MailInstanceComponent_1.filterVisibleItems(_this.content, params['target']);
            _this
                .store
                .dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__state_actions__["a" /* getMailContent */])({
                target: params['target'],
                mailBox: _this.headerTitle
            }));
        });
    }
    // @HostBinding('@routeChangeAnimation') routeChangeAnimation;
    MailInstanceComponent.filterVisibleItems = function (mailContent, filter) {
        return mailContent[filter] || [];
    };
    MailInstanceComponent.prototype.routerLinkActive = function (link) {
        return link.toLowerCase() === (this.activeLink
            ? this.activeLink.toLowerCase()
            : '');
    };
    MailInstanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .store
            .select('opened_mail')
            .subscribe(function (data) {
            _this.content = data;
            _this.items = MailInstanceComponent_1.filterVisibleItems(_this.content, _this.activeLink);
        });
    };
    return MailInstanceComponent;
}());
MailInstanceComponent = MailInstanceComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-mail-instance',
        template: __webpack_require__(266),
        styles: [__webpack_require__(252)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_1__animations_routeChange__["a" /* routeChangeAnimation */], __WEBPACK_IMPORTED_MODULE_2__animations_fab_toggle__["a" /* fabToggle */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MailInstanceComponent);

var MailInstanceComponent_1, _a, _b, _c;
//# sourceMappingURL=mail-instance.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailItemsState; });
var MailItemsState = {
    inbox: [],
    outbox: [],
    sent: [],
    draft: []
};
//# sourceMappingURL=initialState.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 137;


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(184);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_mail_page_add_mail_page_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routing__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_components_material_components_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AddMailModule = (function () {
    function AddMailModule() {
    }
    return AddMailModule;
}());
AddMailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__routing__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__material_components_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__add_mail_page_add_mail_page_component__["a" /* AddMailPageComponent */]]
    })
], AddMailModule);

//# sourceMappingURL=add-mail.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return buttonShrink; });

var fadeIn = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fadeIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('30ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }))
        ])
    ]);
};
var buttonShrink = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('buttonShrink', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            width: '100%',
            height: 'auto',
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                left: 0,
                top: 0,
                opacity: .5
            }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                opacity: 1,
                width: '100%',
                height: '50px',
                top: '260px'
            }))
        ])
    ]);
};
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_mail_page_add_mail_page_component__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    {
        path: 'add-mail',
        component: __WEBPACK_IMPORTED_MODULE_0__add_mail_page_add_mail_page_component__["a" /* AddMailPageComponent */],
        pathMatch: 'full'
    }
];
//# sourceMappingURL=routing.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeIn; });
/**
 * Created by zkirilov on 23.6.2017 г..
 */

var fadeIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fadeIn', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ height: '*', opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ height: '0', opacity: '0' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('30ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ height: '*', opacity: 1 }))
    ])
]);
//# sourceMappingURL=fadeIn.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

//# sourceMappingURL=MailMetadata.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page_login_page_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_components_material_components_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_actions_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var providers = {
    "google": {
        "clientId": "707072846999-49706cmmut7k19242hd36etug5jgr1jp.apps.googleusercontent.com"
    },
    "facebook": {
        "clientId": "836926473129127",
        "apiVersion": "2.4"
    }
};
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__material_components_material_components_module__["a" /* MaterialComponentsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__login_page_login_page_component__["a" /* LoginPageComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_page_login_page_component__["a" /* LoginPageComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__auth_actions_service__["a" /* AuthActionsService */]]
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_dashboard_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mail_instance_mail_instance_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_login_page_login_page_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_page_not_found_page_not_found_component__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: 'mails',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_dashboard_component__["a" /* DashboardComponent */],
        pathMatch: 'full'
    }, {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__authentication_login_page_login_page_component__["a" /* LoginPageComponent */]
    }, {
        path: '',
        redirectTo: 'mails',
        pathMatch: 'full'
    }, {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_8__layout_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var MainRouterModule = (function () {
    function MainRouterModule() {
    }
    return MainRouterModule;
}());
MainRouterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */], __WEBPACK_IMPORTED_MODULE_6__mail_instance_mail_instance_module__["a" /* MailInstanceModule */], __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_module__["a" /* AuthenticationModule */], __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__["a" /* LayoutModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], MainRouterModule);

//# sourceMappingURL=core-router.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_router_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_reducers_MainReducer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_state_reducer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mail_instance_state_reducers__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_mail_add_mail_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mail_instance_mail_instance_module__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* StoreModule */].provideStore({ MainReducer: __WEBPACK_IMPORTED_MODULE_8__store_reducers_MainReducer__["a" /* default */], dashboard: __WEBPACK_IMPORTED_MODULE_9__dashboard_state_reducer__["a" /* default */], opened_mail: __WEBPACK_IMPORTED_MODULE_10__mail_instance_state_reducers__["a" /* default */], router: __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* routerReducer */] }),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["b" /* RouterStoreModule */].connectRouter(),
            __WEBPACK_IMPORTED_MODULE_11__add_mail_add_mail_module__["a" /* AddMailModule */],
            __WEBPACK_IMPORTED_MODULE_7__core_router_module__["a" /* MainRouterModule */],
            __WEBPACK_IMPORTED_MODULE_12__mail_instance_mail_instance_module__["a" /* MailInstanceModule */]
        ],
        providers: []
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_layout_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registered_mails_registered_mails_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_effects__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_mail_registry_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_components_material_components_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mail_provider_mail_provider_component__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__material_components_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_8__state_effects__["a" /* DashboardEffects */])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_4__registered_mails_registered_mails_component__["a" /* RegisteredMailsComponent */], __WEBPACK_IMPORTED_MODULE_11__mail_provider_mail_provider_component__["a" /* MailProviderComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_9__api_mail_registry_service__["a" /* MailRegistryService */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailProviderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailProviderComponent = (function () {
    function MailProviderComponent(router) {
        this.router = router;
        this.backInLineAnimate = 'normal';
        this.mailLogoState = 'normal';
        this.logoExpansions = 0;
    }
    MailProviderComponent.prototype.ngOnInit = function () {
    };
    MailProviderComponent.prototype.onMailClick = function () {
        this.mailLogoState = 'expand';
    };
    MailProviderComponent.prototype.navigateToMailContents = function () {
        if (this.logoExpansions > 0) {
            this.router.navigate([this.data.routerLink], {
                queryParams: {
                    target: 'inbox'
                }
            });
        }
        else {
            this.logoExpansions += 1;
        }
    };
    MailProviderComponent.prototype.pickIcon = function (type) {
        var result = '';
        switch (type) {
            case 'gmail':
                result = '../../assets/mail-providers/gmail.svg';
                break;
            case 'yahoo':
                result = '../../assets/mail-providers/yahoo.svg';
                break;
            case 'outlook':
                result = '../../assets/mail-providers/outlook.svg';
                break;
            default:
                result = '../../assets/mail-providers/default.svg';
        }
        return result;
    };
    return MailProviderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata__["MailMetadata"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata__["MailMetadata"]) === "function" && _a || Object)
], MailProviderComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], MailProviderComponent.prototype, "backInLineAnimate", void 0);
MailProviderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-mail-provider',
        template: __webpack_require__(260),
        styles: [__webpack_require__(246)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush,
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* diagonalSlide */])('*'),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["b" /* expandingLogo */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["c" /* backInLine */])()
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MailProviderComponent);

var _a, _b;
//# sourceMappingURL=mail-provider.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fab_toggle__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredMailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisteredMailsComponent = (function () {
    function RegisteredMailsComponent(router, store) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.fabState = 'normal';
        this.fabExpansions = 0;
        this.columns = 1;
        this.rowHeight = '60px';
        this.tileBackground = '#ffffff';
        this.storeSub = this.store.select('router').subscribe(function (data) {
            if (!_this.previousURL) {
                _this.previousURL = data.path;
            }
        });
    }
    RegisteredMailsComponent.prototype.ngOnDestroy = function () {
        this.storeSub.unsubscribe();
    };
    RegisteredMailsComponent.prototype.expandFAB = function () {
        this.fabState = 'expand';
    };
    RegisteredMailsComponent.prototype.navigateTo = function (target) {
        if (this.fabExpansions > 0) {
            this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["c" /* go */])([target]));
            // this.router.navigate([target]);
        }
        else {
            this.fabExpansions += 1;
        }
    };
    RegisteredMailsComponent.prototype.shouldAnimateBack = function (data) {
        if (this.previousURL.includes(data.routerLink)) {
            return 'backInLine';
        }
        else {
            return 'normal';
        }
    };
    return RegisteredMailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Array)
], RegisteredMailsComponent.prototype, "mails", void 0);
RegisteredMailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-registered-mails',
        template: __webpack_require__(261),
        styles: [__webpack_require__(247)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush,
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fab_toggle__["a" /* fabToggle */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["d" /* expandingFAB */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], RegisteredMailsComponent);

var _a, _b;
//# sourceMappingURL=registered-mails.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRegisteredMails; });

var getRegisteredMails = function () {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* GET_REGISTERED_MAILS */]
    };
};
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardEffects = (function () {
    function DashboardEffects(action$, mailRegistryService) {
        var _this = this;
        this.action$ = action$;
        this.mailRegistryService = mailRegistryService;
        this.getRegisteredMails = this
            .action$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actionTypes__["a" /* GET_REGISTERED_MAILS */])
            .switchMap(function (action) {
            return _this
                .mailRegistryService
                .getRegisteredMails();
        })
            .map(function (res) { return ({
            type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["b" /* GET_REGISTERED_MAILS_SUCCESS */],
            payload: res
        }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["c" /* GET_REGISTERED_MAILS_ERROR */] }); });
    }
    return DashboardEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DashboardEffects.prototype, "getRegisteredMails", void 0);
DashboardEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__["a" /* MailRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__["a" /* MailRegistryService */]) === "function" && _b || Object])
], DashboardEffects);

var _a, _b;
//# sourceMappingURL=effects.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState__ = __webpack_require__(101);


var dashboard = function (state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_1__initialState__["a" /* DashboardInitialState */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* GET_REGISTERED_MAILS_SUCCESS */]:
            return Object.assign({}, state, { items: action.payload });
        default:
            return state;
    }
};
/* harmony default export */ __webpack_exports__["a"] = dashboard;
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(262),
        styles: [__webpack_require__(248)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "backEnabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "showControls", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(263),
        styles: [__webpack_require__(249)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(264),
        styles: [__webpack_require__(250)]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fadeIn__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailItemsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailItemsListComponent = (function () {
    function MailItemsListComponent() {
        this.items = [];
    }
    MailItemsListComponent.prototype.ngOnInit = function () {
    };
    return MailItemsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], MailItemsListComponent.prototype, "items", void 0);
MailItemsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-mail-items-list',
        template: __webpack_require__(267),
        styles: [__webpack_require__(253)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_1__animations_fadeIn__["a" /* fadeIn */]
        ]
    }),
    __metadata("design:paramtypes", [])
], MailItemsListComponent);

//# sourceMappingURL=mail-items-list.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_instance_mail_instance_component__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    {
        path: 'mails/:name',
        component: __WEBPACK_IMPORTED_MODULE_0__mail_instance_mail_instance_component__["a" /* MailInstanceComponent */]
    }
];
//# sourceMappingURL=routing.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMailContent; });

var getMailContent = function (payload) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* GET_MAIL_CONTENT */],
        payload: payload
    };
};
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailInstanceEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailInstanceEffects = (function () {
    function MailInstanceEffects(action$, mailRegistryService) {
        var _this = this;
        this.action$ = action$;
        this.mailRegistryService = mailRegistryService;
        this.getMailContent = this
            .action$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actionTypes__["a" /* GET_MAIL_CONTENT */])
            .switchMap(function (action) {
            return _this
                .mailRegistryService
                .getMailContents()
                .map(function (res) { return ({
                type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["b" /* GET_MAIL_CONTENT_SUCCESS */],
                payload: _this.formatData(res, action.payload.mailBox, action.payload.target)
            }); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["c" /* GET_MAIL_CONTENT_ERROR */] }); });
        });
    }
    MailInstanceEffects.prototype.formatData = function (json, mailBox, target) {
        var result = {};
        var target_data = json.filter(function (elem) { return elem['internalName'] === mailBox; })[0] || {};
        result[target] = target_data[target];
        return result;
    };
    return MailInstanceEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], MailInstanceEffects.prototype, "getMailContent", void 0);
MailInstanceEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__["a" /* MailRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__["a" /* MailRegistryService */]) === "function" && _b || Object])
], MailInstanceEffects);

var _a, _b;
//# sourceMappingURL=effects.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState__ = __webpack_require__(105);


var opened_mail = function (state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_1__initialState__["a" /* MailItemsState */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* GET_MAIL_CONTENT_SUCCESS */]:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
/* harmony default export */ __webpack_exports__["a"] = opened_mail;
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_PAGE_TITLE; });
var SET_PAGE_TITLE = 'SET_PAGE_TITLE';
//# sourceMappingURL=actionTypes.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_MainState__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(181);


var MainReducer = function (state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__state_MainState__["a" /* initialState */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["a" /* SET_PAGE_TITLE */]:
            return Object.assign({}, state, { pageTitle: action.payload });
        default:
            return state;
    }
};
/* harmony default export */ __webpack_exports__["a"] = MainReducer;
//# sourceMappingURL=MainReducer.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_state_initialState__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_instance_state_initialState__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });


var initialState = {
    dashboard: __WEBPACK_IMPORTED_MODULE_0__dashboard_state_initialState__["a" /* DashboardInitialState */],
    opened_mail: __WEBPACK_IMPORTED_MODULE_1__mail_instance_state_initialState__["a" /* MailItemsState */],
    router: {
        path: ''
    }
};
//# sourceMappingURL=MainState.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host .add-mail-form {\n  width: 80%;\n  margin: 0 auto; }\n\n:host /deep/ .add-mail-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host /deep/ .add-mail-row md-input-container {\n    width: 100%; }\n    :host /deep/ .add-mail-row md-input-container input {\n      width: 100%; }\n  :host /deep/ .add-mail-row md-select {\n    width: 100%; }\n    :host /deep/ .add-mail-row md-select select {\n      width: 100%; }\n\n:host .button-row {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 2rem; }\n  :host .button-row button {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host /deep/ .mat-tab-label {\n  width: 50%; }\n\n:host .credentials {\n  width: 80%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 2rem; }\n  :host .credentials /deep/ .credentials-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    :host .credentials /deep/ .credentials-row .mat-input-container {\n      width: 100%; }\n      :host .credentials /deep/ .credentials-row .mat-input-container input {\n        width: 100%; }\n  :host .credentials .button-row {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    :host .credentials .button-row button {\n      width: 100%; }\n\n:host /deep/ .social-buttons button {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: white; }\n  :host /deep/ .social-buttons button md-icon path {\n    fill: white; }\n  :host /deep/ .social-buttons button md-icon svg {\n    vertical-align: initial; }\n\n:host /deep/ .social-buttons .facebook-btn {\n  background: #428bca;\n  border-color: #357ebd; }\n\n:host /deep/ .social-buttons .google-btn {\n  background: #d2322d;\n  border-color: #ac2925; }\n\n:host .separator {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%; }\n\n.dashboard {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  text-align: left; }\n  :host .mail-provider-icon {\n    width: 1.5em;\n    margin-right: .5rem;\n    padding: 0 .5rem; }\n  :host .open-mail {\n    float: right; }\n  :host .mail-link {\n    width: 100%;\n    height: 100%;\n    text-align: left; }\n  :host .mail-badge::after {\n    top: -4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  padding-bottom: 2rem; }\n  :host header {\n    padding: 0 1.2rem;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0; }\n    :host header h1 {\n      padding: 0;\n      margin: 0;\n      font-size: 1.3rem; }\n    :host header .add-mail {\n      position: fixed;\n      right: 1rem;\n      bottom: 1rem;\n      z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "header {\n  display: block;\n  position: relative;\n  margin-bottom: 1rem; }\n  header .header-title {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    font-size: 1em; }\n  header .back-button {\n    text-align: left;\n    padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  min-height: 100vh; }\n  :host .mail-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 100vh; }\n    :host .mail-content app-header {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    :host .mail-content .main-section {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    :host .mail-content .nav-section {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3;\n      position: fixed;\n      bottom: 0;\n      background: white; }\n    :host .mail-content .new-mail {\n      position: fixed;\n      bottom: 3.5rem;\n      right: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  overflow: auto; }\n  :host /deep/ md-list {\n    height: 100vh;\n    overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<article class=\"add-mail\">\r\n\r\n  <app-header [title]=\"headerTitle\" [backEnabled]=\"backEnabled\"></app-header>\r\n\r\n  <form class=\"add-mail-form\">\r\n    <div class=\"add-mail-row\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Email\" type=\"email\">\r\n      </md-input-container>\r\n    </div>\r\n\r\n    <div class=\"add-mail-row\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Password\" type=\"password\">\r\n      </md-input-container>\r\n    </div>\r\n\r\n    <div class=\"add-mail-row\">\r\n      <md-select placeholder=\"Protocol\" [(ngModel)]=\"selectedProtocol\" name=\"protocol\">\r\n        <md-option *ngFor=\"let protocol of protocols\" [value]=\"protocol.value\">\r\n          {{protocol.viewValue}}\r\n        </md-option>\r\n      </md-select>\r\n    </div>\r\n\r\n    <div class=\"button-row\">\r\n      <button md-raised-button color=\"accent\" [@buttonShrink]>Connect to email</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</article>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<main class=\"login-page\">\n  <md-tab-group>\n\n    <md-tab label=\"Sign in\">\n      <section class=\"login-credentials credentials\">\n\n        <div class=\"social-buttons\">\n          <button md-raised-button class=\"facebook-btn\">\n            <md-icon svgIcon=\"facebook-logo\" class=\"facebook-logo\"></md-icon>\n            Sign in with Facebook\n          </button>\n\n          <button md-raised-button class=\"google-btn\">\n            <md-icon svgIcon=\"google-logo\" class=\"google-logo\"></md-icon>\n            Sign in with Googe\n          </button>\n        </div>\n\n        <div class=\"separator\">\n          OR\n        </div>\n\n        <div class=\"credentials-row\">\n          <md-input-container>\n            <input mdInput placeholder=\"Email\" type=\"email\">\n          </md-input-container>\n        </div>\n\n        <div class=\"credentials-row\">\n          <md-input-container>\n            <input mdInput placeholder=\"Password\" type=\"password\">\n          </md-input-container>\n        </div>\n\n        <div class=\"button-row\">\n          <button (click)=\"login()\" md-raised-button color=\"primary\">Sign in with email</button>\n        </div>\n\n      </section>\n    </md-tab>\n\n    <md-tab label=\"Sign up\">\n      <section class=\"signup-credentials credentials\">\n\n        <div class=\"social-buttons\">\n          <button md-raised-button class=\"facebook-btn\">\n            <md-icon svgIcon=\"facebook-logo\" class=\"facebook-logo\"></md-icon>\n            Sign up with Facebook\n          </button>\n\n          <button md-raised-button class=\"google-btn\">\n            <md-icon svgIcon=\"google-logo\" class=\"google-logo\"></md-icon>\n            Sign up with Googe\n          </button>\n        </div>\n\n        <div class=\"separator\">\n          OR\n        </div>\n\n        <div class=\"credentials-row\">\n          <md-input-container>\n            <input mdInput placeholder=\"Email\" type=\"email\">\n          </md-input-container>\n        </div>\n\n        <div class=\"credentials-row\">\n          <md-input-container>\n            <input mdInput placeholder=\"Password\" type=\"password\">\n          </md-input-container>\n        </div>\n\n        <div class=\"button-row\">\n          <button (click)=\"login()\" md-raised-button color=\"primary\">Sign up with email</button>\n        </div>\n\n      </section>\n    </md-tab>\n\n  </md-tab-group>\n</main>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-layout--fixed-header dashboard\">\r\n  <app-header [title]=\"headerTitle\" [showControls]=\"showHeaderControls\"></app-header>\r\n  <app-registered-mails [mails]=\"registeredMails\"></app-registered-mails>\r\n</div>\r\n"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<!--<a [routerLink]=\"data.routerLink\" [queryParams]=\"{target: 'inbox'}\" md-button class=\"mail-link\">\r\n  <span class=\"mdl-list__item-primary-content\">\r\n    <img class=\"mail-provider-icon\" [src]=\"pickIcon(data.type)\" [alt]=\"data.type\" [title]=\"data.type\"/>\r\n    <span>{{data.displayName}}</span>\r\n    <span class=\"mdl-badge mail-badge\" [attr.data-badge]=\"data.newMails\"></span>\r\n    <md-icon class=\"arrow-right\">chevron_right</md-icon>\r\n  </span>\r\n</a>-->\r\n\r\n<a md-button class=\"mail-link\" (click)=\"onMailClick()\">\r\n  <div class=\"mdl-list__item-primary-content\">\r\n    <img class=\"mail-provider-icon\" [src]=\"pickIcon(data.type)\" [alt]=\"data.type\" [title]=\"data.type\"\r\n         [@logoExpand]=\"mailLogoState\" (@logoExpand.done)=\"navigateToMailContents()\" [@backInLine]=\"backInLineAnimate\"/>\r\n    <span>{{data.displayName}}</span>\r\n    <span class=\"mdl-badge mail-badge\" [attr.data-badge]=\"data.newMails\"></span>\r\n    <md-icon class=\"arrow-right\">chevron_right</md-icon>\r\n  </div>\r\n</a>"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<main class=\"registered-mails\">\r\n    <header>\r\n        <!--<a class=\"add-mail\" md-fab [routerLink]=\"['/add-mail']\">\r\n  \t\t\t<i class=\"material-icons\">add</i>\r\n\t\t</a>-->\r\n        <div class=\"add-mail\" (click)=\"expandFAB()\" [@fabToggle]=\"fabState\">\r\n            <a md-fab>\r\n  \t\t\t    <i class=\"material-icons\">add</i>\r\n\t\t    </a>\r\n        </div>\r\n\r\n    </header>\r\n\r\n    <md-list class=\"mails-list\">\r\n        <md-list-item *ngFor=\"let mail of mails\">\r\n            <app-mail-provider [data]=\"mail\" [backInLineAnimate]=\"shouldAnimateBack(mail)\"></app-mail-provider>\r\n        </md-list-item>\r\n    </md-list>\r\n\r\n    <div [@expand]=\"fabState\" (@expand.done)=\"navigateTo('/add-mail')\"></div>\r\n</main>"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<footer class=\"mdl-mega-footer\">\r\n  footer works!\r\n</footer>\r\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<header>\r\n\t<md-toolbar color=\"primary\" class=\"header-row-1 header-wrapper\">\r\n\t\t\t<a md-button [routerLink]=\"['/mails']\" *ngIf=\"backEnabled\" class=\"back-button\">\r\n\t\t\t\t<md-icon >arrow_back</md-icon>\r\n\t\t\t</a>\r\n\t\t    \r\n\t\t\t<h1 class=\"header-title\">{{title}}</h1>\r\n\t\t\t<div class=\"header-controls\" *ngIf=\"showControls\">\r\n\t\t\t\t<button class=\"mdl-button mdl-js-button mdl-button--icon\">\r\n\t\t\t\t\t<i class=\"material-icons\">search</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"mdl-button mdl-js-button mdl-button--icon\">\r\n\t\t\t\t\t<i class=\"material-icons\">settings</i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t</md-toolbar>\r\n</header>"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<main>\r\n</main>"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<article class=\"mail-content\">\r\n    <app-header [title]=\"headerTitle\" [backEnabled]=\"backEnabled\" [showControls]=\"showHeaderControls\"></app-header>\r\n\r\n    <section class=\"main-section\">\r\n        <app-mail-items-list [items]=\"items\"></app-mail-items-list>\r\n        <div>\r\n            <a class=\"new-mail\" md-fab [@fabToggle]>\r\n                <i class=\"material-icons\">edit</i>\r\n            </a>\r\n        </div>\r\n    </section>\r\n\r\n    <nav md-tab-nav-bar class=\"nav-section\">\r\n        <a md-tab-link [routerLink]=\"[]\" [queryParams]=\"{target: 'inbox'}\" [active]=\"routerLinkActive('inbox')\">\r\n            Inbox\r\n        </a>\r\n        <a md-tab-link [routerLink]=\"[]\" [queryParams]=\"{target: 'outbox'}\" [active]=\"routerLinkActive('outbox')\">\r\n            Outbox\r\n        </a>\r\n        <a md-tab-link [routerLink]=\"[]\" [queryParams]=\"{target: 'sent'}\" [active]=\"routerLinkActive('sent')\">\r\n            Sent\r\n        </a>\r\n        <a md-tab-link [routerLink]=\"[]\" [queryParams]=\"{target: 'draft'}\" [active]=\"routerLinkActive('draft')\">\r\n            Draft\r\n        </a>\r\n    </nav>\r\n\r\n</article>"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<md-list *ngIf=\"items.length > 0\">\n    <md-list-item *ngFor=\"let item of items\" [@fadeIn]>\n        <h4 md-line>{{item.sender}}</h4>\n        <p md-line> {{item.content}} </p>\n    </md-list-item>\n</md-list>\n\n<p *ngIf=\"items.length < 1\">\n    No items to display\n</p>\n"

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialComponentsModule = (function () {
    function MaterialComponentsModule() {
    }
    return MaterialComponentsModule;
}());
MaterialComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdSelectModule */]
        ],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdToolbarRow */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdSelectModule */]]
    })
], MaterialComponentsModule);

//# sourceMappingURL=material-components.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_components_material_components_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_components_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */],
        ]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeChangeAnimation; });
/* unused harmony export verticalSlide */

var routeChangeAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routeChangeAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'fixed', width: '100%' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'fixed', width: '100%' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }))
    ])
]);
var verticalSlide = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('verticalSlide', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)', position: 'fixed' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(-200%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(200%)' }))
    ])
]);
//# sourceMappingURL=routeChange.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailRegistryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailRegistryService = (function () {
    function MailRegistryService(http) {
        var _this = this;
        this.http = http;
        this.getRegisteredMails = function () {
            var mailsData = _this.mailsData.slice();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(mailsData);
        };
        this.getMailContents = function () {
            var mailsContent = _this.mailsContent.slice();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(mailsContent);
        };
        this.mailsContent = [
            {
                "internalName": "Test1",
                "displayName": "Test1@gmail.com",
                "type": "gmail",
                "inbox": [
                    {
                        "sender": "inbox test1",
                        "content": "Lorem ipsum"
                    },
                    {
                        "sender": "inbox test2",
                        "content": "Lorem ipsum"
                    },
                    {
                        "sender": "inbox test3",
                        "content": "Lorem ipsum"
                    }
                ],
                "outbox": [
                    {
                        "sender": "outbox test1",
                        "content": "Lorem ipsum"
                    },
                    {
                        "sender": "outbox test2",
                        "content": "Lorem ipsum"
                    },
                    {
                        "sender": "outbox test3",
                        "content": "Lorem ipsum"
                    }
                ],
                "sent": [
                    {
                        "sender": "sent test1",
                        "content": "Lorem ipsum"
                    },
                    {
                        "sender": "sent test2",
                        "content": "Lorem ipsum"
                    },
                    {
                        "sender": "sent test3",
                        "content": "Lorem ipsum"
                    },
                    {
                        "sender": "sent test4",
                        "content": "Lorem ipsum"
                    },
                    {
                        "sender": "sent test5",
                        "content": "Lorem ipsum"
                    }
                ],
                "newMails": 3
            },
            {
                "internalName": "Test2",
                "displayName": "Test2@yahoo.com",
                "type": "yahoo",
                "newMails": 5,
                "inbox": [
                    {
                        "sender": "inbox test2",
                        "content": "Lorem ipsum"
                    }
                ],
                "outbox": [
                    {
                        "sender": "outbox test2",
                        "content": "Lorem ipsum"
                    }
                ],
                "sent": [
                    {
                        "sender": "sent test2",
                        "content": "Lorem ipsum"
                    }
                ]
            },
            {
                "internalName": "Test3",
                "displayName": "Test3@outlook.com",
                "type": "outlook",
                "newMails": 1,
                "inbox": [
                    {
                        "sender": "inbox test3",
                        "content": "Lorem ipsum"
                    }
                ],
                "outbox": [
                    {
                        "sender": "outbox test3",
                        "content": "Lorem ipsum"
                    }
                ],
                "sent": [
                    {
                        "sender": "sent test3",
                        "content": "Lorem ipsum"
                    }
                ]
            },
            {
                "internalName": "Test4",
                "displayName": "Test4@abv.bg",
                "type": "unknown",
                "newMails": 2,
                "inbox": [
                    {
                        "sender": "inbox test4",
                        "content": "Lorem ipsum"
                    }
                ],
                "outbox": [
                    {
                        "sender": "outbox test4",
                        "content": "Lorem ipsum"
                    }
                ],
                "sent": [
                    {
                        "sender": "sent test4",
                        "content": "Lorem ipsum"
                    }
                ]
            }
        ];
        this.mailsData = [
            {
                "internalName": "Test1",
                "displayName": "Test1@gmail.com",
                "type": "gmail",
                "newMails": 3
            },
            {
                "internalName": "Test2",
                "displayName": "Test2@yahoo.com",
                "type": "yahoo",
                "newMails": 5
            },
            {
                "internalName": "Test3",
                "displayName": "Test3@outlook.com",
                "type": "outlook",
                "newMails": 1
            },
            {
                "internalName": "Test4",
                "displayName": "Test4@abv.bg",
                "type": "unknown",
                "newMails": 2
            }
        ];
    }
    return MailRegistryService;
}());
MailRegistryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MailRegistryService);

var _a;
//# sourceMappingURL=mail-registry.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_REGISTERED_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_REGISTERED_MAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_REGISTERED_MAILS_ERROR; });
var GET_REGISTERED_MAILS = 'GET_REGISTERED_MAILS';
var GET_REGISTERED_MAILS_SUCCESS = 'GET_REGISTERED_MAILS_SUCCESS';
var GET_REGISTERED_MAILS_ERROR = 'GET_REGISTERED_MAILS_ERROR';
//# sourceMappingURL=actionTypes.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_MAIL_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_MAIL_CONTENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_MAIL_CONTENT_ERROR; });
var GET_MAIL_CONTENT = 'GET_MAIL_CONTENT';
var GET_MAIL_CONTENT_SUCCESS = 'GET_MAIL_CONTENT_SUCCESS';
var GET_MAIL_CONTENT_ERROR = 'GET_MAIL_CONTENT_ERROR';
//# sourceMappingURL=actionTypes.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_routeChange__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMailPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddMailPageComponent = (function () {
    function AddMailPageComponent() {
        // @HostBinding('@routeChangeAnimation') routeChangeAnimation;
        // @HostBinding('@fadeIn') fadeIn;
        this.headerTitle = 'New provider';
        this.backEnabled = true;
        this.protocols = [
            {
                value: 'IMAP',
                viewValue: 'IMAP'
            }, {
                value: 'POP3',
                viewValue: 'POP3'
            }, {
                value: 'SMTP',
                viewValue: 'SMTP'
            }
        ];
    }
    AddMailPageComponent.prototype.ngOnInit = function () { };
    return AddMailPageComponent;
}());
AddMailPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-add-mail-page',
        template: __webpack_require__(256),
        styles: [__webpack_require__(242)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_routeChange__["a" /* routeChangeAnimation */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* fadeIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["b" /* buttonShrink */])()]
    }),
    __metadata("design:paramtypes", [])
], AddMailPageComponent);

//# sourceMappingURL=add-mail-page.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fabToggle; });

var fabToggle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fabToggle', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate(0, 200%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.4s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate(0, 0)' }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate(0, 0)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.4s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate(0, 200%)' }))
    ])
]);
//# sourceMappingURL=fab_toggle.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.routerSubscription = router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]; })
            .subscribe(function (event) {
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(257),
        styles: [__webpack_require__(243)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthActionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthActionsService = (function () {
    function AuthActionsService(http) {
        this.http = http;
        this.login_url = 'https://zdravkovk.eu.auth0.com/authorize';
        this.providers = {
            facebook: 'facebook',
            google: 'google-oauth2'
        };
    }
    AuthActionsService.prototype.login = function () {
        this
            .http
            .get(this.login_url)
            .map(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
        })
            .subscribe(function (data) {
            debugger;
        }, function (greshka) {
            debugger;
        });
    };
    return AuthActionsService;
}());
AuthActionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthActionsService);

var _a;
//# sourceMappingURL=auth-actions.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_actions_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = (function () {
    function LoginPageComponent(authService, iconRegistry, sanitizer) {
        this.authService = authService;
        this.iconRegistry = iconRegistry;
        iconRegistry.addSvgIcon('facebook-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/custom-icons/facebook-logo.svg'));
        iconRegistry.addSvgIcon('google-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/custom-icons/google-logo.svg'));
    }
    LoginPageComponent.prototype.ngOnInit = function () { };
    LoginPageComponent.prototype.login = function () {
        this
            .authService
            .login();
    };
    LoginPageComponent.prototype.otherLogin = function () {
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__(258),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_actions_service__["a" /* AuthActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_actions_service__["a" /* AuthActionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdIconRegistry */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _c || Object])
], LoginPageComponent);

var _a, _b, _c;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return diagonalSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return expandingFAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return expandingLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return backInLine; });

var diagonalSlide = function (topCoord) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('diagonalSlide', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate(0, 0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => slideBack', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'fixed', transform: 'translate(70%, -500%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.8s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'fixed', transform: 'translate(0, 0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => slideOut', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.8s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
};
var expandingFAB = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('expand', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            position: 'fixed',
            width: '0',
            height: '0',
            opacity: 1,
            background: '#ffd740',
            left: '150vw',
            top: '150vh',
            'border-radius': '100%'
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('normal => expand', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                position: 'fixed',
                width: '150vh',
                height: '150vh',
                left: '-10vw',
                top: '-50vh',
                opacity: .6
            }))
        ])
    ]);
};
var expandingLogo = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('logoExpand', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('normal => expand', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                width: '60vh',
                height: '60vh',
                opacity: .6
            }))
        ])
    ]);
};
var backInLine = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('backInLine', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => backInLine', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                position: 'relative', transform: 'translate(0, -100%)', width: '60vh',
                height: '60vh',
            }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                transform: 'translate(0, 0%)',
                top: '50%',
                width: '*',
                height: '*',
                opacity: .6
            }))
        ])
    ]);
};
//# sourceMappingURL=animations.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.bundle.js.map