"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weui_service_1 = require("./weui.service");
var data_service_1 = require("./data.service");
var storage_1 = require("@ionic/storage");
var IonWechatProvidersModule = /** @class */ (function () {
    function IonWechatProvidersModule() {
    }
    IonWechatProvidersModule = __decorate([
        core_1.NgModule({
            imports: [
                storage_1.IonicStorageModule.forRoot()
            ],
            providers: [
                weui_service_1.WeuiService,
                data_service_1.DataService,
            ]
        })
    ], IonWechatProvidersModule);
    return IonWechatProvidersModule;
}());
exports.IonWechatProvidersModule = IonWechatProvidersModule;
//# sourceMappingURL=providers.module.js.map