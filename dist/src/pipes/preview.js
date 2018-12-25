import { Pipe } from "@angular/core";
import { Observable } from "rxjs/Observable";
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
        return new Observable(function (subscriber) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var result = event.target.result;
                subscriber.next(result);
                subscriber.complete();
            };
            reader.readAsDataURL(value);
        });
    };
    PreviewPipe.decorators = [
        { type: Pipe, args: [{ name: 'preview' },] },
    ];
    return PreviewPipe;
}());
export { PreviewPipe };
//# sourceMappingURL=preview.js.map