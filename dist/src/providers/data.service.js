import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Storage } from "@ionic/storage";
import { Events } from "ionic-angular";
var ENV = { DEBUG: false };
/*
 Generated class for the DataService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var DataService = /** @class */ (function () {
    function DataService(storage, events) {
        var _this = this;
        this.storage = storage;
        this.events = events;
        this.getUser().then(function (user) {
            if (_this.user)
                _this.events.publish("user:ready", _this.user);
        }).catch();
    }
    DataService.prototype.setUser = function (user) {
        console.warn("set user");
        this.user = user;
        if (this.user) {
            // *m/7d 有效期
            // this.user.expiresIn = Date.now() + (ENV.DEBUG ? 600000 : 86400000 * 30);
            this.user.expiresIn = Date.now() + (ENV.DEBUG ? 1000 : 86400000 * 7);
            this.events.publish("user:ready", this.user);
        }
        this.storage.set(DataService.KEY_USER, user);
    };
    DataService.prototype.getUser = function () {
        var _this = this;
        if (this.user) {
            return Promise.resolve(this.user);
        }
        else {
            return this.storage.get(DataService.KEY_USER)
                .then(function (user) {
                if (user && user.expiresIn < Date.now()) {
                    _this.storage.remove(DataService.KEY_USER);
                    return null;
                }
                _this.user = user;
                return _this.user;
            });
        }
    };
    DataService.prototype.getUserSync = function () {
        return this.user;
    };
    DataService.prototype.get = function (key) {
        return this.storage.get(key);
    };
    DataService.prototype.set = function (key, value) {
        return this.storage.set(key, value);
    };
    DataService.prototype.doOnUserReady = function (action, event) {
        var _this = this;
        if (event === void 0) { event = "user:ready"; }
        this.getUser().then(function (user) {
            _this.user = _this.user || user;
            if (_this.user) {
                action(_this.user);
                console.warn("user ready");
            }
            else {
                var handler_1 = function (user) {
                    action(user);
                    _this.events.unsubscribe(event, handler_1);
                };
                _this.events.subscribe(event, handler_1);
                console.warn("user no ready");
            }
        });
    };
    DataService.KEY_USER = 'user';
    DataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: Storage, },
        { type: Events, },
    ]; };
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map