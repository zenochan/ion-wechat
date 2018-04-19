import { WeuiService } from "./weui.service";
import { DataService } from "./data.service";
import { Events } from "ionic-angular";
export declare let UI: WeuiService;
export declare let Data: DataService;
export declare let Event: Events;
export declare class IonWechatProvidersModule {
    constructor(ui: WeuiService, data: DataService, events: Events);
    static forRoot(options: Options): typeof IonWechatProvidersModule;
}
export declare class Options {
    debug: boolean;
    /**
     * 存放用户的 key
     */
    userKey: string;
    imgBaseUrl: string;
}
