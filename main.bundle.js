webpackJsonp([1,5],Array(36).concat([
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(105);
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
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdSidenavModule */]
        ],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdToolbarRow */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdSidenavModule */]]
    })
], MaterialComponentsModule);

//# sourceMappingURL=material-components.module.js.map

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return listAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expandingFAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return slideToHeader; });
/**
 * Created by zkirilov on 26.6.2017 г..
 */

var listAnimation = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('listAnimation', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => pending', [
            // this hides everything right away
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* query */])('.animated-list-item', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }), { optional: true }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* query */])('.animated-list-item', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* stagger */])('20ms', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }))
            ]), { optional: true }),
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
var slideToHeader = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('slideToHeader', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                top: '-100%'
            }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s linear', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                top: '10px'
            }))
        ])
    ]);
};
//# sourceMappingURL=animations.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_components_material_components_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resizable_directive__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tab_nav_tab_nav_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__side_panel_side_panel_component__ = __webpack_require__(230);
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
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_components_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_8__resizable_directive__["a" /* ResizableDirective */], __WEBPACK_IMPORTED_MODULE_9__tab_nav_tab_nav_component__["a" /* TabNavComponent */], __WEBPACK_IMPORTED_MODULE_10__side_panel_side_panel_component__["a" /* SidePanelComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__tab_nav_tab_nav_component__["a" /* TabNavComponent */],
            __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_8__resizable_directive__["a" /* ResizableDirective */],
            __WEBPACK_IMPORTED_MODULE_10__side_panel_side_panel_component__["a" /* SidePanelComponent */]
        ]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MailRegistryService);

var _a;
//# sourceMappingURL=mail-registry.service.js.map

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_mail_registry_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailExistsGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailExistsGuardService = (function () {
    function MailExistsGuardService(api, store) {
        this.api = api;
        this.store = store;
    }
    MailExistsGuardService.prototype.canActivate = function (route) {
        var _this = this;
        return this.api.getRegisteredMails()
            .map(function (data) {
            var mail = route.params['name'];
            var canActivate = data.slice().map(function (elem) { return elem.internalName; }).includes(mail);
            if (canActivate) {
                return true;
            }
            else {
                _this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__["c" /* go */])(['/404']));
            }
        });
    };
    return MailExistsGuardService;
}());
MailExistsGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_mail_registry_service__["a" /* MailRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_mail_registry_service__["a" /* MailRegistryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], MailExistsGuardService);

var _a, _b;
//# sourceMappingURL=mail-exists-guard.service.js.map

/***/ }),
/* 76 */
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
/* 77 */
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
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_routeChange__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_animations__ = __webpack_require__(44);
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
        this.headerTitle = 'New provider';
        this.backEnabled = true;
        this.backURL = '/mails';
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
    AddMailPageComponent.prototype.ngOnInit = function () {
    };
    return AddMailPageComponent;
}());
AddMailPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-add-mail-page',
        template: __webpack_require__(326),
        styles: [__webpack_require__(305)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_routeChange__["a" /* routeChangeAnimation */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* fadeIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["b" /* buttonShrink */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animations_animations__["c" /* slideToHeader */])()]
    }),
    __metadata("design:paramtypes", [])
], AddMailPageComponent);

//# sourceMappingURL=add-mail-page.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(11);
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
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(327),
        styles: [__webpack_require__(306)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(351);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthActionsService);

var _a;
//# sourceMappingURL=auth-actions.service.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_actions_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(105);
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
        template: __webpack_require__(328),
        styles: [__webpack_require__(307)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_actions_service__["a" /* AuthActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_actions_service__["a" /* AuthActionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconRegistry */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _c || Object])
], LoginPageComponent);

var _a, _b, _c;
//# sourceMappingURL=login-page.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_actions__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_selectors__ = __webpack_require__(225);
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
    function DashboardComponent(store) {
        this.store = store;
        this.headerTitle = 'Dashboard';
        this.showHeaderControls = true;
        this.sidebarOpened = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this
            .store
            .dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__state_actions__["a" /* getRegisteredMails */])());
        this.registeredMails = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__state_selectors__["a" /* selectRegisteredMails */])(this.store);
    };
    DashboardComponent.prototype.handleMenuOpen = function () {
        this.sidebarOpened = true;
    };
    DashboardComponent.prototype.handleMenuClose = function () {
        this.sidebarOpened = false;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(329),
        styles: [__webpack_require__(308)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ChangeDetectionStrategy */].OnPush,
        animations: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardInitialState; });
var DashboardInitialState = {
    items: []
};
//# sourceMappingURL=initialState.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(335),
        styles: [__webpack_require__(314)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_animations__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComposerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailComposerComponent = (function () {
    function MailComposerComponent(route) {
        this.route = route;
        this.headerTitle = 'Compose';
        this.backEnabled = true;
        this.backURL = route.url.substring(0, route.url.indexOf('/new'));
    }
    MailComposerComponent.prototype.ngOnInit = function () {
    };
    return MailComposerComponent;
}());
MailComposerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-mail-composer',
        template: __webpack_require__(338),
        styles: [__webpack_require__(317)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_animations__["c" /* slideToHeader */])()
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], MailComposerComponent);

