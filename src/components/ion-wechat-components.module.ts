import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonWechatPipesModule
  ], exports: components
})
export class IonWechatComponentsModule {}
