# Ion-Wechat
> 使用 ionic 开发微信 web 项目的通用模块

------

## Components
 
- qrcode: `<qrcode></qrcode>`
- `<smart-img url="imgUrl" mode="0(default)|1|2"/>`
    > 0:aspect-fit, 1: scale-fill ,2 :aspect-fit


## USAGE
> npm i --save @izeno/ion-wechat

#### PROVIDERS
```ts
@NgModule({
  //...
  imports: [
    //...
    IonWechatModule.forRoot({
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
- [photo](./src/pipes/photo.ts)
- [sanitizer](./src/pipes/sanitizer.ts)
- [zdate](./src/pipes/zdate.ts)
- [preview](./src/pipes/preview.ts)


#### WEUI
```scss
@import "../../node_modules/ion-wechat/src/scss/icon-maker";
@import "../../node_modules/ion-wechat/src/weui/weui.ionicx";

@include makeIcon('home', "../assets/icon/ic_home.png", "../assets/icon/ic_home_o.png")
```




