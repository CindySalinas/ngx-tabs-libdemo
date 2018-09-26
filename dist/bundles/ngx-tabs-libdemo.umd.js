(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-tabs-libdemo', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-tabs-libdemo'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabsService = (function () {
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        TabsService.ctorParameters = function () { return []; };
        return TabsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxTabsLibModule = (function () {
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
            { type: core.NgModule, args: [{},] },
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

    exports.NgxTabsLibModule = NgxTabsLibModule;
    exports.TabsService = TabsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYnMtbGliZGVtby51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC10YWJzLWxpYmRlbW8vc3JjL3RhYnMuc2VydmljZS50cyIsIm5nOi8vbmd4LXRhYnMtbGliZGVtby9zcmMvbmd4LXRhYnMtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUYWJzU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRVJSX0xPR0lOX1BST1ZJREVSX05PVF9GT1VORCA9ICdMb2dpbiBwcm92aWRlciBub3QgZm91bmQnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBFUlJfTk9UX0xPR0dFRF9JTiA9ICdOb3QgbG9nZ2VkIGluJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHNpZ25JbigpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCBzZXJ2aWNlJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYnNTZXJ2aWNlIH0gZnJvbSAnLi90YWJzLnNlcnZpY2UnO1xuQE5nTW9kdWxlKHtcbn0pXG5leHBvcnQgY2xhc3MgTmd4VGFic0xpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4VGFic0xpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1RhYnNTZXJ2aWNlXVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVFFO1NBQ0M7Ozs7UUFFRCw0QkFBTTs7O1lBQU47Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUM3QjttREFSc0QsMEJBQTBCO3dDQUNyQyxlQUFlOztvQkFKNURBLGVBQVU7Ozs7MEJBRlg7Ozs7Ozs7QUNBQTs7Ozs7O1FBS1Msd0JBQU87OztZQUFkO2dCQUNFLE9BQU87b0JBQ0wsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2lCQUN6QixDQUFBO2FBQ0Y7O29CQVJGQyxhQUFRLFNBQUMsRUFDVDs7OzsrQkFIRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9