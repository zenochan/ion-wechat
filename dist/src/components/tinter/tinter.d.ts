import { ElementRef, OnInit } from '@angular/core';
/**
 * 着色
 */
export declare class TinterComponent implements OnInit {
    private el;
    colorValue: string;
    /**
     * @param {string} value 着色颜色
     */
    color: string;
    offsetX: number;
    offsetY: number;
    body: ElementRef;
    constructor(el: ElementRef);
    ngOnInit(): void;
    filter(): void;
}
