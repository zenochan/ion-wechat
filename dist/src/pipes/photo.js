var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from "@angular/core";
var Photo = /** @class */ (function () {
    function Photo() {
    }
    Photo.prototype.transform = function (value, width, height) {
        return transPhoto(value, width, height);
    };
    Photo.BASE_URL = "";
    Photo = __decorate([
        Pipe({ name: 'photo' })
    ], Photo);
    return Photo;
}());
export { Photo };
export function transPhoto(value, width, height) {
    if (!value) {
        return "";
    }
    var p = value + "";
    if (p.indexOf('http') == 0)
        return p;
    var cdnPrefix = Photo.BASE_URL;
    var url = cdnPrefix + p;
    if (width) {
        url += '?imageView2/2/w/' + width;
        if (height) {
            url += '/h/' + height;
        }
    }
    return url;
}
//# sourceMappingURL=photo.js.map