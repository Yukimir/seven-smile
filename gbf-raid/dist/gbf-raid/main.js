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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-raid-content></app-raid-content>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gbf-raid';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _raid_content_raid_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raid-content/raid-content.component */ "./src/app/raid-content/raid-content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _raid_content_raid_content_component__WEBPACK_IMPORTED_MODULE_6__["RaidContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/granblue.service.ts":
/*!*************************************!*\
  !*** ./src/app/granblue.service.ts ***!
  \*************************************/
/*! exports provided: GranblueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GranblueService", function() { return GranblueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GranblueService = /** @class */ (function () {
    function GranblueService() {
        var _this = this;
        this.tracking = '';
        this.socket = io('http://player.aigis.me:8800');
        this.socket.on('raid-info', function (msg) {
            _this.callback(msg);
        });
    }
    GranblueService.prototype.track = function (name, callback) {
        if (this.tracking !== '') {
            this.untrack(this.tracking);
        }
        this.socket.emit('track', name);
        this.tracking = name;
        this.callback = callback;
    };
    GranblueService.prototype.untrack = function (name) {
        this.socket.emit('untrack', name);
        this.tracking = '';
    };
    GranblueService.prototype.joinRaid = function (id, callback) {
        if (pluginHelper) {
            pluginHelper.sendMessage({
                type: 'joinRaid',
                data: id
            }, function (msg) {
                if (callback) {
                    callback(msg);
                }
            });
        }
    };
    GranblueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GranblueService);
    return GranblueService;
}());



/***/ }),

/***/ "./src/app/raid-content/raid-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/raid-content/raid-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar {\r\n  display: flex;\r\n  padding-top: 10px;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.raid-name {\r\n  margin-right: 15px;\r\n}\r\n\r\n.content {\r\n  margin: 20px;\r\n}\r\n\r\n.bar .left {\r\n  display: flex;\r\n}\r\n\r\ni {\r\n  line-height: inherit;\r\n}\r\n\r\n.ant-cascader-menu {\r\n  height: 450px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/raid-content/raid-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/raid-content/raid-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bar\">\r\n  <div class=\"left\">\r\n    <nz-cascader [nzColumnClassName]=\"'column'\" [nzShowInput]=\"false\" [nzOptions]=\"nzOptions\" (nzSelectionChange)=\"onSelectionChange($event)\"\r\n      [nzExpandTrigger]=\"'hover'\">\r\n      <a href=\"javascript: void(0)\">选择监控对象</a>\r\n    </nz-cascader>\r\n    <div class=\"raid-name\">{{selectedRaid}}</div>\r\n  </div>\r\n\r\n  <i class=\"anticon anticon-close\" (click)=\"clearSelect()\"></i>\r\n</div>\r\n\r\n<div class=\"content\">\r\n  <nz-list [nzDataSource]=\"raidList\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'vertical'\">\r\n    <ng-template #item let-raid>\r\n      <nz-list-item [nzContent]=\"raid.Message\">\r\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"raid.Name\">\r\n          <ng-template #nzTitle><a (click)=\"selectRaid(raid)\">{{raid.ID}}</a></ng-template>\r\n        </nz-list-item-meta>\r\n      </nz-list-item>\r\n    </ng-template>\r\n  </nz-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/raid-content/raid-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/raid-content/raid-content.component.ts ***!
  \********************************************************/
