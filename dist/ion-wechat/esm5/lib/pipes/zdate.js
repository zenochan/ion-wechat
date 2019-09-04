/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import '../prototype/date';
/**
 * url | photo : 'yyyy-MM-dd' : 'default'
 */
var ZdatePipe = /** @class */ (function () {
    function ZdatePipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    ZdatePipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value || typeof value !== 'string') {
            return '';
        }
        // 屏蔽 php 。laravel 默认时间
        if (value.indexOf('1970-01-01') > -1 || value.indexOf('0000-00-00') > -1) {
            value = null;
        }
        if (!value) {
            return args[1] || '';
        }
        // compat HH:mm:ss
        if (value.length === 8 && value.indexOf(':') === 2 && value.lastIndexOf(':') === 5) {
            value = '2018/1/1 ' + value;
        }
        value = value.replace(/-/g, '/');
        return new Date(Date.parse(value)).format(args[0] || 'yyyy/MM/dd');
    };
    ZdatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'zdate',
                },] }
    ];
    return ZdatePipe;
}());
export { ZdatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24td2VjaGF0LyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3pkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLG1CQUFtQixDQUFDOzs7O0FBSzNCO0lBQUE7SUEwQkEsQ0FBQzs7Ozs7O0lBckJDLDZCQUFTOzs7OztJQUFULFVBQVUsS0FBVTtRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBRTNCLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCx1QkFBdUI7UUFDdkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDeEUsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtRQUVELGtCQUFrQjtRQUNsQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xGLEtBQUssR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzdCO1FBRUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBekJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZDs7SUF3QkQsZ0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXZCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnLi4vcHJvdG90eXBlL2RhdGUnO1xuXG4vKipcbiAqIHVybCB8IHBob3RvIDogJ3l5eXktTU0tZGQnIDogJ2RlZmF1bHQnXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ3pkYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgWmRhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybVxue1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJncylcbiAge1xuICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICAvLyDlsY/olL0gcGhwIOOAgmxhcmF2ZWwg6buY6K6k5pe26Ze0XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJzE5NzAtMDEtMDEnKSA+IC0xIHx8IHZhbHVlLmluZGV4T2YoJzAwMDAtMDAtMDAnKSA+IC0xKSB7XG4gICAgICB2YWx1ZSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBhcmdzWzFdIHx8ICcnO1xuICAgIH1cblxuICAgIC8vIGNvbXBhdCBISDptbTpzc1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDggJiYgdmFsdWUuaW5kZXhPZignOicpID09PSAyICYmIHZhbHVlLmxhc3RJbmRleE9mKCc6JykgPT09IDUpIHtcbiAgICAgIHZhbHVlID0gJzIwMTgvMS8xICcgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgJy8nKTtcbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5wYXJzZSh2YWx1ZSkpLmZvcm1hdChhcmdzWzBdIHx8ICd5eXl5L01NL2RkJyk7XG4gIH1cbn1cbiJdfQ==