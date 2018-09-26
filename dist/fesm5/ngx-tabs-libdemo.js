import { Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsService = /** @class */ (function () {
    function TabsService() {
    }
    /**
     * @return {?}
     */
    TabsService.prototype.signIn = /**
     * @return {?}
     */
    function () {
        console.log('test service');
    };
    TabsService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
    TabsService.ERR_NOT_LOGGED_IN = 'Not logged in';
    TabsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TabsService.ctorParameters = function () { return []; };
    return TabsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxTabsLibModule = /** @class */ (function () {
    function NgxTabsLibModule() {
    }
    /**
     * @return {?}
     */
    NgxTabsLibModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxTabsLibModule,
            providers: [TabsService]
        };
    };
    NgxTabsLibModule.decorators = [
        { type: NgModule, args: [{},] },
    ];
    /** @nocollapse */
    NgxTabsLibModule.ctorParameters = function () { return []; };
    return NgxTabsLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxTabsLibModule, TabsService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYnMtbGliZGVtby5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRhYnMtbGliZGVtby9zcmMvdGFicy5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdGFicy1saWJkZW1vL3NyYy9uZ3gtdGFicy1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYnNTZXJ2aWNlIHtcblxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBFUlJfTE9HSU5fUFJPVklERVJfTk9UX0ZPVU5EID0gJ0xvZ2luIHByb3ZpZGVyIG5vdCBmb3VuZCc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEVSUl9OT1RfTE9HR0VEX0lOID0gJ05vdCBsb2dnZWQgaW4nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgc2lnbkluKCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0IHNlcnZpY2UnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFic1NlcnZpY2UgfSBmcm9tICcuL3RhYnMuc2VydmljZSc7XG5ATmdNb2R1bGUoe1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hUYWJzTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hUYWJzTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbVGFic1NlcnZpY2VdXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBUUU7S0FDQzs7OztJQUVELDRCQUFNOzs7SUFBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDN0I7K0NBUnNELDBCQUEwQjtvQ0FDckMsZUFBZTs7Z0JBSjVELFVBQVU7Ozs7c0JBRlg7Ozs7Ozs7QUNBQTs7Ozs7O0lBS1Msd0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQ3pCLENBQUE7S0FDRjs7Z0JBUkYsUUFBUSxTQUFDLEVBQ1Q7Ozs7MkJBSEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==