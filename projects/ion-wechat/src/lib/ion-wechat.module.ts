import {Inject, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {IonicStorageModule} from '@ionic/storage';
import {Photo} from './pipes/photo';
import {DataService} from './service/data.service';
import {Wechat} from './wechat';
import * as VConsole from 'vconsole';
import {UiService} from './service/ui.service';
import {Events, IonicModule} from '@ionic/angular';

export const CONFIG = new InjectionToken('IonWechatConfig');

export let UI;
export let DB: DataService;
export let IonEvent: Events;

@NgModule({
  declarations: [],
  imports: [
    IonicModule,
    IonicStorageModule.forRoot(),
  ]
})
export class IonWechatModule
{
  static ENV = {debug: false};


  constructor(@Inject(CONFIG) options: Options, ui: UiService, data: DataService, events: Events)
  {
    IonWechatModule.ENV.debug = options.debug || false;
    Photo.BASE_URL = options.imgBaseUrl || '';
    DataService.KEY_USER = options.userKey || 'user';

    if (Wechat.getUrlParam('vConsole')) {
      // @ts-ignore
      const vConsole = new VConsole();
    }

    UI = ui;
    IonEvent = events;
    DB = data;
  }


  static forRoot(options: Options): ModuleWithProviders
  {
    return {
      ngModule: IonWechatModule,
      providers: [
        {provide: CONFIG, useValue: options},
      ]
    };
  }
}

export interface Options
{
  debug?: boolean;
  /**
   * 存放用户的 key
   */
  userKey?: string;
  imgBaseUrl: string;
}
