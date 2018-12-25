import { Pipe } from "@angular/core";
var Photo = /** @class */ (function () {
    function Photo() {
    }
    Photo.prototype.transform = function (value, width, height) {
        return transPhoto(value, width, height);
    };
    Photo.BASE_URL = "";
    Photo.decorators = [
        { type: Pipe, args: [{ name: 'photo' },] },
    ];
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