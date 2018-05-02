import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TinterPage } from './tinter';
import { IonWechatComponentsModule } from "../../components/ion-wechat-components.module";
var TinterPageModule = /** @class */ (function () {
    function TinterPageModule() {
    }
    TinterPageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TinterPage,
                    ],
                    imports: [
                        IonicPageModule.forChild(TinterPage),
                        IonWechatComponentsModule
                    ],
                },] },
    ];
    return TinterPageModule;
}());
export { TinterPageModule };
//# sourceMappingURL=tinter.module.js.map