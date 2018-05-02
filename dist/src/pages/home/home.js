import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StickyPage } from "../sticky/sticky";
import { TinterPage } from "../tinter/tinter";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pages = [
            StickyPage,
            TinterPage
        ];
        console.log(StickyPage.name);
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