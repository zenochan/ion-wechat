import { ElementRef, OnInit } from '@angular/core';
import { Content } from "ionic-angular";
export declare class StickyDirective implements OnInit {
    private element;
    content: Content;
    height: number;
    constructor(element: ElementRef);
    ngOnInit(): void;
}
