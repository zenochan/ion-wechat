import { NgModule } from '@angular/core';
import { TinterComponent } from './tinter/tinter';
import { SmartImgComponent } from "./smart-img/smart-img";
import { CommonModule } from "@angular/common";
import { RichTextComponent } from "./rich-text/rich-text";
import { IonWechatPipesModule } from "../pipes/pipes.module";
var components = [
    TinterComponent,
    SmartImgComponent,
    RichTextComponent
];
var IonWechatComponentsModule = /** @class */ (function () {
    function IonWechatComponentsModule() {
    }
    IonWechatComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: components,
                    exports: components,
                    imports: [
                        CommonModule,
                        IonWechatPipesModule
                    ]
                },] },
    ];
    return IonWechatComponentsModule;
}());
export { IonWechatComponentsModule };
//# sourceMappingURL=ion-wechat-components.module.js.map