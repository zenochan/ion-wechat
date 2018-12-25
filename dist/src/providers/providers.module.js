import { NgModule } from "@angular/core";
import { WeuiService } from "./weui.service";
import { DataService } from "./data.service";
import { IonicStorageModule } from "@ionic/storage";
var IonWechatProvidersModule = /** @class */ (function () {
    function IonWechatProvidersModule() {
    }
    IonWechatProvidersModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicStorageModule.forRoot()
                    ],
                    providers: [
                        WeuiService,
                        DataService,
                    ]
                },] },
    ];
    return IonWechatProvidersModule;
}());
export { IonWechatProvidersModule };
//# sourceMappingURL=providers.module.js.map