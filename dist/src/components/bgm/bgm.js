import { Component, ElementRef, Input, ViewChild } from '@angular/core';
var BgmComponent = /** @class */ (function () {
    function BgmComponent() {
        this.playing = true;
        this.img = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2518206345,2615006369&fm=26&gp=0.jpg';
        this.src = 'http://old.haolingsheng.com/download/ring/000/100/cdadeab9561132c5028f11ede6026bdd.mp3';
    }
    BgmComponent.prototype.ngOnInit = function () {
        var audio = this.audioRef.nativeElement;
        this.audio = audio;
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function () {
            audio.play();
        }, false);
    };
    BgmComponent.prototype.pause = function () {
        this.playing = false;
        this.audio.pause();
    };
    BgmComponent.prototype.play = function () {
        this.playing = true;
        this.audio.play();
    };
    BgmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bgm',
                    // templateUrl: 'bgm.html',
                    styles: [
                        "\n      .icon-music-outer {\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        position: fixed;\n        right: 5px;\n        top: 10px;\n        font-size: 25px;\n        color: #ffda51;\n        z-index: 999;\n        border-radius: 16px;\n        /*border: solid #ffda51 2px;*/\n      }\n\n      .icon-music-outer img {\n        width: 100%;\n        height: 100%;\n      }\n\n      .forbid {\n        display: inline-block;\n        font-size: 25px;\n        width: 25px;\n        height: 25px;\n      }\n\n      .icon-forbidMusic {\n        display: inline-block;\n        font-size: 25px;\n        width: 25px;\n        height: 25px;\n        color: #d0f2fc;\n      }\n\n      audio {\n        position: absolute;\n        left: -300px;\n      }\n\n      .activeMusic {\n        transform: rotate(0);\n        -webkit-animation: musicMove 2s infinite linear;\n        animation: musicMove 2s infinite linear;\n      }\n\n      @-webkit-keyframes musicMove {\n        0% {\n          transform: rotate(0);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n\n      @keyframes musicMove {\n        0% {\n          transform: rotate(0);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    "
                    ],
                    template: "\n    <i class=\"icon-music-outer\" id=\"outer\">\n      <i class=\"forbid icon-music\" (click)=\"pause()\" *ngIf=\"playing\">\n        <img class=\"music activeMusic\" [src]=\"img\"/>\n      </i>\n      <i class=\"forbid icon-forbidMusic\" (click)=\"play()\" *ngIf=\"!playing\">\n        <img class=\"music\" [src]=\"img\"/>\n      </i>\n\n      <audio #audio loop autoplay=\"autoplay\" controls id=\"bgMusic\" [src]=\"src\" hidden></audio>\n    </i>\n  "
                },] },
    ];
    /** @nocollapse */
    BgmComponent.ctorParameters = function () { return []; };
    BgmComponent.propDecorators = {
        "audioRef": [{ type: ViewChild, args: ['audio',] },],
        "img": [{ type: Input },],
        "src": [{ type: Input },],
    };
    return BgmComponent;
}());
export { BgmComponent };
//# sourceMappingURL=bgm.js.map