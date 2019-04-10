import { ElementRef, OnInit } from '@angular/core';
export declare class BgmComponent implements OnInit {
    audioRef: ElementRef;
    audio: HTMLAudioElement;
    playing: boolean;
    img: string;
    src: string;
    constructor();
    ngOnInit(): void;
    pause(): void;
    play(): void;
}
