import { InjectionToken, NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
export var UI;
export var Data;
export var IonEvent;
export var CONFIG = new InjectionToken("IonWechatConfig");
var IonWechatModule = /** @class */ (function () {
    function IonWechatModule() {
    }
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
    IonWechatModule.forRoot = 
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
                        IonicModule
                    ]
                },] },
    ];
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