var _a;
//# sourceMappingURL=mail-composer.component.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailContentComponent = (function () {
    function MailContentComponent() {
    }
    MailContentComponent.prototype.ngOnInit = function () {
    };
    return MailContentComponent;
}());
MailContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-mail-content',
        template: __webpack_require__(340),
        styles: [__webpack_require__(319)]
    }),
    __metadata("design:paramtypes", [])
], MailContentComponent);

//# sourceMappingURL=mail-content.component.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_layout_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_components_material_components_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_effects__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mail_content_mail_content_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_header_content_header_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mailbox_mailbox__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mail_items_list_mail_items_list_component__ = __webpack_require__(235);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var MailboxModule = (function () {
    function MailboxModule() {
    }
    return MailboxModule;
}());
MailboxModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__routing__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_components_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_8__state_effects__["a" /* MailInstanceEffects */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_11__mailbox_mailbox__["a" /* MailboxComponent */], __WEBPACK_IMPORTED_MODULE_12__mail_items_list_mail_items_list_component__["a" /* MailItemsListComponent */], __WEBPACK_IMPORTED_MODULE_9__mail_content_mail_content_component__["a" /* MailContentComponent */], __WEBPACK_IMPORTED_MODULE_10__content_header_content_header_component__["a" /* ContentHeaderComponent */]]
    })
], MailboxModule);

//# sourceMappingURL=mailbox.module.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_fab_toggle__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_actions__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MailboxComponent = MailboxComponent_1 = (function () {
    function MailboxComponent(store, route, router) {
        var _this = this;
        this.store = store;
        this.route = route;
        this.router = router;
        this.content = {};
        this.fabExpansions = 0;
        this.fabState = 'normal';
        this.backEnabled = true;
        this.backURL = '/mails';
        this.showHeaderControls = true;
        this.items = [];
        this
            .route
            .params
            .subscribe(function (params) {
            _this.headerTitle = params['name'];
            _this.activeLink = params['box'];
            _this.items = MailboxComponent_1.filterVisibleItems(_this.content, params['box']);
            _this
                .store
                .dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__state_actions__["a" /* getMailContent */])({
                target: _this.activeLink,
                mailBox: _this.headerTitle
            }));
        });
    }
    MailboxComponent.filterVisibleItems = function (mailContent, filter) {
        return mailContent[filter] || [];
    };
    MailboxComponent.prototype.expandFAB = function () {
        this.fabState = 'expand';
    };
    MailboxComponent.prototype.navigateToComposer = function (target) {
        if (this.fabExpansions > 0) {
            var currentRoute = this.router.url.slice(0, this.router.url.lastIndexOf('/'));
            this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["c" /* go */])([currentRoute + '/draft/new']));
        }
        else {
            this.fabExpansions += 1;
        }
    };
    MailboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeSub = this
            .store
            .select('opened_mail')
            .subscribe(function (data) {
            _this.content = data;
            _this.items = MailboxComponent_1.filterVisibleItems(_this.content, _this.activeLink);
        });
    };
    MailboxComponent.prototype.ngOnDestroy = function () {
        this.storeSub.unsubscribe();
    };
    return MailboxComponent;
}());
MailboxComponent = MailboxComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-mailbox',
        template: __webpack_require__(342),
        styles: [__webpack_require__(321)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__animations_fab_toggle__["a" /* fabToggle */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_animations__["b" /* listAnimation */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* expandingFAB */])()
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], MailboxComponent);

var MailboxComponent_1, _a, _b, _c;
//# sourceMappingURL=mailbox.js.map

/***/ }),
/* 130 */
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
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__(343),
        styles: [__webpack_require__(322)]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsMainComponent = (function () {
    function SettingsMainComponent() {
    }
    SettingsMainComponent.prototype.ngOnInit = function () {
    };
    return SettingsMainComponent;
}());
SettingsMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-settings-main',
        template: __webpack_require__(344),
        styles: [__webpack_require__(323)]
    }),
    __metadata("design:paramtypes", [])
], SettingsMainComponent);

