import { Directive, ElementRef, Input } from '@angular/core';
import { Content } from "ionic-angular";
var StickyDirective = /** @class */ (function () {
    function StickyDirective(element) {
        this.element = element;
        console.log('Hello StickyDirective Directive');
        element.nativeElement.hidden = true;
        element.nativeElement.style.position = 'fixed';
        element.nativeElement.style.zindex = 10;
    }
    StickyDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (event) {
            var top = event.scrollTop;
            var left = event.scrollLeft;
            var height = event.scrollHeight;
            var width = event.scrollWidth;
            _this.element.nativeElement.hidden = top < _this.height;
            console.log(top, _this.height);
        });
    };
    StickyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[sticky]' // Attribute selector
                },] },
    ];
    /** @nocollapse */
    StickyDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    StickyDirective.propDecorators = {
        "content": [{ type: Input },],
        "height": [{ type: Input },],
    };
    return StickyDirective;
}());
export { StickyDirective };
//# sourceMappingURL=sticky.js.map