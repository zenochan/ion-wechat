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
export var CONFIG = new InjectionToken('IonWechatConfig');
/** @type {?} */
export var UI;
/** @type {?} */
export var DB;
/** @type {?} */
export var IonEvent;
var IonWechatModule = /** @class */ (function () {
    function IonWechatModule(options, ui, data, events) {
        IonWechatModule.ENV.debug = options.debug || false;
        Photo.BASE_URL = options.imgBaseUrl || '';
        DataService.KEY_USER = options.userKey || 'user';
        if (Wechat.getUrlParam('vConsole')) {
            // @ts-ignore
            /** @type {?} */
            var vConsole = new VConsole();
        }
        UI = ui;
        IonEvent = events;
        DB = data;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    IonWechatModule.forRoot = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: IonWechatModule,
            providers: [
                { provide: CONFIG, useValue: options },
            ]
        };
    };
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
    IonWechatModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] },
        { type: UiService },
        { type: DataService },
        { type: Events }
    ]; };
    return IonWechatModule;
}());
export { IonWechatModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXdlY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24td2VjaGF0LyIsInNvdXJjZXMiOlsibGliL2lvbi13ZWNoYXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE1BQU0sS0FBTyxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsaUJBQWlCLENBQUM7O0FBRTNELE1BQU0sS0FBSyxFQUFFOztBQUNiLE1BQU0sS0FBSyxFQUFlOztBQUMxQixNQUFNLEtBQUssUUFBZ0I7QUFFM0I7SUFZRSx5QkFBNEIsT0FBZ0IsRUFBRSxFQUFhLEVBQUUsSUFBaUIsRUFBRSxNQUFjO1FBRTVGLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ25ELEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDMUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQztRQUVqRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUU7OztnQkFFNUIsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFO1NBQ2hDO1FBRUQsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNaLENBQUM7Ozs7O0lBR00sdUJBQU87Ozs7SUFBZCxVQUFlLE9BQWdCO1FBRTdCLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7YUFDckM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQTVCTSxtQkFBRyxHQUFHLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDOztnQkFUN0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7cUJBQzdCO2lCQUNGOzs7O2dEQU1jLE1BQU0sU0FBQyxNQUFNO2dCQXJCcEIsU0FBUztnQkFIVCxXQUFXO2dCQUlYLE1BQU07O0lBOENkLHNCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0EvQlksZUFBZTs7O0lBRTFCLG9CQUE0Qjs7Ozs7QUErQjlCLDZCQVFDOzs7SUFOQyx3QkFBZ0I7Ozs7O0lBSWhCLDBCQUFpQjs7SUFDakIsNkJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lvbmljU3RvcmFnZU1vZHVsZX0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHtQaG90b30gZnJvbSAnLi9waXBlcy9waG90byc7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7V2VjaGF0fSBmcm9tICcuL3dlY2hhdCc7XG5pbXBvcnQgKiBhcyBWQ29uc29sZSBmcm9tICd2Y29uc29sZSc7XG5pbXBvcnQge1VpU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL3VpLnNlcnZpY2UnO1xuaW1wb3J0IHtFdmVudHMsIElvbmljTW9kdWxlfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmV4cG9ydCBjb25zdCBDT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0lvbldlY2hhdENvbmZpZycpO1xuXG5leHBvcnQgbGV0IFVJO1xuZXhwb3J0IGxldCBEQjogRGF0YVNlcnZpY2U7XG5leHBvcnQgbGV0IElvbkV2ZW50OiBFdmVudHM7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBJb25pY01vZHVsZSxcbiAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElvbldlY2hhdE1vZHVsZVxue1xuICBzdGF0aWMgRU5WID0ge2RlYnVnOiBmYWxzZX07XG5cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENPTkZJRykgb3B0aW9uczogT3B0aW9ucywgdWk6IFVpU2VydmljZSwgZGF0YTogRGF0YVNlcnZpY2UsIGV2ZW50czogRXZlbnRzKVxuICB7XG4gICAgSW9uV2VjaGF0TW9kdWxlLkVOVi5kZWJ1ZyA9IG9wdGlvbnMuZGVidWcgfHwgZmFsc2U7XG4gICAgUGhvdG8uQkFTRV9VUkwgPSBvcHRpb25zLmltZ0Jhc2VVcmwgfHwgJyc7XG4gICAgRGF0YVNlcnZpY2UuS0VZX1VTRVIgPSBvcHRpb25zLnVzZXJLZXkgfHwgJ3VzZXInO1xuXG4gICAgaWYgKFdlY2hhdC5nZXRVcmxQYXJhbSgndkNvbnNvbGUnKSkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgdkNvbnNvbGUgPSBuZXcgVkNvbnNvbGUoKTtcbiAgICB9XG5cbiAgICBVSSA9IHVpO1xuICAgIElvbkV2ZW50ID0gZXZlbnRzO1xuICAgIERCID0gZGF0YTtcbiAgfVxuXG5cbiAgc3RhdGljIGZvclJvb3Qob3B0aW9uczogT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnNcbiAge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW9uV2VjaGF0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiBDT05GSUcsIHVzZVZhbHVlOiBvcHRpb25zfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uc1xue1xuICBkZWJ1Zz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlrZjmlL7nlKjmiLfnmoQga2V5XG4gICAqL1xuICB1c2VyS2V5Pzogc3RyaW5nO1xuICBpbWdCYXNlVXJsOiBzdHJpbmc7XG59XG4iXX0=