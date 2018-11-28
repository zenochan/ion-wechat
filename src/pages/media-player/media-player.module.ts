import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MediaPlayerPage} from './media-player';
import {IonWechatComponentsModule} from "../../components/ion-wechat-components.module";

@NgModule({
  declarations: [
    MediaPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(MediaPlayerPage),
      IonWechatComponentsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MediaPlayerPageModule {}