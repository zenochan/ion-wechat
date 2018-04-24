import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UI } from "../../ion-wechat.module";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        UI.showLoading();
    }
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map