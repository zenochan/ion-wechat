var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, InjectionToken, NgModule } from '@angular/core';
import { DataService } from "./providers/data.service";
import { Photo } from "./pipes/photo";
import { IonWechatProvidersModule } from "./providers/providers.module";
import { HttpClientModule } from "@angular/common/http";
import { WeuiService } from "./providers/weui.service";
import { Events } from "ionic-angular";
export var UI;
export var Data;
export var IonEvent;
export var CONFIG = new InjectionToken("IonWechatConfig");
var IonWechatModule = /** @class */ (function () {
    function IonWechatModule(ui, data, events, options) {
        IonWechatModule_1.DEBUG = options.debug;
        Photo.BASE_URL = options.imgBaseUrl;
        UI = ui;
        Data = data;
        IonEvent = events;
    }
    IonWechatModule_1 = IonWechatModule;
    /**
     * @see [fuction calls are not supported in decorators](https://github.com/angular/angular-cli/issues/9358)
     * @param {Options} options
     * @returns {ModuleWithProviders}
     */
    IonWechatModule.forRoot = function (options) {
        return {
            ngModule: IonWechatModule_1,
            providers: [{ provide: CONFIG, useValue: options }]
        };
    };
    IonWechatModule.DEBUG = false;
    IonWechatModule = IonWechatModule_1 = __decorate([
        NgModule({
            imports: [
                HttpClientModule,
                IonWechatProvidersModule
            ]
        }),
        __param(3, Inject(CONFIG)),
        __metadata("design:paramtypes", [WeuiService, DataService, Events, Options])
    ], IonWechatModule);
    return IonWechatModule;
    var IonWechatModule_1;
}());
export { IonWechatModule };
var Options = /** @class */ (function () {
    function Options() {
    }
    return Options;
}());
export { Options };
//# sourceMappingURL=ion-wechat.module.js.map