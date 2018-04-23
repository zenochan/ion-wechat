"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
/**
 * 选择上传的图片，图片文件预览
 *
 * <p>usage
 * <pre>[src]="file | preview | async"</pre>
 */
var PreviewPipe = /** @class */ (function () {
    function PreviewPipe() {
    }
    PreviewPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Observable_1.Observable(function (subscriber) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var result = event.target.result;
                subscriber.next(result);
                subscriber.complete();
            };
            reader.readAsDataURL(value);
        });
    };
    PreviewPipe = __decorate([
        core_1.Pipe({ name: 'preview' })
    ], PreviewPipe);
    return PreviewPipe;
}());
exports.PreviewPipe = PreviewPipe;
//# sourceMappingURL=preview.js.map