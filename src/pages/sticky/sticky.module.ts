import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {StickyPage} from './sticky';
import {IonWechatDirectivesModule} from "../../directives/ion-wechat-directives.module";

@NgModule({
  declarations: [
    StickyPage
  ],
  imports: [
    IonicPageModule.forChild(StickyPage),
    IonWechatDirectivesModule
  ],
})
export class StickyPageModule {}
