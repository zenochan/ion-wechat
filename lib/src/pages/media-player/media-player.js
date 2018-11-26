var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MediaPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MediaPlayerPage = /** @class */ (function () {
    function MediaPlayerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showMenu = false;
        this.playButtonText = "播放";
    }
    MediaPlayerPage.prototype.togglePlay = function () {
        var video = this.video.nativeElement;
        if (video.paused == true) {
            // Play the video
            video.play();
            this.playButtonText = "暂定";
        }
        else {
            // Pause the video
            video.pause();
            this.playButtonText = "播放";
        }
    };
    MediaPlayerPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-media-player',
                    templateUrl: 'media-player.html',
                },] },
    ];
    /** @nocollapse */
    MediaPlayerPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
    ]; };
    MediaPlayerPage.propDecorators = {
        "video": [{ type: ViewChild, args: ["video",] },],
        "muteButton": [{ type: ViewChild, args: ["mute",] },],
        "fullScreenButton": [{ type: ViewChild, args: ["full-screen",] },],
        "seekBar": [{ type: ViewChild, args: ["seek-bar",] },],
        "volumeBar": [{ type: ViewChild, args: ["volume-bar",] },],
    };
    /**
     * Generated class for the MediaPlayerPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    MediaPlayerPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MediaPlayerPage);
    return MediaPlayerPage;
}());
export { MediaPlayerPage };
//# sourceMappingURL=media-player.js.map