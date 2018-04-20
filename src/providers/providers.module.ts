import {NgModule} from "@angular/core";
import {WeuiService} from "./weui.service";
import {DataService} from "./data.service";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  imports: [
    IonicStorageModule.forRoot()
  ],
  providers: [
    WeuiService,
    DataService,
  ]
})
export class IonWechatProvidersModule
{
}