//# sourceMappingURL=settings-main.component.js.map

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 163;


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(247);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_mail_page_add_mail_page_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routing__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_components_material_components_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(21);
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
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
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
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(11);
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
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_mail_page_add_mail_page_component__ = __webpack_require__(118);
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
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(11);
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
/* 213 */
/***/ (function(module, exports) {

//# sourceMappingURL=MailMetadata.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(120);
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
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page_login_page_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_components_material_components_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_actions_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(40);
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
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__material_components_material_components_module__["a" /* MaterialComponentsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__login_page_login_page_component__["a" /* LoginPageComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_page_login_page_component__["a" /* LoginPageComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__auth_actions_service__["a" /* AuthActionsService */]]
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_dashboard_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mailbox_mailbox_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_login_page_login_page_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_page_not_found_page_not_found_component__ = __webpack_require__(125);
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
            __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */], __WEBPACK_IMPORTED_MODULE_6__mailbox_mailbox_module__["a" /* MailboxModule */], __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_module__["a" /* AuthenticationModule */], __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__["a" /* LayoutModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], MainRouterModule);

//# sourceMappingURL=core-router.module.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_router_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_reducers_MainReducer__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_state_reducer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mailbox_state_reducers__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_mail_add_mail_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mailbox_mailbox_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mail_composer_mail_composer_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mail_exists_guard_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_search_module__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__settings_settings_module__ = __webpack_require__(243);
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
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* StoreModule */].provideStore({
                MainReducer: __WEBPACK_IMPORTED_MODULE_8__store_reducers_MainReducer__["a" /* default */],
                dashboard: __WEBPACK_IMPORTED_MODULE_9__dashboard_state_reducer__["a" /* default */],
                opened_mail: __WEBPACK_IMPORTED_MODULE_10__mailbox_state_reducers__["a" /* default */],
                router: __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* routerReducer */]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["b" /* RouterStoreModule */].connectRouter(),
            __WEBPACK_IMPORTED_MODULE_11__add_mail_add_mail_module__["a" /* AddMailModule */],
            __WEBPACK_IMPORTED_MODULE_13__mail_composer_mail_composer_module__["a" /* MailComposerModule */],
            __WEBPACK_IMPORTED_MODULE_12__mailbox_mailbox_module__["a" /* MailboxModule */],
            __WEBPACK_IMPORTED_MODULE_15__search_search_module__["a" /* SearchModule */],
            __WEBPACK_IMPORTED_MODULE_16__settings_settings_module__["a" /* SettingsModule */],
            __WEBPACK_IMPORTED_MODULE_7__core_router_module__["a" /* MainRouterModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__mail_exists_guard_service__["a" /* MailExistsGuardService */]]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(11);
/* unused harmony export diagonalSlide */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expandingLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return backInLine; });

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

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_layout_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registered_mails_registered_mails_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_effects__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_mail_registry_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_components_material_components_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mail_provider_mail_provider_component__ = __webpack_require__(220);
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
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
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
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
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
            this.router.navigate([this.data.routerLink]);
        }
        else {
            this.logoExpansions += 1;
        }
    };
    MailProviderComponent.prototype.pickIcon = function (type) {
        var result = '';
        switch (type) {
            case 'gmail':
                result = 'assets/mail-providers/gmail.svg';
                break;
            case 'yahoo':
                result = 'assets/mail-providers/yahoo.svg';
                break;
            case 'outlook':
                result = 'assets/mail-providers/outlook.svg';
                break;
            default:
                result = 'assets/mail-providers/default.svg';
        }
        return result;
    };
    return MailProviderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata__["MailMetadata"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_models_MailMetadata__["MailMetadata"]) === "function" && _a || Object)
], MailProviderComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", String)
], MailProviderComponent.prototype, "backInLineAnimate", void 0);
MailProviderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-mail-provider',
        template: __webpack_require__(330),
        styles: [__webpack_require__(309)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ChangeDetectionStrategy */].OnPush,
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* expandingLogo */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations__["b" /* backInLine */])()
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], MailProviderComponent);

var _a, _b;
//# sourceMappingURL=mail-provider.component.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fab_toggle__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_animations__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(27);
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
        }
        else {
            this.fabExpansions += 1;
        }
    };
    RegisteredMailsComponent.prototype.shouldAnimateBack = function (data) {
        if (this.previousURL.includes(data.routerLink.slice(0, data.routerLink.lastIndexOf('/')))) {
            return 'backInLine';
        }
        else {
            return 'normal';
        }
    };
    return RegisteredMailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Array)
], RegisteredMailsComponent.prototype, "mails", void 0);
RegisteredMailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-registered-mails',
        template: __webpack_require__(331),
        styles: [__webpack_require__(310)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ChangeDetectionStrategy */].OnPush,
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fab_toggle__["a" /* fabToggle */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_animations__["a" /* expandingFAB */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], RegisteredMailsComponent);

var _a, _b;
//# sourceMappingURL=registered-mails.component.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRegisteredMails; });

var getRegisteredMails = function () {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* GET_REGISTERED_MAILS */]
    };
};
//# sourceMappingURL=actions.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__["a" /* MailRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__["a" /* MailRegistryService */]) === "function" && _b || Object])
], DashboardEffects);

