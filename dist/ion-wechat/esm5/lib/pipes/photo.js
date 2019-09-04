/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Pipe } from '@angular/core';
var Photo = /** @class */ (function () {
    function Photo(el) {
        this.el = el;
    }
    /**
     * @param {?} value
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    Photo.prototype.transform = /**
     * @param {?} value
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    function (value, width, height) {
        return transPhoto(value, width, height);
    };
    Photo.BASE_URL = '';
    Photo.decorators = [
        { type: Pipe, args: [{ name: 'photo' },] }
    ];
    /** @nocollapse */
    Photo.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return Photo;
}());
export { Photo };
if (false) {
    /** @type {?} */
    Photo.BASE_URL;
    /**
     * @type {?}
     * @private
     */
    Photo.prototype.el;
}
/**
 * @param {?} value
 * @param {?=} width
 * @param {?=} height
 * @return {?}
 */
export function transPhoto(value, width, height) {
    if (!value) {
        return '';
    }
    /** @type {?} */
    var p = value + '';
    if (p.indexOf('http') === 0) {
        return p;
    }
    /** @type {?} */
    var cdnPrefix = Photo.BASE_URL;
    /** @type {?} */
    var url = cdnPrefix + p;
    if (width) {
        url += '?imageView2/2/w/' + width;
        if (height) {
            url += '/h/' + height;
        }
    }
    return url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24td2VjaGF0LyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3Bob3RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFOUQ7SUFLRSxlQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUVsQyxDQUFDOzs7Ozs7O0lBRUQseUJBQVM7Ozs7OztJQUFULFVBQVUsS0FBSyxFQUFFLEtBQU0sRUFBRSxNQUFPO1FBRTlCLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQVRhLGNBQVEsR0FBRyxFQUFFLENBQUM7O2dCQUg3QixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDOzs7O2dCQUZiLFVBQVU7O0lBZWxCLFlBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSxLQUFLOzs7SUFFaEIsZUFBNEI7Ozs7O0lBRWhCLG1CQUFzQjs7Ozs7Ozs7QUFVcEMsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBTSxFQUFFLE1BQU87SUFFL0MsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1FBRUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO0lBRXBCLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQztLQUFFOztRQUVwQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVE7O1FBRTVCLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQztJQUN2QixJQUFJLEtBQUssRUFBRTtRQUNULEdBQUcsSUFBSSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxNQUFNLEVBQUU7WUFDVixHQUFHLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUN2QjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLCBQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICdwaG90byd9KVxuZXhwb3J0IGNsYXNzIFBob3RvIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybVxue1xuICBwdWJsaWMgc3RhdGljIEJBU0VfVVJMID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZilcbiAge1xuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlLCB3aWR0aD8sIGhlaWdodD8pXG4gIHtcbiAgICByZXR1cm4gdHJhbnNQaG90byh2YWx1ZSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zUGhvdG8odmFsdWUsIHdpZHRoPywgaGVpZ2h0PylcbntcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IHAgPSB2YWx1ZSArICcnO1xuXG4gIGlmIChwLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCkgeyByZXR1cm4gcDsgfVxuXG4gIGNvbnN0IGNkblByZWZpeCA9IFBob3RvLkJBU0VfVVJMO1xuXG4gIGxldCB1cmwgPSBjZG5QcmVmaXggKyBwO1xuICBpZiAod2lkdGgpIHtcbiAgICB1cmwgKz0gJz9pbWFnZVZpZXcyLzIvdy8nICsgd2lkdGg7XG4gICAgaWYgKGhlaWdodCkge1xuICAgICAgdXJsICs9ICcvaC8nICsgaGVpZ2h0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdXJsO1xufVxuIl19