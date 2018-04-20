import {NgModule} from '@angular/core';
import {DataService} from "./providers/data.service";
import {Photo} from "./pipes/photo";
import {IonWechatProvidersModule} from "./providers/providers.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    IonWechatProvidersModule
  ]
})
export class IonWechatModule
{
  public static DEBUG: boolean = false;

  static forRoot(options: Options)
  {
    IonWechatModule.DEBUG = options.debug;
    Photo.BASE_URL = options.imgBaseUrl;
    DataService.KEY_USER = options.userKey;
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
