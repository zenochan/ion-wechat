import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { ActionSheetController, AlertController, LoadingController, ModalController, PopoverController, ToastController } from "ionic-angular";
var WeuiService = /** @class */ (function () {
    function WeuiService(modal, popover, actionSheet, loadingCtrl, alertCtrl, toastCtrl) {
        this.modal = modal;
        this.popover = popover;
        this.actionSheet = actionSheet;
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
    WeuiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WeuiService.ctorParameters = function () { return [
        { type: ModalController, },
        { type: PopoverController, },
        { type: ActionSheetController, },
        { type: LoadingController, },
        { type: AlertController, },
        { type: ToastController, },
    ]; };
    return WeuiService;
}());
export { WeuiService };
//# sourceMappingURL=weui.service.js.map