var _a, _b;
//# sourceMappingURL=effects.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState__ = __webpack_require__(124);


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
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectRegisteredMails2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectRegisteredMails; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var selectRegisteredMails2 = function (state) {
    var registeredMails = state.items.map(function (elem) {
        return __assign({}, elem, { routerLink: "/mails/" + elem.internalName + "/inbox" });
    });
    return registeredMails;
};
var selectRegisteredMails = function (store) {
    return store
        .select('dashboard')
        .map(function (state) {
        var registeredMails = state.items.map(function (elem) {
            return __assign({}, elem, { routerLink: "/mails/" + elem.internalName + "/inbox" });
        });
        return registeredMails;
    });
};
//# sourceMappingURL=selectors.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(332),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this.backQuery = {};
        this.menuOpened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "backEnabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "sidebarActive", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "backURL", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "backQuery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "showControls", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "searchURL", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "settingsURL", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "menuOpened", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(333),
        styles: [__webpack_require__(312)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(334),
        styles: [__webpack_require__(313)]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResizableDirective = (function () {
    function ResizableDirective(el) {
        el.nativeElement.addEventListener('change', function (event) {
            event.target.style.height = el.nativeElement.scrollHeight + 'px';
            event.target.scrollTop = el.nativeElement.scrollHeight;
        });
    }
    return ResizableDirective;
}());
ResizableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Directive */])({
        selector: '[appResizable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ElementRef */]) === "function" && _a || Object])
], ResizableDirective);

var _a;
//# sourceMappingURL=resizable.directive.js.map

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidePanelComponent = (function () {
    function SidePanelComponent() {
    }
    SidePanelComponent.prototype.ngOnInit = function () {
    };
    return SidePanelComponent;
}());
SidePanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-side-panel',
        template: __webpack_require__(336),
        styles: [__webpack_require__(315)]
    }),
    __metadata("design:paramtypes", [])
], SidePanelComponent);

//# sourceMappingURL=side-panel.component.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabNavComponent = (function () {
    function TabNavComponent(router, store) {
        this.router = router;
        this.store = store;
    }
    TabNavComponent.prototype.composeInnerLink = function (box) {
        var base = this.router.url.slice(0, this.router.url.lastIndexOf('/'));
        var result = base + "/" + box;
        return result;
    };
    TabNavComponent.prototype.navigateTo = function (box) {
        var url = this.composeInnerLink(box);
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__["d" /* replace */])([url]));
    };
    TabNavComponent.prototype.routerLinkActive = function (link) {
        return link.toLowerCase() === (this.activeLink
            ? this.activeLink.toLowerCase()
            : '');
    };
    return TabNavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", String)
], TabNavComponent.prototype, "activeLink", void 0);
TabNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-tab-nav',
        template: __webpack_require__(337),
        styles: [__webpack_require__(316)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], TabNavComponent);

var _a, _b;
//# sourceMappingURL=tab-nav.component.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_composer_mail_composer_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_components_material_components_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComposerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MailComposerModule = (function () {
    function MailComposerModule() {
    }
    return MailComposerModule;
}());
MailComposerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__routing__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_components_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__["a" /* LayoutModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__mail_composer_mail_composer_component__["a" /* MailComposerComponent */]]
    })
], MailComposerModule);

//# sourceMappingURL=mail-composer.module.js.map

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_composer_mail_composer_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_mail_exists_guard_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    {
        path: 'mails/:name/draft/new',
        component: __WEBPACK_IMPORTED_MODULE_0__mail_composer_mail_composer_component__["a" /* MailComposerComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_1__core_mail_exists_guard_service__["a" /* MailExistsGuardService */]
        ]
    }
];
//# sourceMappingURL=routing.js.map

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentHeaderComponent = (function () {
    function ContentHeaderComponent() {
        this.animationState = 'normal';
        this.animationDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]();
    }
    return ContentHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", String)
], ContentHeaderComponent.prototype, "sender", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", String)
], ContentHeaderComponent.prototype, "contentPreview", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", String)
], ContentHeaderComponent.prototype, "animationState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]) === "function" && _a || Object)
], ContentHeaderComponent.prototype, "animationDone", void 0);
ContentHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-content-header',
        template: __webpack_require__(339),
        styles: [__webpack_require__(318)],
        animations: []
    }),
    __metadata("design:paramtypes", [])
], ContentHeaderComponent);

var _a;
//# sourceMappingURL=content-header.component.js.map

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__(44);
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
    MailItemsListComponent.prototype.getRouterLink = function (mailId) {
        return "/mails/" + this.mailbox + "/" + this.category + "/" + mailId;
    };
    MailItemsListComponent.prototype.ngOnChanges = function (data) {
        var hasChanges = data.items.currentValue !== data.items.previousValue;
        if (hasChanges) {
            this.receivedItems = 'pending';
        }
    };
    MailItemsListComponent.prototype.onListAnimationDone = function () {
        this.receivedItems = '';
    };
    return MailItemsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Object)
], MailItemsListComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Object)
], MailItemsListComponent.prototype, "mailbox", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Object)
], MailItemsListComponent.prototype, "category", void 0);
MailItemsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-mail-items-list',
        template: __webpack_require__(341),
        styles: [__webpack_require__(320)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_animations__["b" /* listAnimation */])()
        ]
    }),
    __metadata("design:paramtypes", [])
], MailItemsListComponent);

