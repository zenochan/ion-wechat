import { DataService } from "./providers/data.service";
import { WeuiService } from "./providers/weui.service";
import { Events } from "ionic-angular";
export declare let UI: WeuiService;
export declare let Data: DataService;
export declare let IonEvent: Events;
export declare class IonWechatModule {
    static DEBUG: boolean;
    constructor(ui: WeuiService, data: DataService, events: Events);
    static forRoot(options: Options): typeof IonWechatModule;
}
export declare class Options {
    debug: boolean;
    /**
     * 存放用户的 key
     */
    userKey: string;
    imgBaseUrl: string;
}
