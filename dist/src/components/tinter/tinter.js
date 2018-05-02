import { Component, ElementRef, Input, ViewChild } from '@angular/core';
/**
 * 着色
 */
var TinterComponent = /** @class */ (function () {
    function TinterComponent() {
        this.color = 'orange';
    }
    TinterComponent.prototype.ngOnInit = function () {
        this.el.nativeElement.style.webkitFilter = "drop-shadow(100vw 0 " + this.color + ")";
    };
    TinterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tinter',
                    templateUrl: 'tinter.html'
                },] },
    ];
    /** @nocollapse */
    TinterComponent.propDecorators = {
        "color": [{ type: Input },],
        "el": [{ type: ViewChild, args: ["body",] },],
    };
    return TinterComponent;
}());
export { TinterComponent };
//# sourceMappingURL=tinter.js.map