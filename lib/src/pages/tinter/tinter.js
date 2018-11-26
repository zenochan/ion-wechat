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
/**
 * 着色
 */
var TinterPage = /** @class */ (function () {
    function TinterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TinterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TinterPage');
    };
    TinterPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-tinter',
                    templateUrl: 'tinter.html',
                },] },
    ];
    /** @nocollapse */
    TinterPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
    ]; };
    /**
     * 着色
     */
    TinterPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], TinterPage);
    return TinterPage;
}());
export { TinterPage };
//# sourceMappingURL=tinter.js.map