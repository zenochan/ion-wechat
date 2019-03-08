import {NgModule} from '@angular/core';
import {StickyDirective} from './sticky/sticky';
import {FixScrollDirective} from "./fix-scroll/fix-scroll";

@NgModule({
  declarations: [StickyDirective, FixScrollDirective],
  imports: [],
  exports: [StickyDirective, FixScrollDirective]
})
export class IonWechatDirectivesModule {}
