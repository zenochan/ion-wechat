import { Component, Input } from '@angular/core';
import { Wechat } from "../../providers/wechat";
var SmartImgComponent = /** @class */ (function () {
    function SmartImgComponent() {
        this.enablePreview = false;
        /**
           *  0 AspectFill 拉伸
           *  1 ScaleToFill 完整显示在中间
           *  2 AspectFit 裁剪中间
           * @type {0|1|2}
           */
        this.mode = 0;
    }
    SmartImgComponent.prototype.preview = function ($event) {
        if (this.enablePreview) {
            Wechat.previewImage([this.src]);
            $event.stopPropagation();
        }
    };
    SmartImgComponent.decorators = [
        { type: Component, args: [{
                    selector: 'smart-img',
                    styles: ["\n    smart-img {\n      display: block;\n      width: 200px;\n      height: 200px;\n      /* \u5706\u89D2\u751F\u6548*/\n      overflow: hidden;\n    }\n\n    .img-con {\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      background-position: center center;\n      background-repeat: no-repeat;\n      background-size: cover;\n    }\n\n    .scale-fill {\n      background-size: 100% 100%;\n    }\n\n    .aspect-fit {\n      background-size: contain;\n    }\n\n    .todo {\n      border: 2px solid gray;\n    }\n  "],
                    template: "\n    <div class=\"img-con\"\n         (click)=\"preview($event)\"\n         [style.backgroundImage]=\"'url('+(src)+')'\"\n         [ngClass]=\"{\n           'scale-fill': mode==1,\n           'aspect-fit': mode==2,\n           'todo': !src\n         }\"\n    >\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    SmartImgComponent.ctorParameters = function () { return []; };
    SmartImgComponent.propDecorators = {
        "enablePreview": [{ type: Input },],
        "src": [{ type: Input },],
        "mode": [{ type: Input },],
    };
    return SmartImgComponent;
}());
export { SmartImgComponent };
//# sourceMappingURL=smart-img.js.map