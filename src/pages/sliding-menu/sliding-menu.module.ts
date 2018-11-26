import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SlidingMenuPage} from './sliding-menu';
import {IonWechatComponentsModule} from "../../components/ion-wechat-components.module";

@NgModule({
  declarations: [
    SlidingMenuPage
  ],
  imports: [
    IonicPageModule.forChild(SlidingMenuPage),
      IonWechatComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidingMenuPageModule {}
