(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ngxTabsLibDemo = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
    }
    TabComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-tab',
                    styles: [
                        "\n    .pane{\n      padding: 1em;\n    }\n  "
                    ],
                    template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    TabComponent.propDecorators = {
        "tabTitle": [{ type: core.Input },],
        "active": [{ type: core.Input },],
    };
    return TabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsComponent = (function () {
    function TabsComponent() {
    }
    // contentChildren are set
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // get all active tabs
        var /** @type {?} */ activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsComponent.prototype.selectTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (tab) { return (tab.active = false); });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    TabsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-tabs',
                    template: "\n    <ul class=\"nav nav-tabs\">\n        <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n            <a href=\"#\">{{tab.tabTitle}}</a>\n        </li>\n    </ul>\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    .nav-tabs:before {\n      box-sizing: border-box;\n    }\n\n    .nav-tabs:after {\n      box-sizing: border-box;\n    }\n\n    .nav {\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n      height: 43px;\n    }\n\n    ol,\n    ul {\n      margin-top: 0;\n      margin-bottom: 10px;\n    }\n\n    a {\n      color: #337ab7;\n      text-decoration: none;\n    }\n\n    .nav-tabs {\n      border-bottom: 1px solid #ddd;\n    }\n\n    .nav-tabs > li.active > a,\n    .nav-tabs > li.active > a:focus,\n    .nav-tabs > li.active > a:hover {\n      color: #555;\n      cursor: default;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n    }\n\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857143;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0;\n    }\n\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px;\n    }\n\n    .nav-tabs > li {\n      float: left;\n      margin-bottom: -1px;\n    }\n    .nav > li {\n      position: relative;\n      display: block;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    TabsComponent.propDecorators = {
        "tabs": [{ type: core.ContentChildren, args: [TabComponent,] },],
    };
    return TabsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [TabsComponent, TabComponent],
                    exports: [TabsComponent, TabComponent]
                },] },
    ];
    return TabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

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

exports.TabComponent = TabComponent;
exports.TabsComponent = TabsComponent;
exports.TabsModule = TabsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
