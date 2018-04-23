"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.DA_TEST = new core_1.InjectionToken("IonWechatConfig");
/**
 * 213234
 */
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule_1 = TestModule;
    TestModule.forRoot = function (options) {
        return {
            ngModule: TestModule_1,
        };
    };
    TestModule = TestModule_1 = __decorate([
        core_1.NgModule({
            imports: []
        })
    ], TestModule);
    return TestModule;
    var TestModule_1;
}());
exports.TestModule = TestModule;
//# sourceMappingURL=test.modlue.js.map