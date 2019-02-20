import {NgModule} from '@angular/core';
import {TinterComponent} from './tinter/tinter';
import {SmartImgComponent} from "./smart-img/smart-img";
import {CommonModule} from "@angular/common";
import {RichTextComponent} from "./rich-text/rich-text";
import {IonWechatPipesModule} from "../pipes/pipes.module";

let components = [
  TinterComponent,
  SmartImgComponent,
  RichTextComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    IonWechatPipesModule
  ]
})
export class IonWechatComponentsModule {}
