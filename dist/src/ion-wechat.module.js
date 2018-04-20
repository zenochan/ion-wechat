var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { DataService } from "./providers/data.service";
import { Photo } from "./pipes/photo";
import { IonWechatProvidersModule } from "./providers/providers.module";
import { HttpClientModule } from "@angular/common/http";
var IonWechatModule = /** @class */ (function () {
    function IonWechatModule() {
    }
    IonWechatModule_1 = IonWechatModule;
    IonWechatModule.forRoot = function (options) {
        IonWechatModule_1.DEBUG = options.debug;
        Photo.BASE_URL = options.imgBaseUrl;
        DataService.KEY_USER = options.userKey + (options.debug ? "_debug" : "");
        return IonWechatModule_1;
    };
    IonWechatModule.DEBUG = false;
    IonWechatModule = IonWechatModule_1 = __decorate([
        NgModule({
            imports: [
                HttpClientModule,
                IonWechatProvidersModule
            ]
        })
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