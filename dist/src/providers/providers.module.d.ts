import { WeuiService } from "./weui.service";
import { DataService } from "./data.service";
import { Events } from "ionic-angular";
export declare let UI: WeuiService;
export declare let Data: DataService;
export declare let IonEvent: Events;
export declare class IonWechatProvidersModule {
    constructor(ui: WeuiService, data: DataService, events: Events);
}
