import { NgModule } from '@angular/core';
import { StickyDirective } from './sticky/sticky';
import { FixScrollDirective } from "./fix-scroll/fix-scroll";
var IonWechatDirectivesModule = /** @class */ (function () {
    function IonWechatDirectivesModule() {
    }
    IonWechatDirectivesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StickyDirective, FixScrollDirective],
                    imports: [],
                    exports: [StickyDirective, FixScrollDirective]
                },] },
    ];
    return IonWechatDirectivesModule;
}());
export { IonWechatDirectivesModule };
//# sourceMappingURL=ion-wechat-directives.module.js.map