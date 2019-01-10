import { Inject, InjectionToken, NgModule } from '@angular/core';
import { DataService } from "./providers/data.service";
import { WeuiService } from "./providers/weui.service";
import { Events, IonicModule } from "ionic-angular";
import { HttpClientModule } from "@angular/common/http";
import { IonWechatProvidersModule } from "./providers/providers.module";
import { Photo } from "./pipes/photo";
export var UI;
export var Data;
export var IonEvent;
export var CONFIG = new InjectionToken("IonWechatConfig");
var IonWechatModule = /** @class */ (function () {
    function IonWechatModule(ui, data, events, options) {
        IonWechatModule.DEBUG = options.debug;
        Photo.BASE_URL = options.imgBaseUrl;
        DataService.KEY_USER = options.userKey || "user";
        UI = ui;
        Data = data;
        IonEvent = events;
    }
    /**
     * @see [fuction calls are not supported in decorators](https://github.com/angular/angular-cli/issues/9358)
     * @param {Options} options
     * @returns {ModuleWithProviders}
     */
    /**
       * @see [fuction calls are not supported in decorators](https://github.com/angular/angular-cli/issues/9358)
       * @param {Options} options
       * @returns {ModuleWithProviders}
       */
    IonWechatModule.forRoot = /**
       * @see [fuction calls are not supported in decorators](https://github.com/angular/angular-cli/issues/9358)
       * @param {Options} options
       * @returns {ModuleWithProviders}
       */
    function (options) {
        return {
            ngModule: IonWechatModule,
            providers: [
                { provide: CONFIG, useValue: options },
            ]
        };
    };
    IonWechatModule.DEBUG = false;
    IonWechatModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule,
                        HttpClientModule,
                        IonWechatProvidersModule
                    ]
                },] },
    ];
    /** @nocollapse */
    IonWechatModule.ctorParameters = function () { return [
        { type: WeuiService, },
        { type: DataService, },
        { type: Events, },
        { type: Options, decorators: [{ type: Inject, args: [CONFIG,] },] },
    ]; };
    return IonWechatModule;
}());
export { IonWechatModule };
var Options = /** @class */ (function () {
    function Options() {
    }
    return Options;
}());
export { Options };
//# sourceMappingURL=ion-wechat.module.js.map