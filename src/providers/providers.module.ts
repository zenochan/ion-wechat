import {NgModule} from "@angular/core";
import {WeuiService} from "./weui.service";
import {DataService} from "./data.service";
import {Events} from "ionic-angular";
import {IonicStorageModule} from "@ionic/storage";

export let UI: WeuiService;
export let Data: DataService;
export let IonEvent: Events;

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
  constructor(ui: WeuiService, data: DataService, events: Events)
  {
    UI = ui;
    Data = data;
    IonEvent = events;
  }
}