//# sourceMappingURL=mail-items-list.component.js.map

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mailbox_mailbox__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_content_mail_content_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_mail_exists_guard_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });



var routes = [
    {
        path: 'mails/:name/:box',
        component: __WEBPACK_IMPORTED_MODULE_0__mailbox_mailbox__["a" /* MailboxComponent */],
        pathMatch: 'full',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_2__core_mail_exists_guard_service__["a" /* MailExistsGuardService */]
        ]
    }, {
        path: 'mails/:name',
        redirectTo: 'mails/:name/inbox',
        pathMatch: 'full',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_2__core_mail_exists_guard_service__["a" /* MailExistsGuardService */]
        ]
    }, {
        path: 'mails/:name/:box/:mailId',
        component: __WEBPACK_IMPORTED_MODULE_1__mail_content_mail_content_component__["a" /* MailContentComponent */],
        pathMatch: 'full',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_2__core_mail_exists_guard_service__["a" /* MailExistsGuardService */]
        ]
    }
];
//# sourceMappingURL=routing.js.map

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMailContent; });

var getMailContent = function (payload) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* GET_MAIL_CONTENT */],
        payload: payload
    };
};
//# sourceMappingURL=actions.js.map

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__ = __webpack_require__(58);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__["a" /* MailRegistryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_mail_registry_service__["a" /* MailRegistryService */]) === "function" && _b || Object])
], MailInstanceEffects);

var _a, _b;
//# sourceMappingURL=effects.js.map

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState__ = __webpack_require__(130);


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
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_search_component__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    {
        path: 'search/:target',
        component: __WEBPACK_IMPORTED_MODULE_0__search_search_component__["a" /* SearchComponent */],
    }
];
//# sourceMappingURL=routing.js.map

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_components_material_components_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routing__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__material_components_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__routing__["a" /* routes */])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__search_search_component__["a" /* SearchComponent */]]
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_main_settings_main_component__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    {
        path: 'settings/:target',
        component: __WEBPACK_IMPORTED_MODULE_0__settings_main_settings_main_component__["a" /* SettingsMainComponent */],
    }
];
//# sourceMappingURL=routing.js.map

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_main_settings_main_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__routing__["a" /* routes */])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__settings_main_settings_main_component__["a" /* SettingsMainComponent */]]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_PAGE_TITLE; });
var SET_PAGE_TITLE = 'SET_PAGE_TITLE';
//# sourceMappingURL=actionTypes.js.map

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_MainState__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(244);


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
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_state_initialState__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mailbox_state_initialState__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });


var initialState = {
    dashboard: __WEBPACK_IMPORTED_MODULE_0__dashboard_state_initialState__["a" /* DashboardInitialState */],
    opened_mail: __WEBPACK_IMPORTED_MODULE_1__mailbox_state_initialState__["a" /* MailItemsState */],
    router: {
        path: ''
    }
};
//# sourceMappingURL=MainState.js.map

