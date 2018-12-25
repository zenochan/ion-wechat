import { PipeTransform } from "@angular/core";
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
export declare class Sanitizer implements PipeTransform {
    sanitiser: DomSanitizer;
    SecurityContextMap: any;
    constructor(sanitiser: DomSanitizer);
    transform(value: any, args: any): any;
}
