var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, Pipe } from "@angular/core";
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
    Sanitizer = __decorate([
        Pipe({ name: 'sanitizer' }),
        Injectable()
    ], Sanitizer);
    return Sanitizer;
}());
export { Sanitizer };
//# sourceMappingURL=sanitizer.js.map