/***/ }),
/* 247 */
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
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host .add-mail-form {\n  width: 80%;\n  margin: 0 auto; }\n\n:host /deep/ .add-mail-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host /deep/ .add-mail-row md-input-container {\n    width: 100%; }\n    :host /deep/ .add-mail-row md-input-container input {\n      width: 100%; }\n  :host /deep/ .add-mail-row md-select {\n    width: 100%; }\n    :host /deep/ .add-mail-row md-select select {\n      width: 100%; }\n\n:host .connect-btn {\n  position: fixed;\n  right: 10px;\n  top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%; }\n  :host /deep/ .app-main-content {\n    margin-top: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host /deep/ .mat-tab-label {\n  width: 50%; }\n\n:host .credentials {\n  width: 80%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 2rem; }\n  :host .credentials /deep/ .credentials-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    :host .credentials /deep/ .credentials-row .mat-input-container {\n      width: 100%; }\n      :host .credentials /deep/ .credentials-row .mat-input-container input {\n        width: 100%; }\n  :host .credentials .button-row {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    :host .credentials .button-row button {\n      width: 100%; }\n\n:host /deep/ .social-buttons button {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: white; }\n  :host /deep/ .social-buttons button md-icon path {\n    fill: white; }\n  :host /deep/ .social-buttons button md-icon svg {\n    vertical-align: initial; }\n\n:host /deep/ .social-buttons .facebook-btn {\n  background: #428bca;\n  border-color: #357ebd; }\n\n:host /deep/ .social-buttons .google-btn {\n  background: #d2322d;\n  border-color: #ac2925; }\n\n:host .separator {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%; }\n\n.main-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n/deep/ md-sidenav-container {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  text-align: left; }\n  :host .mail-provider-icon {\n    width: 1.5em;\n    margin-right: .5rem;\n    padding: 0 .5rem; }\n  :host .open-mail {\n    float: right; }\n  :host .mail-link {\n    width: 100%;\n    height: 100%;\n    text-align: left; }\n  :host .mail-badge::after {\n    top: -4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  padding-bottom: 2rem; }\n  :host .fab-container {\n    padding: 0 1.2rem;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0; }\n    :host .fab-container h1 {\n      padding: 0;\n      margin: 0;\n      font-size: 1.3rem; }\n    :host .fab-container .add-mail {\n      position: fixed;\n      right: 1rem;\n      bottom: 1rem;\n      z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n  :host header {\n    display: block;\n    position: relative;\n    margin-bottom: 1rem; }\n    :host header .header-title {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      font-size: 1em; }\n    :host header .back-button {\n      text-align: left;\n      padding: 0; }\n    :host header .toolbar-button {\n      min-width: -webkit-max-content;\n      min-width: -moz-max-content;\n      min-width: max-content; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host .send-btn {\n  position: fixed;\n  top: 10px;\n  right: 10px; }\n\n:host .send-mail-form {\n  width: 80%;\n  margin: 0 auto; }\n\n:host /deep/ .send-mail-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host /deep/ .send-mail-row md-input-container {\n    width: 100%; }\n    :host /deep/ .send-mail-row md-input-container input {\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  overflow: auto; }\n  :host .mail-items-list {\n    min-height: 100vh;\n    overflow: auto;\n    list-style: none;\n    margin-left: 0;\n    padding-left: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  min-height: 100vh; }\n  :host .mail-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 100vh; }\n    :host .mail-content app-header {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    :host .mail-content .main-section {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    :host .mail-content .nav-section {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3;\n      position: fixed;\n      bottom: 0;\n      background: white;\n      width: 100%; }\n    :host .mail-content .new-mail {\n      position: fixed;\n      bottom: 3.5rem;\n      right: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 324 */,
/* 325 */,
/* 326 */
/***/ (function(module, exports) {

module.exports = "<article class=\"add-mail\">\r\n\r\n    <app-header [title]=\"headerTitle\" [backEnabled]=\"backEnabled\" [backURL]=\"backURL\"></app-header>\r\n\r\n    <button md-raised-button color=\"accent\" [@slideToHeader] class=\"connect-btn\">\r\n        <span>Connect</span>\r\n        <md-icon>chevron_right</md-icon>\r\n    </button>\r\n\r\n    <div class=\"app-main-content\">\r\n\r\n        <form class=\"add-mail-form\">\r\n            <div class=\"add-mail-row\">\r\n                <md-input-container>\r\n                    <input mdInput placeholder=\"Email\" type=\"email\">\r\n                </md-input-container>\r\n            </div>\r\n\r\n            <div class=\"add-mail-row\">\r\n                <md-input-container>\r\n                    <input mdInput placeholder=\"Password\" type=\"password\">\r\n                </md-input-container>\r\n            </div>\r\n\r\n            <div class=\"add-mail-row\">\r\n                <md-select placeholder=\"Protocol\" [(ngModel)]=\"selectedProtocol\" name=\"protocol\">\r\n                    <md-option *ngFor=\"let protocol of protocols\" [value]=\"protocol.value\">\r\n                        {{protocol.viewValue}}\r\n                    </md-option>\r\n                </md-select>\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n</article>"

/***/ }),
/* 327 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports = "<main class=\"login-page\">\n  <md-tab-group>\n\n    <md-tab label=\"Sign in\">\n      <section class=\"login-credentials credentials\">\n\n        <div class=\"social-buttons\">\n          <button md-raised-button class=\"facebook-btn\">\n            <md-icon svgIcon=\"facebook-logo\" class=\"facebook-logo\"></md-icon>\n            Sign in with Facebook\n          </button>\n\n          <button md-raised-button class=\"google-btn\">\n            <md-icon svgIcon=\"google-logo\" class=\"google-logo\"></md-icon>\n            Sign in with Googe\n          </button>\n        </div>\n\n        <div class=\"separator\">\n          OR\n        </div>\n\n        <div class=\"credentials-row\">\n          <md-input-container>\n            <input mdInput placeholder=\"Email\" type=\"email\">\n          </md-input-container>\n        </div>\n\n        <div class=\"credentials-row\">\n          <md-input-container>\n            <input mdInput placeholder=\"Password\" type=\"password\">\n          </md-input-container>\n        </div>\n\n        <div class=\"button-row\">\n          <button (click)=\"login()\" md-raised-button color=\"primary\">Sign in with email</button>\n        </div>\n\n      </section>\n    </md-tab>\n\n    <md-tab label=\"Sign up\">\n      <section class=\"signup-credentials credentials\">\n\n        <div class=\"social-buttons\">\n          <button md-raised-button class=\"facebook-btn\">\n            <md-icon svgIcon=\"facebook-logo\" class=\"facebook-logo\"></md-icon>\n            Sign up with Facebook\n          </button>\n\n          <button md-raised-button class=\"google-btn\">\n            <md-icon svgIcon=\"google-logo\" class=\"google-logo\"></md-icon>\n            Sign up with Googe\n          </button>\n        </div>\n\n        <div class=\"separator\">\n          OR\n        </div>\n\n        <div class=\"credentials-row\">\n          <md-input-container>\n            <input mdInput placeholder=\"Email\" type=\"email\">\n          </md-input-container>\n        </div>\n\n        <div class=\"credentials-row\">\n          <md-input-container>\n            <input mdInput placeholder=\"Password\" type=\"password\">\n          </md-input-container>\n        </div>\n\n        <div class=\"button-row\">\n          <button (click)=\"login()\" md-raised-button color=\"primary\">Sign up with email</button>\n        </div>\n\n      </section>\n    </md-tab>\n\n  </md-tab-group>\n</main>"

/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-layout--fixed-header dashboard\">\r\n    <md-sidenav-container (backdropClick)=\"handleMenuClose()\">\r\n        <md-sidenav align=\"start\" mode=\"push\" [opened]=\"sidebarOpened\">\r\n            <div>pesho</div>\r\n            <div>gosho</div>\r\n        </md-sidenav>\r\n        <section class=\"main-panel\">\r\n            <app-header [title]=\"headerTitle\" [showControls]=\"showHeaderControls\" searchURL=\"/search/all\"\r\n                        settingsURL=\"/settings/global\" [sidebarActive]=\"true\" (menuOpened)=\"handleMenuOpen()\"></app-header>\r\n            <app-registered-mails [mails]=\"registeredMails | async\" class=\"app-main-content\"></app-registered-mails>\r\n        </section>\r\n    </md-sidenav-container>\r\n</div>\r\n"

/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = "<a md-button class=\"mail-link\" (click)=\"onMailClick()\">\r\n  <div class=\"mdl-list__item-primary-content\">\r\n    <img class=\"mail-provider-icon\" [src]=\"pickIcon(data.type)\" [alt]=\"data.type\" [title]=\"data.type\"\r\n         [@logoExpand]=\"mailLogoState\" (@logoExpand.done)=\"navigateToMailContents()\" [@backInLine]=\"backInLineAnimate\"/>\r\n    <span>{{data.displayName}}</span>\r\n    <span class=\"mdl-badge mail-badge\" [attr.data-badge]=\"data.newMails\"></span>\r\n    <md-icon class=\"arrow-right\">chevron_right</md-icon>\r\n  </div>\r\n</a>"

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = "<main class=\"registered-mails\">\r\n\r\n    <div class=\"fab-container\">\r\n        <div class=\"add-mail\" (click)=\"expandFAB()\" [@fabToggle]=\"fabState\">\r\n            <a md-fab>\r\n                <i class=\"material-icons\">add</i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <md-list class=\"mails-list\">\r\n        <md-list-item *ngFor=\"let mail of mails\" class=\"md-list-item\">\r\n            <app-mail-provider [data]=\"mail\" [backInLineAnimate]=\"shouldAnimateBack(mail)\"></app-mail-provider>\r\n        </md-list-item>\r\n    </md-list>\r\n\r\n    <div [@expand]=\"fabState\" (@expand.done)=\"navigateTo('/add-mail')\"></div>\r\n</main>"

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = "<footer class=\"mdl-mega-footer\">\r\n  footer works!\r\n</footer>\r\n"

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports = "<header>\r\n\t<md-toolbar color=\"primary\" class=\"header-row-1 header-wrapper\" role=\"toolbar\">\r\n\r\n\t\t    <a md-button *ngIf=\"sidebarActive\" role=\"button\" aria-label=\"Open sidebar\" (click)=\"menuOpened.emit()\">\r\n                <md-icon>menu</md-icon>\r\n            </a>\r\n\t\t\t<a md-button [routerLink]=\"backURL\" [queryParams]=\"backQuery\"\r\n\t\t\t   *ngIf=\"backEnabled\" class=\"back-button\" aria-label=\"Back button\" role=\"button\">\r\n\t\t\t\t<md-icon >arrow_back</md-icon>\r\n\t\t\t</a>\r\n\t\t    \r\n\t\t\t<h1 class=\"header-title\" role=\"heading\">{{title}}</h1>\r\n\t\t\t<div class=\"header-controls\" *ngIf=\"showControls\" role=\"group\">\r\n\r\n                <a *ngIf=\"searchURL\" md-button [routerLink]=\"searchURL\" ngClass=\"toolbar-button\"\r\n                aria-label=\"Search button\" role=\"button\">\r\n                    <md-icon>search</md-icon>\r\n                </a>\r\n\r\n                <a md-button *ngIf=\"settingsURL\" [routerLink]=\"settingsURL\" ngClass=\"toolbar-button\"\r\n                aria-label=\"Settings button\" role=\"button\">\r\n                    <md-icon>settings</md-icon>\r\n                </a>\r\n\r\n\t\t\t</div>\r\n\t</md-toolbar>\r\n</header>"

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports = "<main>\r\n</main>"

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = "<p>\n  <a [routerLink]=\"['/']\">Back</a>\n\n</p>\n"

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports = "<md-sidenav align=\"start\" mode=\"push\" opened=\"true\">\n    <div>pesho</div>\n    <div>gosho</div>\n</md-sidenav>\n"

/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports = "<nav md-tab-nav-bar class=\"nav-section\">\n    <a md-tab-link (click)=\"navigateTo('inbox')\" [active]=\"routerLinkActive('inbox')\"\n       role=\"button\" aria-label=\"Navigate to inbox\">\n        Inbox\n    </a>\n    <a md-tab-link (click)=\"navigateTo('outbox')\" [active]=\"routerLinkActive('outbox')\"\n       role=\"button\" aria-label=\"Navigate to outbox\"\n    >\n        Outbox\n    </a>\n    <a md-tab-link (click)=\"navigateTo('sent')\" [active]=\"routerLinkActive('sent')\"\n       role=\"button\" aria-label=\"Navigate to all sent mails\">\n        Sent\n    </a>\n    <a md-tab-link (click)=\"navigateTo('draft')\" [active]=\"routerLinkActive('draft')\"\n       role=\"button\" aria-label=\"Navigate to draft mails\">\n        Draft\n    </a>\n</nav>\n"

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports = "<article>\n    <app-header [title]=\"headerTitle\" [backEnabled]=\"backEnabled\" [backURL]=\"backURL\"></app-header>\n\n    <button md-raised-button color=\"accent\" class=\"send-btn\" [@slideToHeader]>\n        <md-icon>send</md-icon>\n        <span>Send it</span>\n    </button>\n\n    <div class=\"app-main-content\">\n        <form class=\"send-mail-form\">\n            <div class=\"send-mail-row\">\n                <md-input-container>\n                    <input mdInput placeholder=\"From\" type=\"text\">\n                </md-input-container>\n            </div>\n\n            <div class=\"send-mail-row\">\n                <md-input-container>\n                    <input mdInput placeholder=\"To\" type=\"text\">\n                </md-input-container>\n            </div>\n\n            <div class=\"send-mail-row\">\n                <md-input-container>\n                    <input mdInput placeholder=\"Subject\" type=\"text\">\n                </md-input-container>\n            </div>\n\n            <div class=\"send-mail-row\">\n                <md-input-container>\n                    <textarea appResizable mdInput placeholder=\"Content\"></textarea>\n                </md-input-container>\n            </div>\n\n        </form>\n    </div>\n</article>\n"

/***/ }),
/* 339 */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated-list-item mail-content-header\">\n  <h4 md-line>{{sender}}</h4>\n  <p md-line> {{contentPreview}} </p>\n  <div class=\"faux-content\"></div>\n</div>\n"

/***/ }),
/* 340 */
/***/ (function(module, exports) {

module.exports = "<p>\n  mail-content works!\n</p>\n"

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports = "<ul\n        *ngIf=\"items.length > 0\"\n        [@listAnimation]=\"receivedItems\"\n        (@listAnimation.done)=\"onListAnimationDone()\"\n        class=\"mail-items-list\"\n>\n    <li *ngFor=\"let item of items; let i = index\">\n\n        <app-content-header\n                class=\"animated-list-item\"\n                [sender]=\"item.sender\"\n                [contentPreview]=\"item.content\"\n                [routerLink]=\"getRouterLink(item.sender)\"\n        >\n        </app-content-header>\n    </li>\n</ul>\n\n<p *ngIf=\"items.length < 1\">\n    No items to display\n</p>\n"

/***/ }),
/* 342 */
/***/ (function(module, exports) {

module.exports = "<article class=\"mail-content\">\r\n    <app-header [title]=\"headerTitle\" [backEnabled]=\"backEnabled\" [showControls]=\"showHeaderControls\"\r\n                [backURL]=\"backURL\"></app-header>\r\n\r\n    <section class=\"main-section app-main-content\" role=\"main\">\r\n        <app-mail-items-list [items]=\"items\" [mailbox]=\"headerTitle\" [category]=\"activeLink\"></app-mail-items-list>\r\n        <div>\r\n            <a class=\"new-mail\" md-fab [@fabToggle] (click)=\"expandFAB()\" role=\"button\" aria-label=\"Navigate to mail composer\">\r\n                <i class=\"material-icons\">edit</i>\r\n            </a>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"nav-section\" role=\"tabpanel\">\r\n        <app-tab-nav [activeLink]=\"activeLink\"></app-tab-nav>\r\n    </section>\r\n\r\n    <div [@expand]=\"fabState\" (@expand.done)=\"navigateToComposer()\" aria-hidden=\"true\"></div>\r\n\r\n</article>"

/***/ }),
/* 343 */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),
/* 344 */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings-main works!\n</p>\n"

/***/ }),
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);


/***/ })
]),[393]);
//# sourceMappingURL=main.bundle.js.map