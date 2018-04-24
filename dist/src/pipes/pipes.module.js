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
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: pipes.slice(),
                    imports: [],
                    exports: pipes.slice()
                },] },
    ];
    return PipesModule;
}());
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map