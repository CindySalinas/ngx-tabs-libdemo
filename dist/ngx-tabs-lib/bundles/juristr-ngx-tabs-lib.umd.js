(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@juristr/ngx-tabs-lib', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.juristr = global.juristr || {}, global.juristr['ngx-tabs-lib'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    return TabComponent;
}());
TabComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-tab',
                styles: [
                    "\n    .pane{\n      padding: 1em;\n    }\n  "
                ],
                template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
TabComponent.propDecorators = {
    tabTitle: [{ type: core.Input }],
    active: [{ type: core.Input }]
};
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngAfterContentInit = function () {
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.toArray().forEach(function (tab) { return (tab.active = false); });
        tab.active = true;
    };
    return TabsComponent;
}());
TabsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-tabs',
                template: "<ul class=\"nav nav-tabs\">\n    <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n        <a href=\"#\">{{tab.tabTitle}}</a>\n    </li>\n</ul>\n<ng-content></ng-content>",
                styles: [".nav-tabs:after,.nav-tabs:before{-webkit-box-sizing:border-box;box-sizing:border-box}.nav{padding-left:0;margin-bottom:0;list-style:none;height:43px}ol,ul{margin-top:0;margin-bottom:10px}a{color:#337ab7;text-decoration:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav-tabs>li{float:left;margin-bottom:-1px}.nav>li{position:relative;display:block}"]
            },] },
];
TabsComponent.propDecorators = {
    tabs: [{ type: core.ContentChildren, args: [TabComponent,] }]
};
var NgxTabsLibModule = /** @class */ (function () {
    function NgxTabsLibModule() {
    }
    return NgxTabsLibModule;
}());
NgxTabsLibModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [TabsComponent, TabComponent],
                exports: [TabsComponent, TabComponent]
            },] },
];

exports.TabsComponent = TabsComponent;
exports.NgxTabsLibModule = NgxTabsLibModule;
exports.ɵa = TabComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=juristr-ngx-tabs-lib.umd.js.map
