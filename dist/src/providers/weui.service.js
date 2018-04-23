"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ionic_angular_1 = require("ionic-angular");
/*
 Generated class for the UikitService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var WeuiService = /** @class */ (function () {
    function WeuiService(loadingCtrl, alertCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    WeuiService.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <div>\n        <div class=\"weui-mask_transparent\"></div>\n        <div class=\"weui-toast\">\n            <i class=\"weui-loading weui-icon_toast\"></i>\n            <p class=\"weui-toast__content\">\u6570\u636E\u52A0\u8F7D\u4E2D</p>\n        </div>\n    </div>\n"
        });
        loading.present();
        return loading;
    };
    WeuiService.prototype.toastShort = function (message, position) {
        return this.toast({ message: message, position: position || "top", duration: 2000 });
    };
    WeuiService.prototype.toast = function (options) {
        return this.toastCtrl.create(options).present();
    };
    WeuiService.prototype.alert = function (message, ok, action, title) {
        if (title === void 0) { title = '提示'; }
        return this.alertCtrl.create({
            enableBackdropDismiss: false,
            title: title,
            message: message,
            buttons: [{
                    text: ok || "好",
                    handler: action
                }]
        }).present();
    };
    WeuiService.prototype.input = function (options) {
        return this.alertCtrl.create({
            enableBackdropDismiss: false,
            title: options.title || "提示",
            message: options.message,
            inputs: [{
                    name: "input",
                    placeholder: options.placeholder,
                    type: options.type
                }],
            buttons: [{
                    text: "取消"
                }, {
                    text: options.ok || "好",
                    handler: function (data) { return options.action && options.action(data.input); }
                }]
        }).present();
    };
    WeuiService.prototype.prompt = function (message, ok, cancel, action) {
        return this.alertCtrl.create({
            title: "提示", message: message, buttons: [{
                    text: cancel || "取消"
                }, {
                    text: ok || "好",
                    handler: action
                }]
        }).present();
    };
    WeuiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ionic_angular_1.LoadingController,
            ionic_angular_1.AlertController,
            ionic_angular_1.ToastController])
    ], WeuiService);
    return WeuiService;
}());
exports.WeuiService = WeuiService;
//# sourceMappingURL=weui.service.js.map