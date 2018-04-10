webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/analysis-details/analysis-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  max-width: 100%;\r\n}\r\n\r\n.item {\r\n  max-width: 150px;\r\n  max-height: 150px;\r\n  margin: 15px;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  height: 50%;\r\n}\r\n\r\na {\r\n  color: #C70039;\r\n  text-decoration: underline;\r\n}\r\n\r\n.read-more {\r\n  color: blue;\r\n  font-style: oblique;\r\n  font-size: 20px;\r\n}\r\n\r\n.related {\r\n  color: #C70039;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n}\r\n\r\nth, td {\r\n  padding: 15px;\r\n  text-align: left;\r\n}\r\n\r\ntable {\r\n  margin: 0 auto;\r\n}\r\n\r\n.small-details {\r\n  font-size: 12px;\r\n  color: grey;\r\n}\r\n\r\n.data {\r\n  height: 100%;\r\n  padding: 15px;\r\n  text-align: center\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/analysis-details/analysis-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n</head>\r\n<body>\r\n<div class=\"data\">\r\n  <div *ngIf=\"showDetails && terroristAttack\" class=\"card\" style=\"border: none;\">\r\n    <h4 class=\"card-title\">Terrorist attack's detailed analysis</h4>\r\n    <h6 class=\"card-subtitle text-muted\">Data is taken at 10.03.2018</h6>\r\n    <div class=\"card-text\" style=\"margin: 15px;\">\r\n      <table>\r\n        <tr *ngIf=\"terroristAttack.country\">\r\n          <th>Country:</th>\r\n          <td>{{terroristAttack.country}}</td>\r\n        </tr>\r\n        <tr *ngIf=\"terroristAttack.date\">\r\n          <th>Date:</th>\r\n          <td>{{terroristAttack.date | date}}</td>\r\n        </tr>\r\n        <tr *ngIf=\"terroristAttack.numSources\">\r\n          <th>Number of sources:</th>\r\n          <td>{{terroristAttack.numSources}}</td>\r\n        </tr>\r\n        <tr>\r\n          <th>Scale:</th>\r\n          <td>{{terroristAttack.scale}}</td>\r\n        </tr>\r\n        <tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <p class=\"related\">Related events:</p>\r\n      </div>\r\n      <div class=\"col\">\r\n        <a class=\"read-more\" href={{terroristAttack.urls}} target=\"_blank\">Read more\r\n          <small>>></small>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"item\" *ngFor=\"let item of richSnippets\">\r\n        <img src={{item.img}}/><br/>\r\n        <a href=\"{{item.url}}\" target=\"_blank\">{{item.title}}</a>\r\n        <p class=\"small-details\">{{item.attack.date | date}} - {{item.attack.countryCode}}</p>\r\n      </div>\r\n      <div *ngIf=\"richSnippets.length==0\">Loading... or not available...</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!showDetails && eventCode\" class=\"card\" style=\"border: none;\">\r\n    <h4 class=\"card-title\">Events by chosen category</h4>\r\n    <div class=\"container\">\r\n      <div class=\"item\" *ngFor=\"let item of richSnippets\">\r\n        <img src={{item.img}}/><br/>\r\n        <button class=\"btn-link\" (click)=\"showEventDetails(item.attack)\">{{item.title}}</button>\r\n        <p class=\"small-details\">{{item.attack.date | date}} - {{item.attack.countryCode}}</p>\r\n      </div>\r\n      <div *ngIf=\"richSnippets.length==0\">Loading... or not available...</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/analysis-details/analysis-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_rich_snippet__ = __webpack_require__("../../../../../src/app/model/rich-snippet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalysisDetailsComponent = /** @class */ (function () {
    function AnalysisDetailsComponent(web, route) {
        this.web = web;
        this.route = route;
        this.showDetails = false;
    }
    AnalysisDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (code) {
            _this.terroristAttack = undefined;
            _this.eventCode = +code['id'];
            _this.showDetails = false;
            _this.web.getTerroristAttacksByCategory(_this.eventCode).subscribe(function (attacks) {
                _this.attacks = attacks;
                _this.createRichSnippetForEachAttack();
            }, function (error2) { return console.log(error2); });
        }, function (error2) { return console.log(error2); });
    };
    AnalysisDetailsComponent.prototype.showEventDetails = function (attack) {
        var _this = this;
        this.eventCode = undefined;
        this.terroristAttack = attack;
        this.showDetails = true;
        // TODO: check if .date and all the others exist... for future: send the attackID only and make this check in back-end
        this.web.getRelatedTerroristAttacks(attack.countryCode, this.terroristAttack.eventCode, this.terroristAttack.date).subscribe(function (attacks) {
            _this.attacks = attacks;
            _this.createRichSnippetForEachAttack();
        }, function (error2) { return console.log(error2); });
    };
    AnalysisDetailsComponent.prototype.createRichSnippetForEachAttack = function () {
        var _this = this;
        this.richSnippets = [];
        var _loop_1 = function (i) {
            this_1.web.getMetaDataFromURL(this_1.attacks[i].urls).subscribe(function (response) {
                _this.createRichSnippet(response, _this.attacks[i]);
            }, function (error2) { return console.log(error2); });
        };
        var this_1 = this;
        for (var i = 0; i < this.attacks.length; i++) {
            _loop_1(i);
        }
    };
    AnalysisDetailsComponent.prototype.createRichSnippet = function (response, attack) {
        if (response.url) {
            var url = response.url.substring(0, 4) !== 'http' ? 'https://' + response.url : response.url;
            var title = response.title != null ? response.title : response.url;
            if (title.split(' ').length > 6) {
                title = title.split(' ').slice(0, 6).join(' ') + '...';
            }
            var image = response.image != null ? response.image : '../../assets/img/logo.png';
            this.richSnippets.push(new __WEBPACK_IMPORTED_MODULE_1__model_rich_snippet__["a" /* RichSnippet */](title, image, url, attack));
        }
    };
    AnalysisDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-analysis-details',
            template: __webpack_require__("../../../../../src/app/analysis-details/analysis-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/analysis-details/analysis-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], AnalysisDetailsComponent);
    return AnalysisDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analysis_details_analysis_details_component__ = __webpack_require__("../../../../../src/app/analysis-details/analysis-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_3__analysis_details_analysis_details_component__["a" /* AnalysisDetailsComponent */] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analysis_details_analysis_details_component__ = __webpack_require__("../../../../../src/app/analysis-details/analysis-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__analysis_details_analysis_details_component__["a" /* AnalysisDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBZa9Zw8uFQUVP7JKQ8zymjB0mkfftJJrk'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #C70039;\r\n}\r\n\r\nh2 {\r\n  color: lightsalmon;\r\n}\r\n\r\nagm-map {\r\n  height: 52.5vh;\r\n}\r\n\r\n#footer {\r\n  height: 46.5vh;\r\n  background: url(\"data:image/png;base64,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\") repeat;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  max-width: 100%;\r\n  overflow: scroll;\r\n}\r\n\r\n.item {\r\n  width: 17vh;\r\n  height: 17vh;\r\n  margin: 2.5vh 5vh;\r\n  border: solid;\r\n}\r\n\r\n.category-title {\r\n  background: rgba(241, 241, 241, .55);\r\n  text-align: center;\r\n  font-weight: bold;\r\n  color: black;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.category-title:hover {\r\n  color: white;\r\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n  border: solid;\r\n}\r\n\r\n.description {\r\n  display: block;\r\n  margin: auto;\r\n  border: 1px dotted gray;\r\n}\r\n\r\n.category-img {\r\n  width: 75px;\r\n  height: 75px;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n</head>\r\n<body>\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-marker *ngFor=\"let attack of yesterdayAttacks\"\r\n              [latitude]=\"attack.latitude\"\r\n              [longitude]=\"attack.longitude\">\r\n    <agm-info-window>\r\n      <div class=\"container-fluid\" style=\"max-width: 150px; align-content: center\">\r\n        <img class=\"category-img\" [src]=\"'../../assets/img/categories/' + attack.eventCode + '.jpg'\">\r\n        <p class=\"description\"><b>Type of event:</b>\r\n          {{eventNames[attack.eventCode]}}</p>\r\n      </div>\r\n    </agm-info-window>\r\n  </agm-marker>\r\n</agm-map>\r\n<div class=\"container-fluid\" id=\"footer\">\r\n  <div class=\"item\" *ngFor=\"let key of keys\"\r\n       [ngStyle]=\"{'background-image': 'url(../../assets/img/categories/' + key + '.jpg)'}\">\r\n    <button class=\"btn-link category-title\" (click)=\"showAnalysisDetails(key)\">{{eventNames[key]}}</button>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(web, router) {
        var _this = this;
        this.web = web;
        this.router = router;
        this.lat = 42.004270;
        this.lng = 21.409602;
        this.initializeEventNames();
        this.web.getTerroristAttacksFromYesterday().subscribe(function (attacks) {
            _this.yesterdayAttacks = attacks;
        });
    }
    HomeComponent.prototype.initializeEventNames = function () {
        var _this = this;
        this.web.getDistinctCategories().subscribe(function (map) {
            _this.eventNames = map;
            _this.keys = Object.keys(_this.eventNames);
        });
    };
    HomeComponent.prototype.showAnalysisDetails = function (eventCode) {
        this.router.navigate(['/category/' + eventCode]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/rich-snippet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichSnippet; });
var RichSnippet = /** @class */ (function () {
    function RichSnippet(title, img, url, attack) {
        this.title = title;
        this.img = img;
        this.url = url;
        this.attack = attack;
    }
    return RichSnippet;
}());



/***/ }),

/***/ "../../../../../src/app/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebService = /** @class */ (function () {
    function WebService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.api = 'http://localhost:8080/terrorist-attacks';
    }
    WebService.prototype.getDistinctCategories = function () {
        return this.http.get(this.api + '/categories');
    };
    WebService.prototype.getTerroristAttacksByCategory = function (eventCode) {
        return this.http.get(this.api + '/' + eventCode);
    };
    WebService.prototype.getRelatedTerroristAttacks = function (countryCode, eventCode, dateAfter) {
        return this.http.get(this.api + '/country/' + countryCode + '/from/' + eventCode + '/date/' + this.datePipe.transform(dateAfter, 'yyyy-MM-dd'));
    };
    WebService.prototype.getMetaDataFromURL = function (url) {
        return this.http.post(this.api + '/metadata', url);
    };
    WebService.prototype.getTerroristAttacksFromYesterday = function () {
        return this.http.get(this.api + '/yesterday');
    };
    WebService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], WebService);
    return WebService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map