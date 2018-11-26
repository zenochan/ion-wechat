import { Component, ElementRef, Input, ViewChild } from '@angular/core';
/**
 * 着色
 */
var TinterComponent = /** @class */ (function () {
    function TinterComponent(el) {
        this.el = el;
        this.colorValue = 'orange';
        this.offsetX = 8;
        this.offsetY = 8;
        el.nativeElement.style.overflow = 'hidden';
        el.nativeElement.style.display = 'block';
        el.nativeElement.style.margin = '0';
        el.nativeElement.style.padding = '0';
    }
    Object.defineProperty(TinterComponent.prototype, "color", {
        set: /**
           * @param {string} value 着色颜色
           */
        function (value) {
            this.colorValue = value;
            this.filter();
        },
        enumerable: true,
        configurable: true
    });
    TinterComponent.prototype.ngOnInit = function () {
        this.filter();
    };
    TinterComponent.prototype.filter = function () {
        var w = this.body.nativeElement.clientWidth - this.offsetX;
        var h = this.body.nativeElement.clientHeight - this.offsetY;
        this.body.nativeElement.style.left = -w + 'px';
        this.body.nativeElement.style.top = -h + 'px';
        this.body.nativeElement.style.webkitFilter = "drop-shadow(" + w + "px " + h + "px " + this.colorValue + ")";
    };
    TinterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tinter',
                    styles: ["\n\n    .tinter-body {\n      display: inline-block;\n      position: relative;\n    }\n  "],
                    template: "\n    <div class=\"tinter-body\" #body>\n      <ng-content></ng-content>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    TinterComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    TinterComponent.propDecorators = {
        "color": [{ type: Input, args: ['color',] },],
        "offsetX": [{ type: Input },],
        "offsetY": [{ type: Input },],
        "body": [{ type: ViewChild, args: ["body",] },],
    };
    return TinterComponent;
}());
export { TinterComponent };
//# sourceMappingURL=tinter.js.map