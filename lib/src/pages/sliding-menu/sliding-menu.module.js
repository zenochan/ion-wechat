import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidingMenuPage } from './sliding-menu';
import { IonWechatComponentsModule } from "../../components/ion-wechat-components.module";
var SlidingMenuPageModule = /** @class */ (function () {
    function SlidingMenuPageModule() {
    }
    SlidingMenuPageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SlidingMenuPage
                    ],
                    imports: [
                        IonicPageModule.forChild(SlidingMenuPage),
                        IonWechatComponentsModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    return SlidingMenuPageModule;
}());
export { SlidingMenuPageModule };
//# sourceMappingURL=sliding-menu.module.js.map