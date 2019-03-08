import { ElementRef } from '@angular/core';
export declare class FixScrollDirective {
    private element;
    content: HTMLElement | any;
    constructor(element: ElementRef);
    private fix();
}
