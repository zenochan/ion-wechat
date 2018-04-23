import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
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

  constructor(ui: WeuiService, data: DataService, events: Events, @Inject("ION_WECHAT_OPTIONS") options: Options)
  {
    IonWechatModule.DEBUG = options.debug;
    Photo.BASE_URL = options.imgBaseUrl;

    UI = ui;
    Data = data;
    IonEvent = events;
  }

  /**
   * @see [fuction calls are not supported in decorators](https://github.com/angular/angular-cli/issues/9358)
   * @param {Options} options
   * @returns {ModuleWithProviders}
   */
  static forRoot(options: Options): ModuleWithProviders
  {
    return {
      ngModule: IonWechatModule,
      providers: [{provide: "ION_WECHAT_OPTIONS", useValue: options}]
    }
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
