# Ion-Wechat
> 使用 ionic 开发微信 web 项目的通用模块

------

## INSTALL
> npm i --save zenochan/ion-wechat
------

## USAGE

#### PROVIDERS
```ts
@NgModule({
  //...
  imports: [
    //...
    IonWechatProvidersModule.forRoot({
      debug: true,
      userKey: "user", imgBaseUrl:""
    })
  ],
})
export class AppModule
{
}
```

#### PIPES


#### WEUI
```bash
cp node_modules/ion-wechat/dist/css/weui.ionicx.css ./src/assets/css/
```

app.scss
```scss
@import "../assets/css/weui.ionicx.css";
```
