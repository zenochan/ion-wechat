import { NgModule } from '@angular/core';
import { TinterComponent } from './tinter/tinter';
import { SmartImgComponent } from "./smart-img/smart-img";
import { CommonModule } from "@angular/common";
var components = [
    TinterComponent,
    SmartImgComponent
];
var IonWechatComponentsModule = /** @class */ (function () {
    function IonWechatComponentsModule() {
    }
    IonWechatComponentsModule.decorators = [
        { type: NgModule, args: [{ declarations: components, imports: [CommonModule], exports: components },] },
    ];
    return IonWechatComponentsModule;
}());
export { IonWechatComponentsModule };
//# sourceMappingURL=ion-wechat-components.module.js.map