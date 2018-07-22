import {NgModule} from '@angular/core';
import {TinterComponent} from './tinter/tinter';
import {SmartImgComponent} from "./smart-img/smart-img";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [TinterComponent, SmartImgComponent],
  imports: [CommonModule],
  exports: [TinterComponent, SmartImgComponent]
})
export class IonWechatComponentsModule {}
