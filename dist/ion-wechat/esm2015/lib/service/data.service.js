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
export class DataService {
    /**
     * @param {?} storage
     * @param {?} events
     */
    constructor(storage, events) {
        this.storage = storage;
        this.events = events;
        this.getUser().then((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            if (this.user) {
                this.events.publish('user:ready', this.user);
            }
        })).catch();
        if (Wechat.getUrlParam('clear')) {
            storage.clear().then((/**
             * @param {?} res
             * @return {?}
             */
            res => location.replace(location.href.split('?')[0])));
        }
    }
    /**
     * @param {?} user
     * @return {?}
     */
    setUser(user) {
        console.warn('set user');
        this.user = user;
        if (this.user) {
            // *m/7d 有效期
            // this.user.expiresIn = Date.now() + (ENV.DEBUG ? 600000 : 86400000 * 30);
            this.user.expiresIn = Date.now() + (IonWechatModule.ENV.debug ? 1000 : 86400000 * 7);
            this.events.publish('user:ready', this.user);
        }
        return this.storage.set(DataService.KEY_USER, user);
    }
    /**
     * @return {?}
     */
    getUser() {
        if (this.user) {
            return Promise.resolve(this.user);
        }
        else {
            return this.storage.get(DataService.KEY_USER)
                .then((/**
             * @param {?} user
             * @return {?}
             */
            user => {
                if (user && user.expiresIn < Date.now()) {
                    this.storage.remove(DataService.KEY_USER);
                    return null;
                }
                this.user = user;
                return this.user;
            }));
        }
    }
    /**
     * @return {?}
     */
    getUserSync() {
        return this.user;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.storage.get(key);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        return this.storage.set(key, value);
    }
    /**
     * @param {?} action
     * @param {?=} event
     * @return {?}
     */
    doOnUserReady(action, event = 'user:ready') {
        this.getUser().then((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            this.user = this.user || user;
            if (this.user) {
                action(this.user);
                console.warn('user ready');
            }
            else {
                /** @type {?} */
                const handler = (/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => {
                    action(res);
                    this.events.unsubscribe(event, handler);
                });
                this.events.subscribe(event, handler);
                console.warn('user no ready');
            }
        }));
    }
}
DataService.KEY_USER = 'user';
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: Storage },
    { type: Events }
];
/** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.Storage), i0.ɵɵinject(i2.Events)); }, token: DataService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXdlY2hhdC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sV0FBVyxDQUFDOzs7O0FBT2pDLE1BQU0sT0FBTyxXQUFXOzs7OztJQUt0QixZQUFtQixPQUFnQixFQUFTLE1BQWM7UUFBdkMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFeEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRVgsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7Ozs7O0lBR0QsT0FBTyxDQUFDLElBQVM7UUFF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QUNuQjs7OztZQVBPLE9BQU87WUFGUCxNQUFNOzs7OztJQVlaLHFCQUF5Qjs7Ozs7SUFDekIsMkJBQWtCOztJQUVOLDhCQUF1Qjs7SUFBRSw2QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFdmVudHN9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7SW9uV2VjaGF0TW9kdWxlfSBmcm9tICcuLi9pb24td2VjaGF0Lm1vZHVsZSc7XG5pbXBvcnQge1N0b3JhZ2V9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7V2VjaGF0fSBmcm9tICcuLi93ZWNoYXQnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZVxue1xuICBzdGF0aWMgS0VZX1VTRVIgPSAndXNlcic7XG4gIHByaXZhdGUgdXNlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgZXZlbnRzOiBFdmVudHMpXG4gIHtcbiAgICB0aGlzLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCd1c2VyOnJlYWR5JywgdGhpcy51c2VyKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgpO1xuXG4gICAgaWYgKFdlY2hhdC5nZXRVcmxQYXJhbSgnY2xlYXInKSkge1xuICAgICAgc3RvcmFnZS5jbGVhcigpLnRoZW4ocmVzID0+IGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdKSk7XG4gICAgfVxuICB9XG5cblxuICBzZXRVc2VyKHVzZXI6IGFueSk6IFByb21pc2U8YW55PlxuICB7XG4gICAgY29uc29sZS53YXJuKCdzZXQgdXNlcicpO1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgLy8gKm0vN2Qg5pyJ5pWI5pyfXG4gICAgICAvLyB0aGlzLnVzZXIuZXhwaXJlc0luID0gRGF0ZS5ub3coKSArIChFTlYuREVCVUcgPyA2MDAwMDAgOiA4NjQwMDAwMCAqIDMwKTtcbiAgICAgIHRoaXMudXNlci5leHBpcmVzSW4gPSBEYXRlLm5vdygpICsgKElvbldlY2hhdE1vZHVsZS5FTlYuZGVidWcgPyAxMDAwIDogODY0MDAwMDAgKiA3KTtcbiAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3VzZXI6cmVhZHknLCB0aGlzLnVzZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnNldChEYXRhU2VydmljZS5LRVlfVVNFUiwgdXNlcik7XG4gIH1cblxuICBnZXRVc2VyKCk6IFByb21pc2U8YW55PlxuICB7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnVzZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldChEYXRhU2VydmljZS5LRVlfVVNFUilcbiAgICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIuZXhwaXJlc0luIDwgRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKERhdGFTZXJ2aWNlLktFWV9VU0VSKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcjtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRVc2VyU3luYygpOiBhbnlcbiAge1xuICAgIHJldHVybiB0aGlzLnVzZXI7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT5cbiAge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KGtleSk7XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT5cbiAge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0KGtleSwgdmFsdWUpO1xuICB9XG5cbiAgZG9PblVzZXJSZWFkeShhY3Rpb246ICh1c2VyOiBhbnkpID0+IHZvaWQsIGV2ZW50OiBzdHJpbmcgPSAndXNlcjpyZWFkeScpXG4gIHtcbiAgICB0aGlzLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgdGhpcy51c2VyID0gdGhpcy51c2VyIHx8IHVzZXI7XG4gICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgIGFjdGlvbih0aGlzLnVzZXIpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ3VzZXIgcmVhZHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAocmVzKSA9PiB7XG4gICAgICAgICAgYWN0aW9uKHJlcyk7XG4gICAgICAgICAgdGhpcy5ldmVudHMudW5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ3VzZXIgbm8gcmVhZHknKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=