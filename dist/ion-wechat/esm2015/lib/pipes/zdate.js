/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import '../prototype/date';
/**
 * url | photo : 'yyyy-MM-dd' : 'default'
 */
export class ZdatePipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
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
    }
}
ZdatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'zdate',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24td2VjaGF0LyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3pkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLG1CQUFtQixDQUFDOzs7O0FBUTNCLE1BQU0sT0FBTyxTQUFTOzs7Ozs7SUFFcEIsU0FBUyxDQUFDLEtBQVUsRUFBRSxHQUFHLElBQUk7UUFFM0IsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdkMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELHVCQUF1QjtRQUN2QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN4RSxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEYsS0FBSyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDN0I7UUFFRCxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7WUF6QkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxPQUFPO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICcuLi9wcm90b3R5cGUvZGF0ZSc7XG5cbi8qKlxuICogdXJsIHwgcGhvdG8gOiAneXl5eS1NTS1kZCcgOiAnZGVmYXVsdCdcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnemRhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBaZGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtXG57XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzKVxuICB7XG4gICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIC8vIOWxj+iUvSBwaHAg44CCbGFyYXZlbCDpu5jorqTml7bpl7RcbiAgICBpZiAodmFsdWUuaW5kZXhPZignMTk3MC0wMS0wMScpID4gLTEgfHwgdmFsdWUuaW5kZXhPZignMDAwMC0wMC0wMCcpID4gLTEpIHtcbiAgICAgIHZhbHVlID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGFyZ3NbMV0gfHwgJyc7XG4gICAgfVxuXG4gICAgLy8gY29tcGF0IEhIOm1tOnNzXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gOCAmJiB2YWx1ZS5pbmRleE9mKCc6JykgPT09IDIgJiYgdmFsdWUubGFzdEluZGV4T2YoJzonKSA9PT0gNSkge1xuICAgICAgdmFsdWUgPSAnMjAxOC8xLzEgJyArIHZhbHVlO1xuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLnBhcnNlKHZhbHVlKSkuZm9ybWF0KGFyZ3NbMF0gfHwgJ3l5eXkvTU0vZGQnKTtcbiAgfVxufVxuIl19