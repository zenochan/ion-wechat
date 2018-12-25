import { ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MediaPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export declare class MediaPlayerPage {
    navCtrl: NavController;
    navParams: NavParams;
    showMenu: boolean;
    playButtonText: string;
    video: ElementRef;
    muteButton: ElementRef;
    fullScreenButton: ElementRef;
    seekBar: ElementRef;
    volumeBar: ElementRef;
    constructor(navCtrl: NavController, navParams: NavParams);
    togglePlay(): void;
}
