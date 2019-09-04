/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, InjectionToken, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { Photo } from './pipes/photo';
import { DataService } from './service/data.service';
import { Wechat } from './wechat';
import * as VConsole from 'vconsole';
import { UiService } from './service/ui.service';
import { Events, IonicModule } from '@ionic/angular';
/** @type {?} */
export const CONFIG = new InjectionToken('IonWechatConfig');
/** @type {?} */
export let UI;
/** @type {?} */
export let DB;
/** @type {?} */
export let IonEvent;
export class IonWechatModule {
    /**
     * @param {?} options
     * @param {?} ui
     * @param {?} data
     * @param {?} events
     */
    constructor(options, ui, data, events) {
        IonWechatModule.ENV.debug = options.debug || false;
        Photo.BASE_URL = options.imgBaseUrl || '';
        DataService.KEY_USER = options.userKey || 'user';
        if (Wechat.getUrlParam('vConsole')) {
            // @ts-ignore
            /** @type {?} */
            const vConsole = new VConsole();
        }
        UI = ui;
        IonEvent = events;
        DB = data;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: IonWechatModule,
            providers: [
                { provide: CONFIG, useValue: options },
            ]
        };
    }
}
IonWechatModule.ENV = { debug: false };
IonWechatModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    IonicModule,
                    IonicStorageModule.forRoot(),
                ]
            },] }
];
/** @nocollapse */
IonWechatModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] },
    { type: UiService },
    { type: DataService },
    { type: Events }
];
if (false) {
    /** @type {?} */
    IonWechatModule.ENV;
}
/**
 * @record
 */
export function Options() { }
if (false) {
    /** @type {?|undefined} */
    Options.prototype.debug;
    /**
     * 存放用户的 key
     * @type {?|undefined}
     */
    Options.prototype.userKey;
    /** @type {?} */
    Options.prototype.imgBaseUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXdlY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24td2VjaGF0LyIsInNvdXJjZXMiOlsibGliL2lvbi13ZWNoYXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsaUJBQWlCLENBQUM7O0FBRTNELE1BQU0sS0FBSyxFQUFFOztBQUNiLE1BQU0sS0FBSyxFQUFlOztBQUMxQixNQUFNLEtBQUssUUFBZ0I7QUFTM0IsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7SUFLMUIsWUFBNEIsT0FBZ0IsRUFBRSxFQUFhLEVBQUUsSUFBaUIsRUFBRSxNQUFjO1FBRTVGLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ25ELEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDMUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQztRQUVqRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUU7OztrQkFFNUIsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFO1NBQ2hDO1FBRUQsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNaLENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFnQjtRQUU3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO2FBQ3JDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBNUJNLG1CQUFHLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7O1lBVDdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2lCQUM3QjthQUNGOzs7OzRDQU1jLE1BQU0sU0FBQyxNQUFNO1lBckJwQixTQUFTO1lBSFQsV0FBVztZQUlYLE1BQU07Ozs7SUFpQlosb0JBQTRCOzs7OztBQStCOUIsNkJBUUM7OztJQU5DLHdCQUFnQjs7Ozs7SUFJaEIsMEJBQWlCOztJQUNqQiw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW9uaWNTdG9yYWdlTW9kdWxlfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQge1Bob3RvfSBmcm9tICcuL3BpcGVzL3Bob3RvJztcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4vc2VydmljZS9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtXZWNoYXR9IGZyb20gJy4vd2VjaGF0JztcbmltcG9ydCAqIGFzIFZDb25zb2xlIGZyb20gJ3Zjb25zb2xlJztcbmltcG9ydCB7VWlTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvdWkuc2VydmljZSc7XG5pbXBvcnQge0V2ZW50cywgSW9uaWNNb2R1bGV9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuZXhwb3J0IGNvbnN0IENPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbignSW9uV2VjaGF0Q29uZmlnJyk7XG5cbmV4cG9ydCBsZXQgVUk7XG5leHBvcnQgbGV0IERCOiBEYXRhU2VydmljZTtcbmV4cG9ydCBsZXQgSW9uRXZlbnQ6IEV2ZW50cztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIElvbmljTW9kdWxlLFxuICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KCksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW9uV2VjaGF0TW9kdWxlXG57XG4gIHN0YXRpYyBFTlYgPSB7ZGVidWc6IGZhbHNlfTtcblxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ09ORklHKSBvcHRpb25zOiBPcHRpb25zLCB1aTogVWlTZXJ2aWNlLCBkYXRhOiBEYXRhU2VydmljZSwgZXZlbnRzOiBFdmVudHMpXG4gIHtcbiAgICBJb25XZWNoYXRNb2R1bGUuRU5WLmRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcbiAgICBQaG90by5CQVNFX1VSTCA9IG9wdGlvbnMuaW1nQmFzZVVybCB8fCAnJztcbiAgICBEYXRhU2VydmljZS5LRVlfVVNFUiA9IG9wdGlvbnMudXNlcktleSB8fCAndXNlcic7XG5cbiAgICBpZiAoV2VjaGF0LmdldFVybFBhcmFtKCd2Q29uc29sZScpKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCB2Q29uc29sZSA9IG5ldyBWQ29uc29sZSgpO1xuICAgIH1cblxuICAgIFVJID0gdWk7XG4gICAgSW9uRXZlbnQgPSBldmVudHM7XG4gICAgREIgPSBkYXRhO1xuICB9XG5cblxuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zOiBPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVyc1xuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJb25XZWNoYXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IG9wdGlvbnN9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zXG57XG4gIGRlYnVnPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWtmOaUvueUqOaIt+eahCBrZXlcbiAgICovXG4gIHVzZXJLZXk/OiBzdHJpbmc7XG4gIGltZ0Jhc2VVcmw6IHN0cmluZztcbn1cbiJdfQ==