/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Pipe } from '@angular/core';
export class Photo {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} value
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    transform(value, width, height) {
        return transPhoto(value, width, height);
    }
}
Photo.BASE_URL = '';
Photo.decorators = [
    { type: Pipe, args: [{ name: 'photo' },] }
];
/** @nocollapse */
Photo.ctorParameters = () => [
    { type: ElementRef }
];
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
    const p = value + '';
    if (p.indexOf('http') === 0) {
        return p;
    }
    /** @type {?} */
    const cdnPrefix = Photo.BASE_URL;
    /** @type {?} */
    let url = cdnPrefix + p;
    if (width) {
        url += '?imageView2/2/w/' + width;
        if (height) {
            url += '/h/' + height;
        }
    }
    return url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24td2VjaGF0LyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3Bob3RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFHOUQsTUFBTSxPQUFPLEtBQUs7Ozs7SUFJaEIsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFFbEMsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBTSxFQUFFLE1BQU87UUFFOUIsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDOztBQVRhLGNBQVEsR0FBRyxFQUFFLENBQUM7O1lBSDdCLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7Ozs7WUFGYixVQUFVOzs7O0lBS2hCLGVBQTRCOzs7OztJQUVoQixtQkFBc0I7Ozs7Ozs7O0FBVXBDLE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQU0sRUFBRSxNQUFPO0lBRS9DLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEVBQUUsQ0FBQztLQUNYOztVQUVLLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtJQUVwQixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQUUsT0FBTyxDQUFDLENBQUM7S0FBRTs7VUFFcEMsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFROztRQUU1QixHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUM7SUFDdkIsSUFBSSxLQUFLLEVBQUU7UUFDVCxHQUFHLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksTUFBTSxFQUFFO1lBQ1YsR0FBRyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDdkI7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZiwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAncGhvdG8nfSlcbmV4cG9ydCBjbGFzcyBQaG90byBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm1cbntcbiAgcHVibGljIHN0YXRpYyBCQVNFX1VSTCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpXG4gIHtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZSwgd2lkdGg/LCBoZWlnaHQ/KVxuICB7XG4gICAgcmV0dXJuIHRyYW5zUGhvdG8odmFsdWUsIHdpZHRoLCBoZWlnaHQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc1Bob3RvKHZhbHVlLCB3aWR0aD8sIGhlaWdodD8pXG57XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBwID0gdmFsdWUgKyAnJztcblxuICBpZiAocC5pbmRleE9mKCdodHRwJykgPT09IDApIHsgcmV0dXJuIHA7IH1cblxuICBjb25zdCBjZG5QcmVmaXggPSBQaG90by5CQVNFX1VSTDtcblxuICBsZXQgdXJsID0gY2RuUHJlZml4ICsgcDtcbiAgaWYgKHdpZHRoKSB7XG4gICAgdXJsICs9ICc/aW1hZ2VWaWV3Mi8yL3cvJyArIHdpZHRoO1xuICAgIGlmIChoZWlnaHQpIHtcbiAgICAgIHVybCArPSAnL2gvJyArIGhlaWdodDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVybDtcbn1cbiJdfQ==