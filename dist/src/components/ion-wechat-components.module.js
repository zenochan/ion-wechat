import { NgModule } from '@angular/core';
import { TinterComponent } from './tinter/tinter';
import { SmartImgComponent } from "./smart-img/smart-img";
import { CommonModule } from "@angular/common";
var IonWechatComponentsModule = /** @class */ (function () {
    function IonWechatComponentsModule() {
    }
    IonWechatComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TinterComponent, SmartImgComponent],
                    imports: [CommonModule],
                    exports: [TinterComponent, SmartImgComponent]
                },] },
    ];
    return IonWechatComponentsModule;
}());
export { IonWechatComponentsModule };
//# sourceMappingURL=ion-wechat-components.module.js.map