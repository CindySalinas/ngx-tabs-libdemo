(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('ngx-tabs-libdemo', ['exports', '@angular/core'], factory) :
	(factory((global['ngx-tabs-libdemo'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var TabsService = (function () {
    function TabsService() {
    }
    TabsService.prototype.signIn = function () {
        console.log('test service');
    };
    return TabsService;
}());
TabsService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
TabsService.ERR_NOT_LOGGED_IN = 'Not logged in';
TabsService.decorators = [
    { type: core.Injectable },
];
TabsService.ctorParameters = function () { return []; };
var NgxTabsLibModule = (function () {
    function NgxTabsLibModule() {
    }
    NgxTabsLibModule.forRoot = function () {
        return {
            ngModule: NgxTabsLibModule,
            providers: [TabsService]
        };
    };
    return NgxTabsLibModule;
}());
NgxTabsLibModule.decorators = [
    { type: core.NgModule, args: [{},] },
];
NgxTabsLibModule.ctorParameters = function () { return []; };

exports.NgxTabsLibModule = NgxTabsLibModule;
exports.TabsService = TabsService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-tabs-libdemo.umd.js.map
