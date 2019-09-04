/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
/**
 * [src]="src | sanitizer : 'HTML'"
 * - NONE
 * - HTML
 * - STYLE
 * - SCRIPT
 * - URL
 * - RESOURCE_URL
 */
var Sanitizer = /** @class */ (function () {
    function Sanitizer(sanitiser) {
        this.sanitiser = sanitiser;
        this.SecurityContextMap = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    Sanitizer.prototype.transform = /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    function (value, args) {
        /** @type {?} */
        var res;
        value = value + '';
        /** @type {?} */
        var context = this.SecurityContextMap.STYLE;
        if (args && typeof args == "string" && this.SecurityContextMap.hasOwnProperty(args.toUpperCase())) {
            context = this.SecurityContextMap[args.toUpperCase()];
        }
        switch (context) {
            case this.SecurityContextMap.HTML:
                res = this.sanitiser.bypassSecurityTrustHtml(value);
                break;
            case this.SecurityContextMap.URL:
                res = this.sanitiser.bypassSecurityTrustUrl(value);
                break;
            case this.SecurityContextMap.SCRIPT:
                res = this.sanitiser.bypassSecurityTrustScript(value);
                break;
            case this.SecurityContextMap.STYLE:
                res = this.sanitiser.bypassSecurityTrustStyle(value);
                break;
            case this.SecurityContextMap.RESOURCE_URL:
                res = this.sanitiser.bypassSecurityTrustResourceUrl(value);
                break;
            default:
                res = this.sanitiser.sanitize(context, value);
                break;
        }
        return res;
    };
    Sanitizer.decorators = [
        { type: Pipe, args: [{ name: 'sanitizer' },] },
        { type: Injectable }
    ];
    /** @nocollapse */
    Sanitizer.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return Sanitizer;
}());
export { Sanitizer };
if (false) {
    /** @type {?} */
    Sanitizer.prototype.SecurityContextMap;
    /** @type {?} */
    Sanitizer.prototype.sanitiser;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXdlY2hhdC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9zYW5pdGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7QUFXdkQ7SUFNRSxtQkFBbUIsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUYxQyx1QkFBa0IsR0FBUSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFFN0MsQ0FBQzs7Ozs7O0lBRS9DLDZCQUFTOzs7OztJQUFULFVBQVUsS0FBSyxFQUFFLElBQUk7O1lBRWYsR0FBRztRQUNQLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDOztZQUVmLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSztRQUMzQyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUNqRyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJO2dCQUMvQixHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEQsTUFBTTtZQUNSLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUc7Z0JBQzlCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuRCxNQUFNO1lBQ1IsS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTTtnQkFDakMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RELE1BQU07WUFDUixLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLO2dCQUNoQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckQsTUFBTTtZQUNSLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVk7Z0JBQ3ZDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxNQUFNO1lBQ1I7Z0JBQ0UsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUMsTUFBTTtTQUNUO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztnQkF4Q0YsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQztnQkFDeEIsVUFBVTs7OztnQkFaSCxZQUFZOztJQXFEcEIsZ0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXhDWSxTQUFTOzs7SUFFcEIsdUNBQTJGOztJQUUvRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuLyoqXG4gKiBbc3JjXT1cInNyYyB8IHNhbml0aXplciA6ICdIVE1MJ1wiXG4gKiAtIE5PTkVcbiAqIC0gSFRNTFxuICogLSBTVFlMRVxuICogLSBTQ1JJUFRcbiAqIC0gVVJMXG4gKiAtIFJFU09VUkNFX1VSTFxuICovXG5AUGlwZSh7bmFtZTogJ3Nhbml0aXplcid9KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNhbml0aXplciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm1cbntcbiAgU2VjdXJpdHlDb250ZXh0TWFwOiBhbnkgPSB7Tk9ORTogMCwgSFRNTDogMSwgU1RZTEU6IDIsIFNDUklQVDogMywgVVJMOiA0LCBSRVNPVVJDRV9VUkw6IDV9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGlzZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlLCBhcmdzKVxuICB7XG4gICAgbGV0IHJlcztcbiAgICB2YWx1ZSA9IHZhbHVlICsgJyc7XG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXMuU2VjdXJpdHlDb250ZXh0TWFwLlNUWUxFO1xuICAgIGlmIChhcmdzICYmIHR5cGVvZiBhcmdzID09IFwic3RyaW5nXCIgJiYgdGhpcy5TZWN1cml0eUNvbnRleHRNYXAuaGFzT3duUHJvcGVydHkoYXJncy50b1VwcGVyQ2FzZSgpKSkge1xuICAgICAgY29udGV4dCA9IHRoaXMuU2VjdXJpdHlDb250ZXh0TWFwW2FyZ3MudG9VcHBlckNhc2UoKV07XG4gICAgfVxuXG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlIHRoaXMuU2VjdXJpdHlDb250ZXh0TWFwLkhUTUw6XG4gICAgICAgIHJlcyA9IHRoaXMuc2FuaXRpc2VyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuU2VjdXJpdHlDb250ZXh0TWFwLlVSTDpcbiAgICAgICAgcmVzID0gdGhpcy5zYW5pdGlzZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLlNlY3VyaXR5Q29udGV4dE1hcC5TQ1JJUFQ6XG4gICAgICAgIHJlcyA9IHRoaXMuc2FuaXRpc2VyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTY3JpcHQodmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5TZWN1cml0eUNvbnRleHRNYXAuU1RZTEU6XG4gICAgICAgIHJlcyA9IHRoaXMuc2FuaXRpc2VyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLlNlY3VyaXR5Q29udGV4dE1hcC5SRVNPVVJDRV9VUkw6XG4gICAgICAgIHJlcyA9IHRoaXMuc2FuaXRpc2VyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzID0gdGhpcy5zYW5pdGlzZXIuc2FuaXRpemUoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbn1cbiJdfQ==