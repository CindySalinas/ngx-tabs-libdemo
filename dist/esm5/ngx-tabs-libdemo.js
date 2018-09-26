import { Injectable, NgModule } from '@angular/core';

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
    { type: Injectable },
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
    { type: NgModule, args: [{},] },
];
NgxTabsLibModule.ctorParameters = function () { return []; };

export { NgxTabsLibModule, TabsService };
//# sourceMappingURL=ngx-tabs-libdemo.js.map