/*! exports provided: RaidContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaidContentComponent", function() { return RaidContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _granblue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../granblue.service */ "./src/app/granblue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var options = [
    {
        value: '1.0',
        label: ' 1.0 方阵',
        children: [
            {
                value: 'Lv70 コロッサス・マグナ',
                label: '高达（火）',
                isLeaf: true
            }, {
                value: 'Lv60 ユグドラシル・マグナ',
                label: '鱼骨鱼骨（土）',
                isLeaf: true
            }, {
                value: 'Lv75 セレスト・マグナ',
                label: '瑟雷斯特（暗）',
                isLeaf: true
            }, {
                value: 'Lv75 シュヴァリエ・マグナ',
                label: '修瓦利耶（光）',
                isLeaf: true
            }, {
                value: 'Lv60 リヴァイアサン・マグナ',
                label: '利维坦（水）',
                isLeaf: true
            }, {
                value: 'Lv50 ティアマト・マグナ＝エア',
                label: '提亚马特（风)',
                isLeaf: true
            }
        ]
    },
    {
        value: '1.0 HL',
        label: '【HL】1.0 方阵',
        children: [
            {
                value: 'Lv100 コロッサス・マグナ',
                label: '高达（火）',
                isLeaf: true
            }, {
                value: 'Lv100 ユグドラシル・マグナ',
                label: '鱼骨鱼骨（土）',
                isLeaf: true
            }, {
                value: 'Lv100 セレスト・マグナ',
                label: '瑟雷斯特（暗）',
                isLeaf: true
            }, {
                value: 'Lv100 シュヴァリエ・マグナ',
                label: '修瓦利耶（光）',
                isLeaf: true
            }, {
                value: 'Lv100 リヴァイアサン・マグナ',
                label: '利维坦（水）',
                isLeaf: true
            }, {
                value: 'Lv100 ティアマト・マグナ＝エア',
                label: '提亚马特（风)',
                isLeaf: true
            }
        ]
    },
    {
        value: 'zoe',
        label: '邂逅，调停之翼',
        children: [
            {
                value: 'Lv100 フラム＝グラス',
                label: '双子（火）',
                isLeaf: true
            }, {
                value: 'Lv100 メドゥーサ',
                label: '美杜莎（土）',
                isLeaf: true
            }, {
                value: 'Lv100 Dエンジェル・オリヴィエ',
                label: 'D天（暗）',
                isLeaf: true
            }, {
                value: 'Lv100 アポロン',
                label: '阿波罗（光）',
                isLeaf: true
            }, {
                value: 'Lv100 マキュラ・マリウス',
                label: '冰皇（水）',
                isLeaf: true
            }, {
                value: 'Lv100 ナタク',
                label: '哪吒（风)',
                isLeaf: true
            }
        ]
    },
    {
        value: 'HL zoe',
        label: '【HL】邂逅·调停之翼',
        children: [
            {
                value: 'Lv120 フラム＝グラス',
                label: '双子（火）',
                isLeaf: true
            }, {
                value: 'Lv120 メドゥーサ',
                label: '美杜莎（土）',
                isLeaf: true
            }, {
                value: 'Lv120 Dエンジェル・オリヴィエ',
                label: 'D天（暗）',
                isLeaf: true
            }, {
                value: 'Lv120 アポロン',
                label: '阿波罗（光）',
                isLeaf: true
            }, {
                value: 'Lv120 マキュラ・マリウス',
                label: '冰皇（水）',
                isLeaf: true
            }, {
                value: 'Lv120 ナタク',
                label: '哪吒（风)',
                isLeaf: true
            }
        ]
    },
    {
        value: 'UB',
        label: '神击·究极之龙',
        children: [
            {
                value: 'Lv100 アテナ',
                label: '雅典娜（火）',
                isLeaf: true
            }, {
                value: 'Lv100 バアル',
                label: '巴尔（土）',
                isLeaf: true
            }, {
                value: 'Lv100 リッチ',
                label: '巫妖（暗）',
                isLeaf: true
            }, {
                value: 'Lv100 オーディン',
                label: '奥丁（光）',
                isLeaf: true
            }, {
                value: 'Lv100 グラニ',
                label: '古拉尼（水）',
                isLeaf: true
            }, {
                value: 'Lv100 ガルーダ',
                label: '迦楼罗（风)',
                isLeaf: true
            }
        ]
    },
    {
        value: 'bigHorse',
        label: '大马',
        children: [
            {
                value: 'Lv120 プロメテウス',
                label: '火',
                isLeaf: true
            }, {
                value: 'Lv120 ギルガメッシュ',
                label: '土',
                isLeaf: true
            }, {
                value: 'Lv120 アヌビス',
                label: '暗',
                isLeaf: true
            }, {
                value: 'Lv120 ヘクトル',
                label: '光',
                isLeaf: true
            }, {
                value: 'Lv120 カー・オン',
                label: '水',
                isLeaf: true
            }, {
                value: 'Lv120 バイヴカハ',
                label: '风',
                isLeaf: true
            }
        ]
    },
    {
        value: '2.0 ',
        label: '2.0 方阵',
        children: [
            {
                value: 'Lv120 シヴァ',
                label: '湿婆（火）',
                isLeaf: true
            }, {
                value: 'Lv120 ゴッドガード・ブローディア',
                label: '神盾（土）',
                isLeaf: true
            }, {
                value: 'Lv120 アバター',
                label: '化身（暗）',
                isLeaf: true
            }, {
                value: 'Lv120 メタトロン',
                label: '梅塔特隆（光）',
                isLeaf: true
            }, {
                value: 'Lv120 エウロペ',
                label: '欧罗巴（水）',
                isLeaf: true
            }, {
                value: 'Lv120 グリームニル',
                label: '军神（风）',
                isLeaf: true
            }
        ]
    },
    {
        value: 'tenshi',
        label: '天司',
        children: [
            {
                value: 'Lv100 ミカエル',
                label: '米迦勒（火）',
                isLeaf: true
            }, {
                value: 'Lv100 ウリエル',
                label: '乌列（土）',
                isLeaf: true
            }, {
                value: 'Lv100 ガブリエル',
                label: '加百列（水）',
                isLeaf: true
            }, {
                value: 'Lv100 ラファエル',
                label: '拉斐尔（风）',
                isLeaf: true
            }
        ]
    }, {
        value: 'PT B',
        label: '原型巴哈姆特',
        children: [
            {
                value: 'Lv100 プロトバハムート',
                label: '普通难度',
                isLeaf: true
            }, {
                value: 'Lv150 プロトバハムート',
                label: 'HL难度',
                isLeaf: true
            }
        ]
    }, {
        value: 'U B',
        label: '究极巴哈姆特',
        children: [
            {
                value: 'Lv150 アルティメットバハムート',
                label: '普通难度',
                isLeaf: true
            }, {
                value: 'Lv200 アルティメットバハムート',
                label: 'HL难度',
                isLeaf: true
            }
        ]
    }, {
        value: 'Lv100 ジ・オーダー・グランデ',
        label: '秩序大公',
        isLeaf: true
    }, {
        value: 'Lv110 ローズクイーン',
        label: '女高中生',
        isLeaf: true
    }, {
        value: 'Lv100 黒麒麟',
        label: '黑麒麟',
        isLeaf: true
    }, {
        value: 'Lv100 黄龍',
        label: '黄龙',
        isLeaf: true
    }
];
var RaidContentComponent = /** @class */ (function () {
    function RaidContentComponent(granblueService, message) {
        this.granblueService = granblueService;
        this.message = message;
        this.selectedRaid = '';
        this.nzOptions = options;
        this.raidList = [];
    }
    RaidContentComponent.prototype.ngOnInit = function () {
    };
    RaidContentComponent.prototype.onSelectionChange = function (selectedOptions) {
        var _this = this;
        var selected = selectedOptions.pop();
        this.selectedRaid = selected.value;
        this.raidList = [];
        this.granblueService.track(this.selectedRaid, function (msg) {
            _this.raidList = [msg].concat(_this.raidList);
            _this.raidList = _this.raidList.slice(0, 20);
        });
    };
    RaidContentComponent.prototype.selectRaid = function (raid, index) {
        var _this = this;
        this.granblueService.joinRaid(raid.ID, function (msg) {
            console.log(msg);
            if (msg.battle_point_check === false) {
                _this.message.error('加入副本失败【BP不足】');
            }
            if (msg.popup && msg.popup.body) {
                _this.message.error("\u52A0\u5165\u526F\u672C\u5931\u8D25\u3010" + msg.popup.body + "\u3011");
            }
        });
    };
    RaidContentComponent.prototype.clearSelect = function () {
        if (this.selectedRaid) {
            this.granblueService.untrack(this.selectedRaid);
            this.selectedRaid = '';
            this.raidList = [];
        }
    };
    RaidContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-raid-content',
            template: __webpack_require__(/*! ./raid-content.component.html */ "./src/app/raid-content/raid-content.component.html"),
            styles: [__webpack_require__(/*! ./raid-content.component.css */ "./src/app/raid-content/raid-content.component.css")]
        }),
        __metadata("design:paramtypes", [_granblue_service__WEBPACK_IMPORTED_MODULE_2__["GranblueService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], RaidContentComponent);
    return RaidContentComponent;
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
window['startApp'] = function (pluginHelper) {
    window['pluginHelper'] = pluginHelper;
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.log(err); });
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luoda\Documents\GBF\GBFHost\gbf-raid\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map