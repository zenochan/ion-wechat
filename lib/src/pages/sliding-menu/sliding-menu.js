var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaPlayerPage } from "../media-player/media-player";
import { StickyPage } from "../sticky/sticky";
import { TinterPage } from "../tinter/tinter";
/**
 * Generated class for the SlidingMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidingMenuPage = /** @class */ (function () {
    function SlidingMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.root1 = StickyPage;
        this.root2 = TinterPage;
        this.root3 = MediaPlayerPage;
        this.showMenu = false;
    }
    SlidingMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlidingMenuPage');
    };
    SlidingMenuPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-sliding-menu',
                    templateUrl: 'sliding-menu.html',
                },] },
    ];
    /** @nocollapse */
    SlidingMenuPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
    ]; };
    /**
     * Generated class for the SlidingMenuPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    SlidingMenuPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SlidingMenuPage);
    return SlidingMenuPage;
}());
export { SlidingMenuPage };
//# sourceMappingURL=sliding-menu.js.map