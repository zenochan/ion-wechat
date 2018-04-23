import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';

export const DA_TEST = new InjectionToken("IonWechatConfig");

@NgModule({
  imports: [
    // HttpClientModule
    // IonWechatProvidersModule
  ]
})
export class TestModule
{
  public static DEBUG: boolean = false;

  // constructor(ui: WeuiService, data: DataService, events: Events, @Inject(CONFIG) options: Options)
  // {
  //   IonWechatModule.DEBUG = options.debug;
  //   Photo.BASE_URL = options.imgBaseUrl;
  //
  //   UI = ui;
  //   Data = data;
  //   IonEvent = events;
  // }

  static forRoot(options: string): ModuleWithProviders
  {
    return {
      ngModule: TestModule,
      providers: [
        {provide: DA_TEST, useValue: options},
      ]
    }
  }
}
