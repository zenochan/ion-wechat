import { Component, Input } from '@angular/core';
/**
 * Generated class for the SmartImgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SmartImgComponent = /** @class */ (function () {
    function SmartImgComponent() {
        /**
           *  0 AspectFill
           *  1 ScaleToFill 拉升
           *  2 AspectFit 裁剪中间
           * @type {0|1|2}
           */
        this.mode = 0;
    }
    SmartImgComponent.decorators = [
        { type: Component, args: [{
                    selector: 'smart-img',
                    styles: ["\n    smart-img {\n      display: block;\n      position: relative;\n    }\n\n    smart-img .img-con {\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      background-position: center center;\n      background-repeat: no-repeat;\n      background-size: cover;\n    }\n\n    smart-img .scale-fill {\n      background-size: 100% 100%;\n    }\n\n    smart-img .aspect-fit {\n      background-size: contain;\n    }\n\n    smart-img .todo {\n      background-color: #4abbde !important;\n    }\n\n    smart-img .todo:after {\n      position: absolute;\n      display: inline-block;\n      content: \"IMG\";\n      font-weight: bold;\n      text-align: center;\n      color: white;\n      font-size: 13px;\n      line-height: 20px;\n      height: 20px;\n      width: 100%;\n      bottom: 0;\n      overflow: hidden;\n    }\n  "],
                    template: "\n    <div class=\"img-con\" [style.backgroundImage]=\"'url('+(url)+')'\"\n         [ngClass]=\"{'scale-fill': mode==1,'aspect-fit': mode==2,'todo': !url}\"\n    >\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    SmartImgComponent.ctorParameters = function () { return []; };
    SmartImgComponent.propDecorators = {
        "url": [{ type: Input },],
        "mode": [{ type: Input },],
    };
    return SmartImgComponent;
}());
export { SmartImgComponent };
//# sourceMappingURL=smart-img.js.map