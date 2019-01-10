import {Inject, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {DataService} from "./providers/data.service";
import {WeuiService} from "./providers/weui.service";
import {Events, IonicModule} from "ionic-angular";
import {HttpClientModule} from "@angular/common/http";
import {IonWechatProvidersModule} from "./providers/providers.module";
import {Photo} from "./pipes/photo";

export let UI: WeuiService;
export let Data: DataService;
export let IonEvent: Events;
export const CONFIG = new InjectionToken("IonWechatConfig");

@NgModule({
  imports: [
    IonicModule,
    HttpClientModule,
    IonWechatProvidersModule
  ]
})
export class IonWechatModule
{
  public static DEBUG: boolean = false;

  constructor(ui: WeuiService, data: DataService, events: Events, @Inject(CONFIG) options: Options)
  {
    IonWechatModule.DEBUG = options.debug;
    Photo.BASE_URL = options.imgBaseUrl;
    DataService.KEY_USER = options.userKey || "user";

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
      providers: [
        {provide: CONFIG, useValue: options},
      ]
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
