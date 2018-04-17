import {NgModule, Type} from "@angular/core";
import {WeuiService} from "./weui.service";
import {DataService} from "./data.service";
import {Events} from "ionic-angular";
import {IonicStorageModule} from "@ionic/storage";

export let UI: WeuiService;
export let Data: DataService;
export let Event: Events;

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
    Event = events;
  }

  static forRoot(options: Options)
  {
    return IonWechatProvidersModule
  }
}

export class Options
{
  debug: boolean;
  /**
   * 存放用户的 key
   */
  userKey: string;
}