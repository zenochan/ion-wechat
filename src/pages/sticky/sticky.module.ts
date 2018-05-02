import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {StickyPage} from './sticky';
import {IonWechatDirectivesModule} from "../../directives/ion-wechat-directives.module";

/**
 * 顶部吸附
 */
@NgModule({
  declarations: [
    StickyPage
  ],
  imports: [
    IonicPageModule.forChild(StickyPage),
    IonWechatDirectivesModule,
  ],
})
export class StickyPageModule {}
