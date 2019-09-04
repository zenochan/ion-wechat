/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import {Pipe, PipeTransform} from "@angular/core";
// import {Observable} from "rxjs/Observable";
import { Pipe } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * 选择上传的图片，图片文件预览
 *
 * <p>usage
 * <pre>[src]="file | preview | async"</pre>
 */
var PreviewPipe = /** @class */ (function () {
    function PreviewPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    PreviewPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            /** @type {?} */
            var reader = new FileReader();
            reader.onload = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var result = ((/** @type {?} */ (event.target))).result;
                subscriber.next(result);
                subscriber.complete();
            });
            reader.readAsDataURL(value);
        }));
    };
    PreviewPipe.decorators = [
        { type: Pipe, args: [{ name: 'preview' },] }
    ];
    return PreviewPipe;
}());
export { PreviewPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi13ZWNoYXQvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvcHJldmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0FBUWhDO0lBQUE7SUFlQSxDQUFDOzs7Ozs7SUFaQywrQkFBUzs7Ozs7SUFBVCxVQUFVLEtBQVU7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUUzQixPQUFPLElBQUksVUFBVTs7OztRQUFDLFVBQUEsVUFBVTs7Z0JBQ3hCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUMvQixNQUFNLENBQUMsTUFBTTs7OztZQUFHLFVBQUEsS0FBSzs7b0JBQ2IsTUFBTSxHQUFHLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBTyxDQUFDLENBQUMsTUFBTTtnQkFDM0MsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWRGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7O0lBZXZCLGtCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiDpgInmi6nkuIrkvKDnmoTlm77niYfvvIzlm77niYfmlofku7bpooTop4hcbiAqXG4gKiA8cD51c2FnZVxuICogPHByZT5bc3JjXT1cImZpbGUgfCBwcmV2aWV3IHwgYXN5bmNcIjwvcHJlPlxuICovXG5AUGlwZSh7bmFtZTogJ3ByZXZpZXcnfSlcbmV4cG9ydCBjbGFzcyBQcmV2aWV3UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm1cbntcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3MpXG4gIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnJlc3VsdDtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==