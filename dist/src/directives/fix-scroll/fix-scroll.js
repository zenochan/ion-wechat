import { Directive, ElementRef } from '@angular/core';
var FixScrollDirective = /** @class */ (function () {
    function FixScrollDirective(element) {
        var _this = this;
        this.element = element;
        this.content = element.nativeElement;
        setTimeout(function () {
            var scroll = window.document.getElementsByClassName("scroll-content")[0];
            _this.fix();
            scroll.addEventListener("scroll", function (e) {
                _this.fix();
            });
        }, 1000);
    }
    FixScrollDirective.prototype.fix = function () {
        var scroll = window.document.getElementsByClassName("scroll-content")[0];
        if (scroll.scrollTop == 0) {
            scroll.scrollTo(0, 1);
        }
        else if (scroll.scrollTop + scroll.clientHeight == scroll.scrollHeight) {
            scroll.scrollTo(0, scroll.scrollTop - 1);
        }
    };
    FixScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fix-scroll]' // Attribute selector
                },] },
    ];
    /** @nocollapse */
    FixScrollDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return FixScrollDirective;
}());
export { FixScrollDirective };
//# sourceMappingURL=fix-scroll.js.map