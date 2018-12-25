import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MediaPlayerPage } from './media-player';
import { IonWechatComponentsModule } from "../../components/ion-wechat-components.module";
var MediaPlayerPageModule = /** @class */ (function () {
    function MediaPlayerPageModule() {
    }
    MediaPlayerPageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MediaPlayerPage,
                    ],
                    imports: [
                        IonicPageModule.forChild(MediaPlayerPage),
                        IonWechatComponentsModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    return MediaPlayerPageModule;
}());
export { MediaPlayerPageModule };
//# sourceMappingURL=media-player.module.js.map