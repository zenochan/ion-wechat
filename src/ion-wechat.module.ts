import {NgModule} from '@angular/core';
import {DataService} from "./providers/data.service";
import {Photo} from "./pipes/photo";
import {IonWechatProvidersModule} from "./providers/providers.module";
import {HttpClientModule} from "@angular/common/http";
import {WeuiService} from "./providers/weui.service";
import {Events} from "ionic-angular";

export let UI: WeuiService;
export let Data: DataService;
export let IonEvent: Events;

@NgModule({
  imports: [
    HttpClientModule,
    IonWechatProvidersModule
  ]
})
export class IonWechatModule
{
  public static DEBUG: boolean = false;

  constructor(ui: WeuiService, data: DataService, events: Events)
  {
    UI = ui;
    Data = data;
    IonEvent = events;
    console.error(UI,Data,IonEvent);
  }

  static forRoot(options: Options)
  {
    IonWechatModule.DEBUG = options.debug;
    Photo.BASE_URL = options.imgBaseUrl;
    DataService.KEY_USER = options.userKey + (options.debug ? "_debug" : "");
    return IonWechatModule
  }
}

export class Options
{
  debug: boolean;
  /**
   * 存放用户的 key
   */
  userKey: string;
  imgBaseUrl: string;
}
