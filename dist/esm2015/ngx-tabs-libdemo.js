import { Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabsService {
    constructor() {
    }
    /**
     * @return {?}
     */
    signIn() {
        console.log('test service');
    }
}
TabsService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
TabsService.ERR_NOT_LOGGED_IN = 'Not logged in';
TabsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TabsService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxTabsLibModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxTabsLibModule,
            providers: [TabsService]
        };
    }
}
NgxTabsLibModule.decorators = [
    { type: NgModule, args: [{},] },
];
/** @nocollapse */
NgxTabsLibModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxTabsLibModule, TabsService };
//# sourceMappingURL=ngx-tabs-libdemo.js.map
