/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/toolbar/toolbar-header";
import * as i2 from "ionic-angular/config/config";
import * as i3 from "ionic-angular/navigation/view-controller";
import * as i4 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i5 from "ionic-angular/components/toolbar/navbar";
import * as i6 from "ionic-angular/components/app/app";
import * as i7 from "ionic-angular/navigation/nav-controller";
import * as i8 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i9 from "ionic-angular/components/toolbar/toolbar-title";
import * as i10 from "ionic-angular/components/toolbar/toolbar";
import * as i11 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i12 from "ionic-angular/components/content/content";
import * as i13 from "ionic-angular/platform/platform";
import * as i14 from "ionic-angular/platform/dom-controller";
import * as i15 from "ionic-angular/platform/keyboard";
import * as i16 from "./media-player";
import * as i17 from "ionic-angular/navigation/nav-params";
var styles_MediaPlayerPage = [];
var RenderType_MediaPlayerPage = i0.ɵcrt({ encapsulation: 2, styles: styles_MediaPlayerPage, data: {} });
export { RenderType_MediaPlayerPage as RenderType_MediaPlayerPage };
export function View_MediaPlayerPage_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { video: 0 }), i0.ɵqud(402653184, 2, { muteButton: 0 }), i0.ɵqud(402653184, 3, { fullScreenButton: 0 }), i0.ɵqud(402653184, 4, { seekBar: 0 }), i0.ɵqud(402653184, 5, { volumeBar: 0 }), (_l()(), i0.ɵeld(5, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), i0.ɵdid(6, 16384, null, 0, i1.Header, [i2.Config, i0.ElementRef, i0.Renderer, [2, i3.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(8, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i4.View_Navbar_0, i4.RenderType_Navbar)), i0.ɵdid(9, 49152, null, 0, i5.Navbar, [i6.App, [2, i3.ViewController], [2, i7.NavController], i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(11, 0, null, 3, 2, "ion-title", [], null, null, null, i8.View_ToolbarTitle_0, i8.RenderType_ToolbarTitle)), i0.ɵdid(12, 49152, null, 0, i9.ToolbarTitle, [i2.Config, i0.ElementRef, i0.Renderer, [2, i10.Toolbar], [2, i5.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["media-player"])), (_l()(), i0.ɵted(-1, 3, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(17, 0, null, null, 34, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i11.View_Content_0, i11.RenderType_Content)), i0.ɵdid(18, 4374528, null, 0, i12.Content, [i2.Config, i13.Platform, i14.DomController, i0.ElementRef, i0.Renderer, i6.App, i15.Keyboard, i0.NgZone, [2, i3.ViewController], [2, i7.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵeld(20, 0, null, 1, 30, "div", [["id", "video-container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(23, 0, [[1, 0], ["video", 1]], null, 9, "video", [["style", "width: 100vw;height: 46vw"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(25, 0, null, null, 0, "source", [["src", "http://7xje5h.com1.z0.glb.clouddn.com/dazhaxie.mp4"], ["type", "video/mp4"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(27, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        Your browser doesn't support HTML5 video.\n        "])), (_l()(), i0.ɵeld(29, 0, null, null, 1, "a", [["href", "http://7xje5h.com1.z0.glb.clouddn.com/dazhaxie.mp4"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Download"])), (_l()(), i0.ɵted(-1, null, [" the video instead.\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(35, 0, null, null, 14, "div", [["id", "video-controls"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(37, 0, null, null, 1, "button", [["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.togglePlay() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(38, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(40, 0, null, null, 0, "input", [["id", "seek-bar"], ["type", "range"], ["value", "0"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(42, 0, null, null, 1, "button", [["id", "mute"], ["type", "button"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Mute"])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(45, 0, null, null, 0, "input", [["id", "volume-bar"], ["max", "1"], ["min", "0"], ["step", "0.1"], ["type", "range"], ["value", "1"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(47, 0, null, null, 1, "button", [["id", "full-screen"], ["type", "button"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Full-Screen"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 9)._hidden; var currVal_1 = i0.ɵnov(_v, 9)._sbPadding; _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 18).statusbarPadding; var currVal_3 = i0.ɵnov(_v, 18)._hasRefresher; _ck(_v, 17, 0, currVal_2, currVal_3); var currVal_4 = _co.playButtonText; _ck(_v, 38, 0, currVal_4); }); }
export function View_MediaPlayerPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-media-player", [], null, null, null, View_MediaPlayerPage_0, RenderType_MediaPlayerPage)), i0.ɵdid(1, 49152, null, 0, i16.MediaPlayerPage, [i7.NavController, i17.NavParams], null, null)], null, null); }
var MediaPlayerPageNgFactory = i0.ɵccf("page-media-player", i16.MediaPlayerPage, View_MediaPlayerPage_Host_0, {}, {}, []);
export { MediaPlayerPageNgFactory as MediaPlayerPageNgFactory };
//# sourceMappingURL=media-player.ngfactory.js.map