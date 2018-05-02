import { Component, ElementRef, Input, ViewChild } from '@angular/core';
/**
 * 着色
 */
var TinterComponent = /** @class */ (function () {
    function TinterComponent(el) {
        this.colorValue = 'orange';
        // el.nativeElement.style.overflow = 'hidden';
        el.nativeElement.style.display = 'block';
        el.nativeElement.style.margin = '0';
        el.nativeElement.style.padding = '0';
    }
    Object.defineProperty(TinterComponent.prototype, "color", {
        set: function (value) {
            this.colorValue = value;
            this.el.nativeElement.style.webkitFilter = "drop-shadow(100vw 0 " + this.colorValue + ")";
        },
        enumerable: true,
        configurable: true
    });
    TinterComponent.prototype.ngOnInit = function () {
        this.el.nativeElement.style.webkitFilter = "drop-shadow(100vw 0 " + this.colorValue + ")";
    };
    TinterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tinter',
                    styles: ["\n\n    .tinter-body {\n      position: relative;\n      left: -100vw;\n    }\n  "],
                    template: "\n    <div class=\"tinter-body\" #body>\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    TinterComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    TinterComponent.propDecorators = {
        "color": [{ type: Input, args: ['color',] },],
        "el": [{ type: ViewChild, args: ["body",] },],
    };
    return TinterComponent;
}());
export { TinterComponent };
//# sourceMappingURL=tinter.js.map