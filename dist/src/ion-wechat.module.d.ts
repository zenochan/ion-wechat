import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { DataService } from "./providers/data.service";
import { WeuiService } from "./providers/weui.service";
import { Events } from "ionic-angular";
export declare let UI: WeuiService;
export declare let Data: DataService;
export declare let IonEvent: Events;
export declare const CONFIG: InjectionToken<{}>;
export declare class IonWechatModule {
    static DEBUG: boolean;
    constructor(ui: WeuiService, data: DataService, events: Events, options: Options);
    /**
     * @see [fuction calls are not supported in decorators](https://github.com/angular/angular-cli/issues/9358)
     * @param {Options} options
     * @returns {ModuleWithProviders}
     */
    static forRoot(options: Options): ModuleWithProviders;
}
export declare class Options {
    debug: boolean;
    /**
     * 存放用户的 key
     */
    userKey: string;
    imgBaseUrl: string;
}
