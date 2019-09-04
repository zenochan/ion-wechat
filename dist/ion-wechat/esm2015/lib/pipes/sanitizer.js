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
export class Sanitizer {
    /**
     * @param {?} sanitiser
     */
    constructor(sanitiser) {
        this.sanitiser = sanitiser;
        this.SecurityContextMap = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    transform(value, args) {
        /** @type {?} */
        let res;
        value = value + '';
        /** @type {?} */
        let context = this.SecurityContextMap.STYLE;
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
    }
}
Sanitizer.decorators = [
    { type: Pipe, args: [{ name: 'sanitizer' },] },
    { type: Injectable }
];
/** @nocollapse */
Sanitizer.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    Sanitizer.prototype.SecurityContextMap;
    /** @type {?} */
    Sanitizer.prototype.sanitiser;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXdlY2hhdC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9zYW5pdGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7QUFhdkQsTUFBTSxPQUFPLFNBQVM7Ozs7SUFJcEIsWUFBbUIsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUYxQyx1QkFBa0IsR0FBUSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFFN0MsQ0FBQzs7Ozs7O0lBRS9DLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSTs7WUFFZixHQUFHO1FBQ1AsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7O1lBRWYsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLO1FBQzNDLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO1lBQ2pHLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDdkQ7UUFFRCxRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUk7Z0JBQy9CLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxNQUFNO1lBQ1IsS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRztnQkFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELE1BQU07WUFDUixLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNO2dCQUNqQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEQsTUFBTTtZQUNSLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUs7Z0JBQ2hDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyRCxNQUFNO1lBQ1IsS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWTtnQkFDdkMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFDUjtnQkFDRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1NBQ1Q7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQXhDRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQ3hCLFVBQVU7Ozs7WUFaSCxZQUFZOzs7O0lBZWxCLHVDQUEyRjs7SUFFL0UsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbi8qKlxuICogW3NyY109XCJzcmMgfCBzYW5pdGl6ZXIgOiAnSFRNTCdcIlxuICogLSBOT05FXG4gKiAtIEhUTUxcbiAqIC0gU1RZTEVcbiAqIC0gU0NSSVBUXG4gKiAtIFVSTFxuICogLSBSRVNPVVJDRV9VUkxcbiAqL1xuQFBpcGUoe25hbWU6ICdzYW5pdGl6ZXInfSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtXG57XG4gIFNlY3VyaXR5Q29udGV4dE1hcDogYW55ID0ge05PTkU6IDAsIEhUTUw6IDEsIFNUWUxFOiAyLCBTQ1JJUFQ6IDMsIFVSTDogNCwgUkVTT1VSQ0VfVVJMOiA1fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpc2VyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZSwgYXJncylcbiAge1xuICAgIGxldCByZXM7XG4gICAgdmFsdWUgPSB2YWx1ZSArICcnO1xuXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLlNlY3VyaXR5Q29udGV4dE1hcC5TVFlMRTtcbiAgICBpZiAoYXJncyAmJiB0eXBlb2YgYXJncyA9PSBcInN0cmluZ1wiICYmIHRoaXMuU2VjdXJpdHlDb250ZXh0TWFwLmhhc093blByb3BlcnR5KGFyZ3MudG9VcHBlckNhc2UoKSkpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLlNlY3VyaXR5Q29udGV4dE1hcFthcmdzLnRvVXBwZXJDYXNlKCldO1xuICAgIH1cblxuICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgY2FzZSB0aGlzLlNlY3VyaXR5Q29udGV4dE1hcC5IVE1MOlxuICAgICAgICByZXMgPSB0aGlzLnNhbml0aXNlci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLlNlY3VyaXR5Q29udGV4dE1hcC5VUkw6XG4gICAgICAgIHJlcyA9IHRoaXMuc2FuaXRpc2VyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5TZWN1cml0eUNvbnRleHRNYXAuU0NSSVBUOlxuICAgICAgICByZXMgPSB0aGlzLnNhbml0aXNlci5ieXBhc3NTZWN1cml0eVRydXN0U2NyaXB0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuU2VjdXJpdHlDb250ZXh0TWFwLlNUWUxFOlxuICAgICAgICByZXMgPSB0aGlzLnNhbml0aXNlci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5TZWN1cml0eUNvbnRleHRNYXAuUkVTT1VSQ0VfVVJMOlxuICAgICAgICByZXMgPSB0aGlzLnNhbml0aXNlci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlcyA9IHRoaXMuc2FuaXRpc2VyLnNhbml0aXplKGNvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG59XG4iXX0=