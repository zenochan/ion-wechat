import { NgModule } from '@angular/core';
import { PreviewPipe } from "./preview";
import { Sanitizer } from "./sanitizer";
import { ZdatePipe } from "./zdate";
import { Photo } from "./photo";
var pipes = [
    PreviewPipe,
    Sanitizer,
    ZdatePipe,
    Photo
];
var IonWechatPipesModule = /** @class */ (function () {
    function IonWechatPipesModule() {
    }
    IonWechatPipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: pipes.slice(),
                    imports: [],
                    exports: pipes.slice()
                },] },
    ];
    return IonWechatPipesModule;
}());
export { IonWechatPipesModule };
//# sourceMappingURL=pipes.module.js.map