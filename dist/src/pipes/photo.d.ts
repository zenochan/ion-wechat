import { PipeTransform } from "@angular/core";
export declare class Photo implements PipeTransform {
    static BASE_URL: string;
    transform(value: any, width: any, height: any): string;
}
export declare function transPhoto(value: any, width?: any, height?: any): string;
