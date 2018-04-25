import {NgModule} from '@angular/core';
import {PreviewPipe} from "./preview";
import {Sanitizer} from "./sanitizer";
import {ZdatePipe} from "./zdate";
import {Photo} from "./photo";

let pipes = [
  PreviewPipe,
  Sanitizer,
  ZdatePipe,
  Photo
];

@NgModule({
  declarations: [...pipes],
  imports: [],
  exports: [...pipes]
})
export class IonWechatPipesModule {}
