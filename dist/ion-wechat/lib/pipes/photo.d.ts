import { ElementRef, PipeTransform } from '@angular/core';
export declare class Photo implements PipeTransform {
    private el;
    static BASE_URL: string;
    constructor(el: ElementRef);
    transform(value: any, width?: any, height?: any): string;
}
export declare function transPhoto(value: any, width?: any, height?: any): string;
