import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';

export const DA_TEST = new InjectionToken("IonWechatConfig");

/**
 * 213234
 */
@NgModule({
  imports: [
    // HttpClientModule
    // IonWechatProvidersModule
  ]
})
export class TestModule
{
  static forRoot(options: string): ModuleWithProviders
  {
    return {
      ngModule: TestModule,
      // providers: [
      //   {provide: DA_TEST, useValue: options},
      // ]
    }
  }
}
