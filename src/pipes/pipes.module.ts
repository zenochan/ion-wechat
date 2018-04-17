import {NgModule} from '@angular/core';
import {PreviewPipe} from "./preview";
import {Sanitizer} from "./sanitizer";
import {ZdatePipe} from "./zdate";

let pipes = [
  PreviewPipe,
  Sanitizer,
  ZdatePipe
];

@NgModule({
  declarations: [...pipes],
  imports: [],
  exports: [...pipes]
})
export class PipesModule {}
