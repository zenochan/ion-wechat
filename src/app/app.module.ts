import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {IonWechatModule} from "../ion-wechat.module";
import {StickyPageModule} from "../pages/sticky/sticky.module";
import {IonWechatDirectivesModule} from "../directives/ion-wechat-directives.module";
import {TinterPageModule} from "../pages/tinter/tinter.module";
import {MediaPlayerPageModule} from "../pages/media-player/media-player.module";
import {IonWechatComponentsModule} from "../components/ion-wechat-components.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonWechatModule.forRoot({
      debug: true,
      userKey: "user",
      imgBaseUrl: ""
    }),
    StickyPageModule,
    TinterPageModule,
    MediaPlayerPageModule,
    IonWechatDirectivesModule,
    IonWechatComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule
{
}
