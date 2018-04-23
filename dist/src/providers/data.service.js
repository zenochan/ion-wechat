var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
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
    DataService_1 = DataService;
    DataService.prototype.setUser = function (user) {
        console.warn("set user");
        this.user = user;
        if (this.user) {
            // *m/7d 有效期
            // this.user.expiresIn = Date.now() + (ENV.DEBUG ? 600000 : 86400000 * 30);
            this.user.expiresIn = Date.now() + (ENV.DEBUG ? 1000 : 86400000 * 7);
            this.events.publish("user:ready", this.user);
        }
        this.storage.set(DataService_1.KEY_USER, user);
    };
    DataService.prototype.getUser = function () {
        var _this = this;
        if (this.user) {
            return Promise.resolve(this.user);
        }
        else {
            return this.storage.get(DataService_1.KEY_USER)
                .then(function (user) {
                if (user && user.expiresIn < Date.now()) {
                    _this.storage.remove(DataService_1.KEY_USER);
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
        if (event === void 0) { event = "user:ready"; }
        if (this.user) {
            action(this.user);
            console.warn("user ready");
        }
        else {
            this.events.subscribe(event, action);
            console.warn("user no ready");
        }
    };
    DataService.KEY_USER = 'user';
    DataService = DataService_1 = __decorate([
        Injectable()
    ], DataService);
    return DataService;
    var DataService_1;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map