/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../../../node_modules/ionic-angular/components/item/item.ngfactory";
import * as i2 from "ionic-angular/components/item/item";
import * as i3 from "ionic-angular/util/form";
import * as i4 from "ionic-angular/config/config";
import * as i5 from "ionic-angular/components/item/item-reorder";
import * as i6 from "ionic-angular/components/item/item-content";
import * as i7 from "ionic-angular/components/toolbar/toolbar-header";
import * as i8 from "ionic-angular/navigation/view-controller";
import * as i9 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i10 from "ionic-angular/components/toolbar/navbar";
import * as i11 from "ionic-angular/components/app/app";
import * as i12 from "ionic-angular/navigation/nav-controller";
import * as i13 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i14 from "ionic-angular/components/toolbar/toolbar-title";
import * as i15 from "ionic-angular/components/toolbar/toolbar";
import * as i16 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i17 from "ionic-angular/components/content/content";
import * as i18 from "ionic-angular/platform/platform";
import * as i19 from "ionic-angular/platform/dom-controller";
import * as i20 from "ionic-angular/platform/keyboard";
import * as i21 from "../../components/rich-text/rich-text.ngfactory";
import * as i22 from "../../components/rich-text/rich-text";
import * as i23 from "ionic-angular/components/list/list";
import * as i24 from "ionic-angular/gestures/gesture-controller";
import * as i25 from "@angular/common";
import * as i26 from "./home";
var styles_HomePage = [];
var RenderType_HomePage = i0.ɵcrt({ encapsulation: 2, styles: styles_HomePage, data: {} });
export { RenderType_HomePage as RenderType_HomePage };
function View_HomePage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "ion-item", [["class", "item item-block"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navCtrl.push(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 1, { contentLabel: 0 }), i0.ɵqud(603979776, 2, { _buttons: 1 }), i0.ɵqud(603979776, 3, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(6, 2, ["\n      ", "\n    "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 6, 0, currVal_0); }); }
export function View_HomePage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i7.Header, [i4.Config, i0.ElementRef, i0.Renderer, [2, i8.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i9.View_Navbar_0, i9.RenderType_Navbar)), i0.ɵdid(4, 49152, null, 0, i10.Navbar, [i11.App, [2, i8.ViewController], [2, i12.NavController], i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(6, 0, null, 3, 2, "ion-title", [], null, null, null, i13.View_ToolbarTitle_0, i13.RenderType_ToolbarTitle)), i0.ɵdid(7, 49152, null, 0, i14.ToolbarTitle, [i4.Config, i0.ElementRef, i0.Renderer, [2, i15.Toolbar], [2, i10.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["\n      IonicWechat\n    "])), (_l()(), i0.ɵted(-1, 3, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(12, 0, null, null, 12, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i16.View_Content_0, i16.RenderType_Content)), i0.ɵdid(13, 4374528, null, 0, i17.Content, [i4.Config, i18.Platform, i19.DomController, i0.ElementRef, i0.Renderer, i11.App, i20.Keyboard, i0.NgZone, [2, i8.ViewController], [2, i12.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵeld(15, 0, null, 1, 1, "rich-text", [["src", "234"]], null, null, null, i21.View_RichTextComponent_0, i21.RenderType_RichTextComponent)), i0.ɵdid(16, 49152, null, 0, i22.RichTextComponent, [], { src: [0, "src"] }, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵeld(18, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), i0.ɵdid(19, 16384, null, 0, i23.List, [i4.Config, i0.ElementRef, i0.Renderer, i18.Platform, i24.GestureController, i19.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HomePage_1)), i0.ɵdid(22, 802816, null, 0, i25.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = "234"; _ck(_v, 16, 0, currVal_4); var currVal_5 = _co.pages; _ck(_v, 22, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 4)._hidden; var currVal_1 = i0.ɵnov(_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 13).statusbarPadding; var currVal_3 = i0.ɵnov(_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); }); }
export function View_HomePage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), i0.ɵdid(1, 49152, null, 0, i26.HomePage, [i12.NavController], null, null)], null, null); }
var HomePageNgFactory = i0.ɵccf("page-home", i26.HomePage, View_HomePage_Host_0, {}, {}, []);
export { HomePageNgFactory as HomePageNgFactory };
//# sourceMappingURL=home.ngfactory.js.map