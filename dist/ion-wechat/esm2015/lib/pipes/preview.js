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
export class PreviewPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            /** @type {?} */
            const reader = new FileReader();
            reader.onload = (/**
             * @param {?} event
             * @return {?}
             */
            event => {
                /** @type {?} */
                const result = ((/** @type {?} */ (event.target))).result;
                subscriber.next(result);
                subscriber.complete();
            });
            reader.readAsDataURL(value);
        }));
    }
}
PreviewPipe.decorators = [
    { type: Pipe, args: [{ name: 'preview' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi13ZWNoYXQvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvcHJldmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0FBU2hDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFFdEIsU0FBUyxDQUFDLEtBQVUsRUFBRSxHQUFHLElBQUk7UUFFM0IsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRTs7a0JBQzNCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUMvQixNQUFNLENBQUMsTUFBTTs7OztZQUFHLEtBQUssQ0FBQyxFQUFFOztzQkFDaEIsTUFBTSxHQUFHLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBTyxDQUFDLENBQUMsTUFBTTtnQkFDM0MsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWRGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICog6YCJ5oup5LiK5Lyg55qE5Zu+54mH77yM5Zu+54mH5paH5Lu26aKE6KeIXG4gKlxuICogPHA+dXNhZ2VcbiAqIDxwcmU+W3NyY109XCJmaWxlIHwgcHJldmlldyB8IGFzeW5jXCI8L3ByZT5cbiAqL1xuQFBpcGUoe25hbWU6ICdwcmV2aWV3J30pXG5leHBvcnQgY2xhc3MgUHJldmlld1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtXG57XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzKVxuICB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZXIgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChldmVudC50YXJnZXQgYXMgYW55KS5yZXN1bHQ7XG4gICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQpO1xuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=