import { Component, Input } from '@angular/core';
var SlidingMenuComponent = /** @class */ (function () {
    function SlidingMenuComponent() {
        this.isShow = false;
        console.log('Hello SlidingMenuComponent Component');
    }
    SlidingMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sliding-menu',
                    templateUrl: 'sliding-menu.html'
                },] },
    ];
    /** @nocollapse */
    SlidingMenuComponent.ctorParameters = function () { return []; };
    SlidingMenuComponent.propDecorators = {
        "isShow": [{ type: Input, args: ["show",] },],
    };
    return SlidingMenuComponent;
}());
export { SlidingMenuComponent };
//# sourceMappingURL=sliding-menu.js.map