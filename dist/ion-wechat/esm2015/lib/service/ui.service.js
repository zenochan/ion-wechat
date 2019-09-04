/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class UiService {
    /**
     * @param {?} modal
     * @param {?} popover
     * @param {?} actionSheet
     * @param {?} loadingCtrl
     * @param {?} alertCtrl
     * @param {?} toastCtrl
     */
    constructor(modal, popover, actionSheet, loadingCtrl, alertCtrl, toastCtrl) {
        this.modal = modal;
        this.popover = popover;
        this.actionSheet = actionSheet;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    //   showLoading(): Loading
    //   {
    //     const loading = this.loadingCtrl.create({
    //       spinner: 'hide',
    //       content: `
    //       <div>
    //         <div class="weui-mask_transparent"></div>
    //         <div class="weui-toast">
    //             <i class="weui-loading weui-icon_toast"></i>
    //             <p class="weui-toast__content">数据加载中</p>
    //         </div>
    //     </div>
    // `
    //     });
    //
    //     loading.then();
    //     return loading;
    //   }
    //
    /**
     * @param {?} message
     * @param {?=} position
     * @return {?}
     */
    toastShort(message, position) {
        return this.toast({ message, position: position || 'top', duration: 2000 });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    toast(options) {
        return this.toastCtrl.create(options).then((/**
         * @param {?} toast
         * @return {?}
         */
        toast => {
            toast.present();
        }));
    }
}
UiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UiService.ctorParameters = () => [
    { type: ModalController },
    { type: PopoverController },
    { type: ActionSheetController },
    { type: LoadingController },
    { type: AlertController },
    { type: ToastController }
];
/** @nocollapse */ UiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UiService_Factory() { return new UiService(i0.ɵɵinject(i1.ModalController), i0.ɵɵinject(i1.PopoverController), i0.ɵɵinject(i1.ActionSheetController), i0.ɵɵinject(i1.LoadingController), i0.ɵɵinject(i1.AlertController), i0.ɵɵinject(i1.ToastController)); }, token: UiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UiService.prototype.modal;
    /** @type {?} */
    UiService.prototype.popover;
    /** @type {?} */
    UiService.prototype.actionSheet;
    /**
     * @type {?}
     * @private
     */
    UiService.prototype.loadingCtrl;
    /**
     * @type {?}
     * @private
     */
    UiService.prototype.alertCtrl;
    /**
     * @type {?}
     * @private
     */
    UiService.prototype.toastCtrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi13ZWNoYXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS91aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDaEIsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTXhCLE1BQU0sT0FBTyxTQUFTOzs7Ozs7Ozs7SUFFcEIsWUFDVyxLQUFzQixFQUN0QixPQUEwQixFQUMxQixXQUFrQyxFQUNqQyxXQUE4QixFQUM5QixTQUEwQixFQUMxQixTQUEwQjtRQUwzQixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQWlCO0lBRXBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkgsVUFBVSxDQUFDLE9BQWUsRUFBRSxRQUFzQztRQUVoRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsSUFBSSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBcUI7UUFFekIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBNUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJDLGVBQWU7WUFDZixpQkFBaUI7WUFKakIscUJBQXFCO1lBRXJCLGlCQUFpQjtZQURqQixlQUFlO1lBSWYsZUFBZTs7Ozs7SUFVWCwwQkFBNkI7O0lBQzdCLDRCQUFpQzs7SUFDakMsZ0NBQXlDOzs7OztJQUN6QyxnQ0FBc0M7Ozs7O0lBQ3RDLDhCQUFrQzs7Ozs7SUFDbEMsOEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGlvblNoZWV0Q29udHJvbGxlcixcbiAgQWxlcnRDb250cm9sbGVyLFxuICBMb2FkaW5nQ29udHJvbGxlcixcbiAgTW9kYWxDb250cm9sbGVyLFxuICBQb3BvdmVyQ29udHJvbGxlcixcbiAgVG9hc3RDb250cm9sbGVyXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlciwgQ29sb3IsIE1vZGUsIFRvYXN0QnV0dG9uLCBUb2FzdE9wdGlvbnN9IGZyb20gJ0Bpb25pYy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVWlTZXJ2aWNlXG57XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG1vZGFsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgICBwdWJsaWMgcG9wb3ZlcjogUG9wb3ZlckNvbnRyb2xsZXIsXG4gICAgICBwdWJsaWMgYWN0aW9uU2hlZXQ6IEFjdGlvblNoZWV0Q29udHJvbGxlcixcbiAgICAgIHByaXZhdGUgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLFxuICAgICAgcHJpdmF0ZSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICAgIHByaXZhdGUgdG9hc3RDdHJsOiBUb2FzdENvbnRyb2xsZXJcbiAgKVxuICB7IH1cblxuLy8gICBzaG93TG9hZGluZygpOiBMb2FkaW5nXG4vLyAgIHtcbi8vICAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuLy8gICAgICAgc3Bpbm5lcjogJ2hpZGUnLFxuLy8gICAgICAgY29udGVudDogYFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIndldWktbWFza190cmFuc3BhcmVudFwiPjwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwid2V1aS10b2FzdFwiPlxuLy8gICAgICAgICAgICAgPGkgY2xhc3M9XCJ3ZXVpLWxvYWRpbmcgd2V1aS1pY29uX3RvYXN0XCI+PC9pPlxuLy8gICAgICAgICAgICAgPHAgY2xhc3M9XCJ3ZXVpLXRvYXN0X19jb250ZW50XCI+5pWw5o2u5Yqg6L295LitPC9wPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vIGBcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgbG9hZGluZy50aGVuKCk7XG4vLyAgICAgcmV0dXJuIGxvYWRpbmc7XG4vLyAgIH1cbi8vXG4gIHRvYXN0U2hvcnQobWVzc2FnZTogc3RyaW5nLCBwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbScgfCAnbWlkZGxlJyk6IFByb21pc2U8YW55PlxuICB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3Qoe21lc3NhZ2UsIHBvc2l0aW9uOiBwb3NpdGlvbiB8fCAndG9wJywgZHVyYXRpb246IDIwMDB9KTtcbiAgfVxuXG4gIHRvYXN0KG9wdGlvbnM6IFRvYXN0T3B0aW9ucyk6IFByb21pc2U8YW55PlxuICB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3RDdHJsLmNyZWF0ZShvcHRpb25zKS50aGVuKHRvYXN0ID0+IHtcbiAgICAgIHRvYXN0LnByZXNlbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4vLyBhbGVydChtZXNzYWdlOiBzdHJpbmcsIG9rPzogc3RyaW5nLCBhY3Rpb24/OiAoKSA9PiB2b2lkLCB0aXRsZTogc3RyaW5nID0gJ+aPkOekuicpOiBQcm9taXNlPGFueT5cbi8vIHtcbi8vICAgcmV0dXJuIHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4vLyAgICAgZW5hYmxlQmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcbi8vICAgICB0aXRsZTogdGl0bGUsXG4vLyAgICAgbWVzc2FnZTogbWVzc2FnZSxcbi8vICAgICBidXR0b25zOiBbe1xuLy8gICAgICAgdGV4dDogb2sgfHwgJ+WlvScsXG4vLyAgICAgICBoYW5kbGVyOiBhY3Rpb25cbi8vICAgICB9XVxuLy8gICB9KS5wcmVzZW50KCk7XG4vLyB9XG5cblxuLy8gaW5wdXQob3B0aW9uczoge1xuLy8gICB0aXRsZT86IHN0cmluZyxcbi8vICAgbWVzc2FnZT86IHN0cmluZyxcbi8vICAgb2s/OiBzdHJpbmcsXG4vLyAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuLy8gICB0eXBlPzogc3RyaW5nLFxuLy8gICBhY3Rpb24/OiAoaW5wdXQ6IHN0cmluZykgPT4gdm9pZCxcbi8vIH0pOiBQcm9taXNlPGFueT5cbi8vIHtcbi8vICAgcmV0dXJuIHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4vLyAgICAgZW5hYmxlQmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcbi8vICAgICB0aXRsZTogb3B0aW9ucy50aXRsZSB8fCAn5o+Q56S6Jyxcbi8vICAgICBtZXNzYWdlOiBvcHRpb25zLm1lc3NhZ2UsXG4vLyAgICAgaW5wdXRzOiBbe1xuLy8gICAgICAgbmFtZTogJ2lucHV0Jyxcbi8vICAgICAgIHBsYWNlaG9sZGVyOiBvcHRpb25zLnBsYWNlaG9sZGVyLFxuLy8gICAgICAgdHlwZTogb3B0aW9ucy50eXBlXG4vLyAgICAgfV0sXG4vLyAgICAgYnV0dG9uczogW3tcbi8vICAgICAgIHRleHQ6ICflj5bmtognXG4vLyAgICAgfSwge1xuLy8gICAgICAgdGV4dDogb3B0aW9ucy5vayB8fCAn5aW9Jyxcbi8vICAgICAgIGhhbmRsZXI6IGRhdGEgPT4gb3B0aW9ucy5hY3Rpb24gJiYgb3B0aW9ucy5hY3Rpb24oZGF0YS5pbnB1dClcbi8vICAgICB9XVxuLy8gICB9KS5wcmVzZW50KCk7XG4vLyB9XG5cbi8vIHByb21wdChtZXNzYWdlOiBzdHJpbmcsIG9rPzogc3RyaW5nLCBjYW5jZWw/OiBzdHJpbmcsIGFjdGlvbj86ICgpID0+IHZvaWQpOiBQcm9taXNlPGFueT5cbi8vIHtcbi8vICAgcmV0dXJuIHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4vLyAgICAgdGl0bGU6ICfmj5DnpLonLCBtZXNzYWdlOiBtZXNzYWdlLCBidXR0b25zOiBbe1xuLy8gICAgICAgdGV4dDogY2FuY2VsIHx8ICflj5bmtognXG4vLyAgICAgfSwge1xuLy8gICAgICAgdGV4dDogb2sgfHwgJ+WlvScsXG4vLyAgICAgICBoYW5kbGVyOiBhY3Rpb25cbi8vICAgICB9XVxuLy8gICB9KS5wcmVzZW50KCk7XG4vL1xuLy8gfVxuXG59XG4iXX0=