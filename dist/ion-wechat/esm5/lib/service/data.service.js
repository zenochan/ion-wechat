/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { IonWechatModule } from '../ion-wechat.module';
import { Storage } from '@ionic/storage';
import { Wechat } from '../wechat';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/storage";
import * as i2 from "@ionic/angular";
var DataService = /** @class */ (function () {
    function DataService(storage, events) {
        var _this = this;
        this.storage = storage;
        this.events = events;
        this.getUser().then((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            if (_this.user) {
                _this.events.publish('user:ready', _this.user);
            }
        })).catch();
        if (Wechat.getUrlParam('clear')) {
            storage.clear().then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return location.replace(location.href.split('?')[0]); }));
        }
    }
    /**
     * @param {?} user
     * @return {?}
     */
    DataService.prototype.setUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        console.warn('set user');
        this.user = user;
        if (this.user) {
            // *m/7d 有效期
            // this.user.expiresIn = Date.now() + (ENV.DEBUG ? 600000 : 86400000 * 30);
            this.user.expiresIn = Date.now() + (IonWechatModule.ENV.debug ? 1000 : 86400000 * 7);
            this.events.publish('user:ready', this.user);
        }
        return this.storage.set(DataService.KEY_USER, user);
    };
    /**
     * @return {?}
     */
    DataService.prototype.getUser = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.user) {
            return Promise.resolve(this.user);
        }
        else {
            return this.storage.get(DataService.KEY_USER)
                .then((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                if (user && user.expiresIn < Date.now()) {
                    _this.storage.remove(DataService.KEY_USER);
                    return null;
                }
                _this.user = user;
                return _this.user;
            }));
        }
    };
    /**
     * @return {?}
     */
    DataService.prototype.getUserSync = /**
     * @return {?}
     */
    function () {
        return this.user;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DataService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.storage.get(key);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DataService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        return this.storage.set(key, value);
    };
    /**
     * @param {?} action
     * @param {?=} event
     * @return {?}
     */
    DataService.prototype.doOnUserReady = /**
     * @param {?} action
     * @param {?=} event
     * @return {?}
     */
    function (action, event) {
        var _this = this;
        if (event === void 0) { event = 'user:ready'; }
        this.getUser().then((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            _this.user = _this.user || user;
            if (_this.user) {
                action(_this.user);
                console.warn('user ready');
            }
            else {
                /** @type {?} */
                var handler_1 = (/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    action(res);
                    _this.events.unsubscribe(event, handler_1);
                });
                _this.events.subscribe(event, handler_1);
                console.warn('user no ready');
            }
        }));
    };
    DataService.KEY_USER = 'user';
    DataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: Storage },
        { type: Events }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.Storage), i0.ɵɵinject(i2.Events)); }, token: DataService, providedIn: "root" });
    return DataService;
}());
export { DataService };
if (false) {
    /** @type {?} */
    DataService.KEY_USER;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.user;
    /** @type {?} */
    DataService.prototype.storage;
    /** @type {?} */
    DataService.prototype.events;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXdlY2hhdC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sV0FBVyxDQUFDOzs7O0FBSWpDO0lBUUUscUJBQW1CLE9BQWdCLEVBQVMsTUFBYztRQUExRCxpQkFXQztRQVhrQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV4RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsSUFBSTtZQUN0QixJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRVgsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTdDLENBQTZDLEVBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7Ozs7O0lBR0QsNkJBQU87Ozs7SUFBUCxVQUFR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O0lBQ0wsQ0FBQztJQTlFTSxvQkFBUSxHQUFHLE1BQU0sQ0FBQzs7Z0JBTDFCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUE8sT0FBTztnQkFGUCxNQUFNOzs7c0JBRGQ7Q0E2RkMsQUFyRkQsSUFxRkM7U0FsRlksV0FBVzs7O0lBRXRCLHFCQUF5Qjs7Ozs7SUFDekIsMkJBQWtCOztJQUVOLDhCQUF1Qjs7SUFBRSw2QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFdmVudHN9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7SW9uV2VjaGF0TW9kdWxlfSBmcm9tICcuLi9pb24td2VjaGF0Lm1vZHVsZSc7XG5pbXBvcnQge1N0b3JhZ2V9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7V2VjaGF0fSBmcm9tICcuLi93ZWNoYXQnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZVxue1xuICBzdGF0aWMgS0VZX1VTRVIgPSAndXNlcic7XG4gIHByaXZhdGUgdXNlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgZXZlbnRzOiBFdmVudHMpXG4gIHtcbiAgICB0aGlzLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCd1c2VyOnJlYWR5JywgdGhpcy51c2VyKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgpO1xuXG4gICAgaWYgKFdlY2hhdC5nZXRVcmxQYXJhbSgnY2xlYXInKSkge1xuICAgICAgc3RvcmFnZS5jbGVhcigpLnRoZW4ocmVzID0+IGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdKSk7XG4gICAgfVxuICB9XG5cblxuICBzZXRVc2VyKHVzZXI6IGFueSk6IFByb21pc2U8YW55PlxuICB7XG4gICAgY29uc29sZS53YXJuKCdzZXQgdXNlcicpO1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgLy8gKm0vN2Qg5pyJ5pWI5pyfXG4gICAgICAvLyB0aGlzLnVzZXIuZXhwaXJlc0luID0gRGF0ZS5ub3coKSArIChFTlYuREVCVUcgPyA2MDAwMDAgOiA4NjQwMDAwMCAqIDMwKTtcbiAgICAgIHRoaXMudXNlci5leHBpcmVzSW4gPSBEYXRlLm5vdygpICsgKElvbldlY2hhdE1vZHVsZS5FTlYuZGVidWcgPyAxMDAwIDogODY0MDAwMDAgKiA3KTtcbiAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3VzZXI6cmVhZHknLCB0aGlzLnVzZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnNldChEYXRhU2VydmljZS5LRVlfVVNFUiwgdXNlcik7XG4gIH1cblxuICBnZXRVc2VyKCk6IFByb21pc2U8YW55PlxuICB7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnVzZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldChEYXRhU2VydmljZS5LRVlfVVNFUilcbiAgICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIuZXhwaXJlc0luIDwgRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKERhdGFTZXJ2aWNlLktFWV9VU0VSKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcjtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRVc2VyU3luYygpOiBhbnlcbiAge1xuICAgIHJldHVybiB0aGlzLnVzZXI7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT5cbiAge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KGtleSk7XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT5cbiAge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0KGtleSwgdmFsdWUpO1xuICB9XG5cbiAgZG9PblVzZXJSZWFkeShhY3Rpb246ICh1c2VyOiBhbnkpID0+IHZvaWQsIGV2ZW50OiBzdHJpbmcgPSAndXNlcjpyZWFkeScpXG4gIHtcbiAgICB0aGlzLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgdGhpcy51c2VyID0gdGhpcy51c2VyIHx8IHVzZXI7XG4gICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgIGFjdGlvbih0aGlzLnVzZXIpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ3VzZXIgcmVhZHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAocmVzKSA9PiB7XG4gICAgICAgICAgYWN0aW9uKHJlcyk7XG4gICAgICAgICAgdGhpcy5ldmVudHMudW5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ3VzZXIgbm8gcmVhZHknKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=