import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TinterPage} from './tinter';
import {IonWechatComponentsModule} from "../../components/ion-wechat-components.module";

@NgModule({
  declarations: [
    TinterPage,
  ],
  imports: [
    IonicPageModule.forChild(TinterPage),
    IonWechatComponentsModule
  ],
})
export class TinterPageModule {}
