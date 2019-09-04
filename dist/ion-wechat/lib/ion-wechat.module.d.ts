import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { DataService } from './service/data.service';
import { UiService } from './service/ui.service';
import { Events } from '@ionic/angular';
export declare const CONFIG: InjectionToken<{}>;
export declare let UI: any;
export declare let DB: DataService;
export declare let IonEvent: Events;
export declare class IonWechatModule {
    static ENV: {
        debug: boolean;
    };
    constructor(options: Options, ui: UiService, data: DataService, events: Events);
    static forRoot(options: Options): ModuleWithProviders;
}
export interface Options {
    debug?: boolean;
    /**
     * 存放用户的 key
     */
    userKey?: string;
    imgBaseUrl: string;
}
