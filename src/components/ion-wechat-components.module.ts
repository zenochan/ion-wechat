import {NgModule} from '@angular/core';
import {TinterComponent} from './tinter/tinter';
import {SmartImgComponent} from "./smart-img/smart-img";
import {CommonModule} from "@angular/common";

let components = [
  TinterComponent,
  SmartImgComponent
];

@NgModule({declarations: components, imports: [CommonModule], exports: components})
export class IonWechatComponentsModule {}
