/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./bgm";
var styles_BgmComponent = [".icon-music-outer[_ngcontent-%COMP%] {\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        position: fixed;\n        right: 5px;\n        top: 10px;\n        font-size: 25px;\n        color: #ffda51;\n        z-index: 999;\n        border-radius: 16px;\n        \n      }\n\n      .icon-music-outer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }\n\n      .forbid[_ngcontent-%COMP%] {\n        display: inline-block;\n        font-size: 25px;\n        width: 25px;\n        height: 25px;\n      }\n\n      .icon-forbidMusic[_ngcontent-%COMP%] {\n        display: inline-block;\n        font-size: 25px;\n        width: 25px;\n        height: 25px;\n        color: #d0f2fc;\n      }\n\n      audio[_ngcontent-%COMP%] {\n        position: absolute;\n        left: -300px;\n      }\n\n      .activeMusic[_ngcontent-%COMP%] {\n        transform: rotate(0);\n        -webkit-animation: musicMove 2s infinite linear;\n        animation: musicMove 2s infinite linear;\n      }\n\n      @-webkit-keyframes musicMove {\n        0% {\n          transform: rotate(0);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n\n      @keyframes musicMove {\n        0% {\n          transform: rotate(0);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }"];
var RenderType_BgmComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_BgmComponent, data: {} });
export { RenderType_BgmComponent as RenderType_BgmComponent };
function View_BgmComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "i", [["class", "forbid icon-music"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.pause() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 0, "img", [["class", "music activeMusic"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.img; _ck(_v, 2, 0, currVal_0); }); }
function View_BgmComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "i", [["class", "forbid icon-forbidMusic"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.play() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 0, "img", [["class", "music"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.img; _ck(_v, 2, 0, currVal_0); }); }
export function View_BgmComponent_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { audioRef: 0 }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 9, "i", [["class", "icon-music-outer"], ["id", "outer"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_BgmComponent_1)), i0.ɵdid(5, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_BgmComponent_2)), i0.ɵdid(8, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n\n      "])), (_l()(), i0.ɵeld(10, 0, [[1, 0], ["audio", 1]], null, 0, "audio", [["autoplay", "autoplay"], ["controls", ""], ["hidden", ""], ["id", "bgMusic"], ["loop", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.playing; _ck(_v, 5, 0, currVal_0); var currVal_1 = !_co.playing; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.src; _ck(_v, 10, 0, currVal_2); }); }
export function View_BgmComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "bgm", [], null, null, null, View_BgmComponent_0, RenderType_BgmComponent)), i0.ɵdid(1, 114688, null, 0, i2.BgmComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BgmComponentNgFactory = i0.ɵccf("bgm", i2.BgmComponent, View_BgmComponent_Host_0, { img: "img", src: "src" }, {}, []);
export { BgmComponentNgFactory as BgmComponentNgFactory };
//# sourceMappingURL=bgm.ngfactory.js.map