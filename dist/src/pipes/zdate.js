var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import "../extends.date";
/**
 * url | photo : 'yyyy-MM-dd' : 'default'
 */
var ZdatePipe = /** @class */ (function () {
    function ZdatePipe() {
    }
    ZdatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value || typeof value != "string")
            return "";
        // 屏蔽 php 。laravel 默认时间
        if (value.indexOf("1970-01-01") > -1 || value.indexOf("0000-00-00") > -1)
            value = null;
        if (!value)
            return args[1] || "";
        // compat HH:mm:ss
        if (value.length == 8 && value.indexOf(":") == 2 && value.lastIndexOf(":") == 5) {
            value = "2018/1/1 " + value;
        }
        value = value.replace(/-/g, "/");
        return new Date(Date.parse(value)).format(args[0] || "yyyy/MM/dd");
    };
    ZdatePipe = __decorate([
        Pipe({
            name: 'zdate',
        })
    ], ZdatePipe);
    return ZdatePipe;
}());
export { ZdatePipe };
//# sourceMappingURL=zdate.js.map