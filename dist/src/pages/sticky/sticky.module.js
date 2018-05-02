import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StickyPage } from './sticky';
import { IonWechatDirectivesModule } from "../../directives/ion-wechat-directives.module";
var StickyPageModule = /** @class */ (function () {
    function StickyPageModule() {
    }
    StickyPageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        StickyPage
                    ],
                    imports: [
                        IonicPageModule.forChild(StickyPage),
                        IonWechatDirectivesModule
                    ],
                },] },
    ];
    return StickyPageModule;
}());
export { StickyPageModule };
//# sourceMappingURL=sticky.module.js.map