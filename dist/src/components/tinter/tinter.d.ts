import { ElementRef, OnInit } from '@angular/core';
/**
 * 着色
 */
export declare class TinterComponent implements OnInit {
    colorValue: string;
    color: string;
    el: ElementRef;
    constructor(el: ElementRef);
    ngOnInit(): void;
}
