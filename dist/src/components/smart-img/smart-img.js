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