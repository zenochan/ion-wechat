var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { WeuiService } from "./weui.service";
import { DataService } from "./data.service";
import { Events } from "ionic-angular";
import { IonicStorageModule } from "@ionic/storage";
import { Photo } from "../pipes/photo";
export var UI;
export var Data;
export var Event;
var IonWechatProvidersModule = /** @class */ (function () {
    function IonWechatProvidersModule(ui, data, events) {
        UI = ui;
        Data = data;
        Event = events;
    }
    IonWechatProvidersModule_1 = IonWechatProvidersModule;
    IonWechatProvidersModule.forRoot = function (options) {
        Photo.BASE_URL = options.imgBaseUrl;
        DataService.KEY_USER = options.userKey;
        return IonWechatProvidersModule_1;
    };
    IonWechatProvidersModule = IonWechatProvidersModule_1 = __decorate([
        NgModule({
            imports: [
                IonicStorageModule.forRoot()
            ],
            providers: [
                WeuiService,
                DataService,
            ]
        }),
        __metadata("design:paramtypes", [WeuiService, DataService, Events])
    ], IonWechatProvidersModule);
    return IonWechatProvidersModule;
    var IonWechatProvidersModule_1;
}());
export { IonWechatProvidersModule };
var Options = /** @class */ (function () {
    function Options() {
    }
    return Options;
}());
export { Options };
//# sourceMappingURL=providers.module.js.map