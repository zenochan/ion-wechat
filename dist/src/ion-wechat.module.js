"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
exports.CONFIG = new core_1.InjectionToken("IonWechatConfig");
var IonWechatModule = /** @class */ (function () {
    function IonWechatModule() {
    }
    IonWechatModule_1 = IonWechatModule;
    // constructor(ui: WeuiService, data: DataService, events: Events, @Inject(CONFIG) options: Options)
    // {
    //   IonWechatModule.DEBUG = options.debug;
    //   Photo.BASE_URL = options.imgBaseUrl;
    //
    //   UI = ui;
    //   Data = data;
    //   IonEvent = events;
    // }
    /**
     * @see [fuction calls are not supported in decorators](https://github.com/angular/angular-cli/issues/9358)
     * @param {Options} options
     * @returns {ModuleWithProviders}
     */
    IonWechatModule.forRoot = function (options) {
        return {
            ngModule: IonWechatModule_1,
            providers: [
                { provide: exports.CONFIG, useValue: options },
            ]
        };
    };
    IonWechatModule.DEBUG = false;
    IonWechatModule = IonWechatModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                ionic_angular_1.IonicModule
                // HttpClientModule
                // IonWechatProvidersModule
            ]
        })
    ], IonWechatModule);
    return IonWechatModule;
    var IonWechatModule_1;
}());
exports.IonWechatModule = IonWechatModule;
var Options = /** @class */ (function () {
    function Options() {
    }
    return Options;
}());
exports.Options = Options;
//# sourceMappingURL=ion-wechat.module.js.map