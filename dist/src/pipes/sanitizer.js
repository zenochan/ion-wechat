import { Injectable, Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
/**
 * [src]="src | sanitizer : 'HTML'"
 * - NONE
 * - HTML
 * - STYLE
 * - SCRIPT
 * - URL
 * - RESOURCE_URL
 */
var Sanitizer = /** @class */ (function () {
    function Sanitizer(sanitiser) {
        this.sanitiser = sanitiser;
        this.SecurityContextMap = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
    }
    Sanitizer.prototype.transform = function (value, args) {
        var res;
        value = value + '';
        var context = this.SecurityContextMap.STYLE;
        if (args && typeof args == "string" && this.SecurityContextMap.hasOwnProperty(args.toUpperCase())) {
            context = this.SecurityContextMap[args.toUpperCase()];
        }
        switch (context) {
            case this.SecurityContextMap.HTML:
                res = this.sanitiser.bypassSecurityTrustHtml(value);
                break;
            case this.SecurityContextMap.URL:
                res = this.sanitiser.bypassSecurityTrustUrl(value);
                break;
            case this.SecurityContextMap.SCRIPT:
                res = this.sanitiser.bypassSecurityTrustScript(value);
                break;
            case this.SecurityContextMap.STYLE:
                res = this.sanitiser.bypassSecurityTrustStyle(value);
                break;
            case this.SecurityContextMap.RESOURCE_URL:
                res = this.sanitiser.bypassSecurityTrustResourceUrl(value);
                break;
            default:
                res = this.sanitiser.sanitize(context, value);
                break;
        }
        return res;
    };
    Sanitizer.decorators = [
        { type: Pipe, args: [{ name: 'sanitizer' },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    Sanitizer.ctorParameters = function () { return [
        { type: DomSanitizer, },
    ]; };
    return Sanitizer;
}());
export { Sanitizer };
//# sourceMappingURL=sanitizer.js.map